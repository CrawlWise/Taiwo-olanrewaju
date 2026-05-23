import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/live";
import { client } from "@/sanity/client";
import {
  POST_BY_SLUG_QUERY,
  ALL_POST_SLUGS_QUERY,
  RELATED_POSTS_QUERY,
} from "@/sanity/queries";
import SlugPageClient from "./SlugPageClient";

// ── Types ─────────────────────────────────────────────────────────────────────

type SanityImageRef = {
  asset?: { url?: string } | null;
  alt?: string | null;
} | null;

type PostData = {
  _id: string;
  title?: string | null;
  slug?: { current?: string } | null;
  publishedAt?: string | null;
  excerpt?: string | null;
  mainImage?: SanityImageRef;
  body?: unknown[] | null;
  author?: {
    name?: string | null;
    bio?: unknown[] | null;
    image?: SanityImageRef;
  } | null;
  categories?: Array<{
    _id: string;
    title?: string | null;
    slug?: { current?: string } | null;
  }> | null;
} | null;

type RelatedPostData = {
  _id: string;
  title?: string | null;
  slug?: { current?: string } | null;
  publishedAt?: string | null;
  mainImage?: SanityImageRef;
};

// ── Static Params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await client.fetch(ALL_POST_SLUGS_QUERY);
  return (slugs ?? []).map((s: any) => ({ slug: s.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug }) as PostData;

  if (!post) return { title: "Post Not Found" };

  const imageUrl = post.mainImage?.asset?.url
    ? `${post.mainImage.asset.url}?w=1200&h=630&fit=crop&auto=format`
    : undefined;

  return {
    title: `${post.title} | Taiwo Olanrewaju`,
    description: post.excerpt ?? "Read this article on Taiwo Olanrewaju's blog.",
    openGraph: {
      title: post.title ?? "",
      description: post.excerpt ?? "",
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
      authors: post.author?.name ? [post.author.name] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title ?? "",
      description: post.excerpt ?? "",
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function estimateReadTime(body: any): number {
  if (!body || !Array.isArray(body)) return 3;
  const textBlocks = body.filter(
    (b): b is { children?: Array<{ text?: string }> } =>
      typeof b === "object" && b !== null && "_type" in b && (b as { _type: string })._type === "block"
  );
  const wordCount = textBlocks.reduce((acc, block) => {
    const text = (block.children ?? []).map((c) => c.text ?? "").join(" ");
    return acc + text.trim().split(/\s+/).filter(Boolean).length;
  }, 0);
  return Math.max(1, Math.ceil(wordCount / 238));
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [{ data: rawPost }, { data: rawRelated }] = await Promise.all([
    sanityFetch({ query: POST_BY_SLUG_QUERY, params: { slug } }),
    sanityFetch({ query: RELATED_POSTS_QUERY, params: { slug } }),
  ]);

  const post = rawPost as PostData;
  const relatedRaw = rawRelated as RelatedPostData[] | null;

  if (!post) notFound();

  const readTime = estimateReadTime((post.body ?? []) as unknown[]);

  return (
    <SlugPageClient
      title={post.title ?? "Untitled"}
      publishedAt={post.publishedAt}
      excerpt={post.excerpt}
      mainImage={post.mainImage}
      body={post.body}
      author={post.author}
      categories={
        (post.categories ?? []).map((c) => ({
          _id: c._id,
          title: c.title ?? "",
          slug: c.slug,
        }))
      }
      relatedPosts={
        (relatedRaw ?? []).map((rp) => ({
          _id: rp._id,
          title: rp.title,
          slug: rp.slug,
          publishedAt: rp.publishedAt,
          mainImage: rp.mainImage,
        }))
      }
      readTime={readTime}
    />
  );
}