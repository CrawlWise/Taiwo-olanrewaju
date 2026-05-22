"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextReactComponents } from "@portabletext/react";
import { CalendarDays, Clock3, ArrowLeft, Share2, Tag } from "lucide-react";

// ── Portable Text Components ─────────────────────────────────────────────────

type ImageValue = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
};

const portableComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    normal: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => <blockquote><p>{children}</p></blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span style={{ textDecoration: "underline" }}>{children}</span>,
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => <code>{children}</code>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: ImageValue }) => {
      const url = value?.asset?.url
        ? `${value.asset.url}?w=900&auto=format&fit=max`
        : null;
      if (!url) return null;
      return (
        <figure>
          <img src={url} alt={value.alt ?? ""} loading="lazy" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
};

// ── Share Button ─────────────────────────────────────────────────────────────

function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* silent */
    }
  };

  return (
    <button
      onClick={handleShare}
      className="glass flex items-center gap-2 rounded-full px-4 py-2 text-white transition hover:bg-white/20 text-sm"
      id="share-article-btn"
    >
      <Share2 size={15} />
      {copied ? "Copied!" : "Share"}
    </button>
  );
}

// ── Types ────────────────────────────────────────────────────────────────────

type Category = { _id: string; title: string; slug?: { current?: string } | null };
type Author = {
  name?: string | null;
  bio?: unknown[] | null;
  image?: { asset?: { url?: string } | null; alt?: string | null } | null;
};
type RelatedPost = {
  _id: string;
  title?: string | null;
  slug?: { current?: string } | null;
  publishedAt?: string | null;
  mainImage?: { asset?: { url?: string } | null; alt?: string | null } | null;
};

