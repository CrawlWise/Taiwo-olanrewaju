import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { sanityFetch } from "@/sanity/live";
import { ALL_POSTS_QUERY, ALL_CATEGORIES_QUERY } from "@/sanity/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Taiwo Olanrewaju",
  description:
    "Thought leadership, career insights, and industry perspectives from Taiwo Olanrewaju — recruitment expert and executive advisor.",
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function estimateReadTime(excerpt?: string | null): number {
  if (!excerpt) return 3;
  const words = excerpt.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil((words * 5) / 238));
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ── Page ─────────────────────────────────────────────────────────────────────

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const activeCategory = resolvedSearchParams.category;

  const [{ data: posts }, { data: categories }] = (await Promise.all([
    sanityFetch({ query: ALL_POSTS_QUERY }),
    sanityFetch({ query: ALL_CATEGORIES_QUERY }),
  ])) as any[];

  // Filter posts by selected category slug in memory
  const filteredPosts = activeCategory
    ? posts?.filter((post: any) =>
        post.categories?.some((cat: any) => cat.slug?.current === activeCategory)
      )
    : posts;

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="blog-hero">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1920&auto=format&fit=crop"
            alt="Blog hero background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlays */}
        <div className="blog-hero-overlay" />
        <div className="blog-hero-gradient" />

        {/* Decorative orb */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4af37, transparent 70%)" }}
        />

        {/* Content */}
        <div className="blog-hero-content" style={{ minHeight: "62vh" }}>
          <div
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold mb-6"
            style={{ animationDelay: "0.1s", background: "rgba(212,175,55,0.08)" }}
          >
            <Sparkles size={14} />
            Insights &amp; Perspectives
          </div>

          <h1
            className="animate-fade-up max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.2s" }}
          >
            Ideas That{" "}
            <span className="text-gradient-gold">Shape Careers</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg text-white/75 leading-8"
            style={{ animationDelay: "0.32s" }}
          >
            Thought leadership, career insights, and executive perspectives from
            the forefront of professional recruitment and talent strategy.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/60"
            style={{ animationDelay: "0.44s" }}
          >
            <div className="flex items-center gap-2">
              <BookOpen size={15} />
              <span>{posts?.length ?? 0} articles published</span>
            </div>
            <span className="opacity-40">·</span>
            <span>{categories?.length ?? 0} categories</span>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
        />
      </section>

      {/* ── CATEGORY FILTERS ──────────────────────────────────────────────── */}
      {categories && categories.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pt-12 pb-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-muted-foreground mr-2 uppercase tracking-wider">
              Filter:
            </span>
            <Link 
              href="/blog" 
              className={`filter-pill ${!activeCategory ? "active" : ""}`} 
              id="filter-all"
            >
              All Posts
            </Link>
            {categories.map((cat: any) => {
              const isCurrent = activeCategory === cat.slug?.current;
              return (
                <Link
                  key={cat._id}
                  href={`/blog?category=${cat.slug?.current ?? ""}`}
                  className={`filter-pill ${isCurrent ? "active" : ""}`}
                  id={`filter-${cat.slug?.current ?? cat._id}`}
                >
                  {cat.title}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ── POST GRID ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {!filteredPosts || filteredPosts.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-32 text-center gap-6">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: "rgba(128,0,32,0.08)" }}
            >
              <BookOpen size={36} className="text-primary opacity-60" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">No posts found</h2>
            <p className="text-muted-foreground max-w-md">
              There are no articles in this category yet. Check back soon or select another category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post: any, i: number) => {
              const imageUrl =
                post.mainImage?.asset?.url
                  ? `${post.mainImage.asset.url}?w=800&h=500&fit=crop&auto=format`
                  : null;

              const authorImageUrl =
                post.author?.image?.asset?.url
                  ? `${post.author.image.asset.url}?w=64&h=64&fit=crop&auto=format`
                  : null;

              return (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug?.current ?? ""}`}
                  className="blog-card animate-fade-up"
                  style={{ animationDelay: `${0.08 * i}s` }}
                  id={`post-card-${post._id}`}
                >
                  {/* Cover image */}
                  <div className="blog-card-image-wrap">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={post.mainImage?.alt ?? post.title ?? "Post image"}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #800020 0%, #5c0017 60%, #1a0008 100%)",
                        }}
                      />
                    )}

                    {/* Category overlay badge */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="absolute top-4 left-4">
                        <span className="blog-tag-primary">
                          {post.categories[0].title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="blog-card-body">
                    {/* Title */}
                    <h2 className="line-clamp-2 text-lg font-bold leading-tight group-hover:text-primary transition">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="line-clamp-3 text-sm text-muted-foreground leading-6">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-4">
                      {/* Author */}
                      <div className="author-chip">
                        {authorImageUrl ? (
                          <img
                            src={authorImageUrl}
                            alt={post.author?.name ?? "Author"}
                            className="author-chip-avatar"
                          />
                        ) : (
                          <div
                            className="rounded-full border-2 border-gold flex-shrink-0"
                            style={{
                              width: 32,
                              height: 32,
                              background: "linear-gradient(135deg,#800020,#d4af37)",
                            }}
                          />
                        )}
                        <span className="author-chip-name truncate max-w-[120px]">
                          {post.author?.name ?? "Author"}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
                        {post.publishedAt && (
                          <div className="flex items-center gap-1">
                            <CalendarDays size={12} />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Clock3 size={12} />
                          <span>{estimateReadTime(post.excerpt)} min</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Read more CTA strip */}
                  <div
                    className="flex items-center justify-between px-6 py-3 text-xs font-semibold text-primary border-t border-border transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div
          className="relative overflow-hidden rounded-3xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, #800020 0%, #5c0017 50%, #1a0008 100%)",
          }}
        >
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ background: "#d4af37" }}
          />
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Want to work together?
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Let&apos;s discuss how I can help you find the right talent or your next
            career opportunity.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-semibold text-black transition hover:bg-gold-light"
            id="blog-cta-contact"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}