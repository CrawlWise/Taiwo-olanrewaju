import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { sanityFetch } from "@/sanity/live";
import { ALL_POSTS_QUERY, ALL_CATEGORIES_QUERY } from "@/sanity/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Taiwo Olanrewaju",
  description:
    "Thought leadership, career insights, and industry perspectives from Taiwo Olanrewaju — recruitment expert and executive advisor.",
};

// ── Helpers ─────────────────────────────────────────────

function estimateReadTime(excerpt?: string | null): number {
  if (!excerpt) return 3;
  const words = excerpt.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil((words * 5) / 238));
}

function formatDate(dateString?: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ── PAGE ────────────────────────────────────────────────

export default async function BlogPage() {
  const postsRes = await sanityFetch(ALL_POSTS_QUERY);
  const categoriesRes = await sanityFetch(ALL_CATEGORIES_QUERY);

  const posts = postsRes ?? [];
  const categories = categoriesRes ?? [];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative blog-hero">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1920&auto=format&fit=crop"
            alt="Blog hero background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="blog-hero-overlay" />
        <div className="blog-hero-gradient" />

        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #d4af37, transparent 70%)",
          }}
        />

        <div className="blog-hero-content" style={{ minHeight: "62vh" }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold mb-6 bg-gold/10">
            <Sparkles size={14} />
            Insights & Perspectives
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Ideas That <span className="text-gradient-gold">Shape Careers</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Thought leadership, career insights, and executive perspectives.
          </p>

          <div className="mt-8 flex gap-3 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <BookOpen size={15} />
              <span>{posts.length} articles published</span>
            </div>
            <span>·</span>
            <span>{categories.length} categories</span>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {categories.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pt-12 pb-2">
          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className="filter-pill active">
              All Posts
            </Link>

            {categories.map((cat: any) => (
              <Link
                key={cat._id}
                href={`/blog?category=${cat.slug?.current || ""}`}
                className="filter-pill"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* POSTS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-32">
            <BookOpen size={40} className="mx-auto text-muted-foreground" />
            <h2 className="text-2xl font-bold mt-4">No posts yet</h2>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any, i: number) => {
              const imageUrl = post.mainImage?.asset?.url;
              const authorImage = post.author?.image?.asset?.url;

              return (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug?.current || ""}`}
                  className="blog-card animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* IMAGE */}
                  <div className="blog-card-image-wrap">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        width={800}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#800020] to-black" />
                    )}

                    {post.categories?.length > 0 && (
                      <div className="absolute top-4 left-4">
                        <span className="blog-tag-primary">
                          {post.categories[0].title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="blog-card-body">
                    <h2 className="text-lg font-bold line-clamp-2">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        {authorImage && (
                          <Image
                            src={authorImage}
                            alt="author"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        )}
                        <span>{post.author?.name}</span>
                      </div>

                      <div className="flex gap-2">
                        <span>
                          <CalendarDays size={12} />{" "}
                          {formatDate(post.publishedAt)}
                        </span>
                        <span>
                          <Clock3 size={12} /> {estimateReadTime(post.excerpt)}{" "}
                          min
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="blog-cta">
                    Read Article <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl p-12 text-center bg-gradient-to-br from-[#800020] to-black text-white">
          <h2 className="text-3xl font-bold">Want to work together?</h2>
          <p className="mt-4 text-white/70">
            Let’s build something impactful together.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-full font-semibold"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