interface SlugPageClientProps {
  title: string;
  publishedAt?: string | null;
  excerpt?: string | null;
  mainImage?: { asset?: { url?: string } | null; alt?: string | null } | null;
  body?: unknown[] | null;
  author?: Author | null;
  categories?: Category[] | null;
  relatedPosts?: RelatedPost[];
  readTime: number;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── Client Component ─────────────────────────────────────────────────────────

export default function SlugPageClient({
  title,
  publishedAt,
  excerpt,
  mainImage,
  body,
  author,
  categories,
  relatedPosts = [],
  readTime,
}: SlugPageClientProps) {
  const heroImageUrl = mainImage?.asset?.url
    ? `${mainImage.asset.url}?w=1920&h=700&fit=crop&auto=format`
    : null;

  const authorImageUrl = author?.image?.asset?.url
    ? `${author.image.asset.url}?w=144&h=144&fit=crop&auto=format`
    : null;

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="relative w-full" style={{ height: "clamp(420px, 58vh, 600px)" }}>
          {heroImageUrl ? (
            <Image
              src={heroImageUrl}
              alt={mainImage?.alt ?? title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #800020 0%, #5c0017 50%, #1a0008 100%)",
              }}
            />
          )}

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/55" />
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "linear-gradient(to top, #1a0008 0%, transparent 60%)",
            }}
          />

          {/* Decorative orb */}
          <div
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #d4af37, transparent 70%)" }}
          />

          {/* Hero content */}
          <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-14">
            <Link
              href="/blog"
              className="glass mb-8 flex w-fit items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              id="back-to-blog-link"
            >
              <ArrowLeft size={15} />
              Back to Blog
            </Link>

            {/* Categories */}
            {categories && categories.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span key={cat._id} className="blog-tag-primary">
                    {cat.title}
                  </span>
                ))}
              </div>
            )}

            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>

            {excerpt && (
              <p className="mt-4 max-w-2xl text-base text-white/70 leading-7">
                {excerpt}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/75">
              {publishedAt && (
                <div className="flex items-center gap-2">
                  <CalendarDays size={15} />
                  <span>{formatDate(publishedAt)}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock3 size={15} />
                <span>{readTime} min read</span>
              </div>
              <ShareButton />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT GRID ────────────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-3">

        {/* ── ARTICLE ─────────────────────────────────────────────────── */}
        <article className="lg:col-span-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-premium)] md:p-12">
            {body && body.length > 0 ? (
              <div className="prose-blog">
                <PortableText value={body as Parameters<typeof PortableText>[0]["value"]} components={portableComponents} />
              </div>
            ) : (
              <p className="text-muted-foreground leading-9 text-lg">
                {excerpt ?? "This article has no content yet."}
              </p>
            )}
          </div>

          {/* Tags strip */}
          {categories && categories.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Tag size={15} className="text-muted-foreground" />
              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={`/blog?category=${cat.slug?.current ?? ""}`}
                  className="blog-tag"
                  id={`article-tag-${cat._id}`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          )}
        </article>

        {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
        <aside className="space-y-8">

          {/* Author */}
          {author && (
            <div className="sidebar-card">
              <h2 className="sidebar-card-title">About the Author</h2>

              <div className="flex items-center gap-4">
                {authorImageUrl ? (
                  <Image
                    src={authorImageUrl}
                    alt={author.name ?? "Author"}
                    width={72}
                    height={72}
                    className="rounded-full border-2 border-gold object-cover flex-shrink-0"
                  />
                ) : (
                  <div
                    className="rounded-full border-2 border-gold flex-shrink-0 flex items-center justify-center text-white font-bold text-xl"
                    style={{
                      width: 72,
                      height: 72,
                      background: "linear-gradient(135deg, #800020, #d4af37)",
                    }}
                  >
                    {author.name?.[0] ?? "A"}
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold">{author.name}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">Recruitment Expert</p>
                </div>
              </div>

              {author.bio && Array.isArray(author.bio) && author.bio.length > 0 && (
                <div className="prose-blog mt-5 text-sm">
                  <PortableText value={author.bio as Parameters<typeof PortableText>[0]["value"]} />
                </div>
              )}
            </div>
          )}

          {/* Categories */}
          {categories && categories.length > 0 && (
            <div className="sidebar-card">
              <h2 className="sidebar-card-title">Categories</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <Link
                    key={cat._id}
                    href={`/blog?category=${cat.slug?.current ?? ""}`}
                    className="filter-pill"
                    id={`sidebar-cat-${cat._id}`}
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="sidebar-card">
              <h2 className="sidebar-card-title">Related Articles</h2>
              <div className="space-y-5">
                {relatedPosts.map((rp) => {
                  const rpImg = rp.mainImage?.asset?.url
                    ? `${rp.mainImage.asset.url}?w=200&h=150&fit=crop&auto=format`
                    : null;
                  return (
                    <Link
                      key={rp._id}
                      href={`/blog/${rp.slug?.current ?? ""}`}
                      className="group flex gap-4 rounded-2xl transition"
                      id={`related-${rp._id}`}
                    >
                      <div className="relative h-20 w-24 overflow-hidden rounded-xl flex-shrink-0">
                        {rpImg ? (
                          <img
                            src={rpImg}
                            alt={rp.mainImage?.alt ?? rp.title ?? "Related post"}
                            className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                          />
                        ) : (
                          <div
                            className="w-full h-full"
                            style={{
                              background:
                                "linear-gradient(135deg, #800020, #1a0008)",
                            }}
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="line-clamp-2 text-sm font-semibold leading-5 transition group-hover:text-primary">
                          {rp.title}
                        </h4>
                        {rp.publishedAt && (
                          <p className="text-muted-foreground mt-1.5 text-xs">
                            {formatDate(rp.publishedAt)}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Back CTA */}
          <div
            className="rounded-3xl p-6 text-center"
            style={{
              background: "linear-gradient(135deg, #800020 0%, #5c0017 100%)",
            }}
          >
            <p className="text-white font-semibold text-lg">Enjoyed this article?</p>
            <p className="text-white/70 text-sm mt-2">
              Explore more insights from the blog.
            </p>
            <Link
              href="/blog"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-black hover:bg-gold-light transition"
              id="sidebar-back-to-blog"
            >
              Browse All Posts
              <ArrowLeft size={14} className="rotate-180" />
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
