import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  ArrowLeft,
  Share2,
} from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[520px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
            alt="Blog cover"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Gradient Accent */}
          <div className="bg-gradient-burgundy absolute inset-0 opacity-60" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16">
            <button className="glass mb-8 flex w-fit items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white transition hover:bg-white/20">
              <ArrowLeft size={16} />
              Back to Blog
            </button>

            <span className="mb-5 w-fit rounded-full bg-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-black shadow-[var(--shadow-gold)]">
              Technology
            </span>

            <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Building Modern Web Applications with Next.js 16
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                <span>May 18, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                <span>5 min read</span>
              </div>

              <button className="glass flex items-center gap-2 rounded-full px-4 py-2 text-white transition hover:bg-white/20">
                <Share2 size={16} />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-3">
        {/* ARTICLE */}
        <article className="lg:col-span-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-premium)] md:p-12">
            <p className="text-muted-foreground mb-8 text-lg leading-9">
              Next.js 16 introduces major improvements in performance,
              server-side rendering, and developer experience. Whether you’re
              building SaaS products, dashboards, or enterprise platforms, the
              latest updates make development significantly faster and more
              scalable.
            </p>

            <h2 className="mb-5 text-3xl font-bold text-primary">
              Why Developers Love Next.js
            </h2>

            <p className="text-muted-foreground leading-9">
              Developers choose Next.js because it provides built-in routing,
              optimized image handling, API support, and powerful rendering
              strategies out of the box. Combined with React Server Components
              and Turbopack, applications feel faster and more modern than
              ever before.
            </p>

            <div className="my-12 overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Team working"
                width={1200}
                height={700}
                className="h-auto w-full object-cover"
              />
            </div>

            <h2 className="mb-5 text-3xl font-bold text-primary">
              Performance Optimization
            </h2>

            <p className="text-muted-foreground leading-9">
              With Turbopack, optimized package imports, and improved caching,
              applications compile significantly faster. This creates a smoother
              development workflow while delivering a premium user experience.
            </p>

            <blockquote className="bg-gradient-burgundy my-12 rounded-3xl border border-white/10 p-8 text-xl leading-9 text-white shadow-[var(--shadow-premium)]">
              <span className="text-gradient-gold block text-2xl font-bold">
                “Modern frontend development is no longer just about interfaces.”
              </span>

              <p className="mt-4 text-white/80">
                It’s about building scalable digital experiences that feel fast,
                elegant, and seamless across every device.
              </p>
            </blockquote>

            <p className="text-muted-foreground leading-9">
              As the ecosystem evolves, frameworks like Next.js continue to
              simplify complex engineering problems while improving developer
              productivity and user satisfaction.
            </p>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          {/* AUTHOR */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-premium)]">
            <div className="flex items-center gap-4">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
                alt="Author"
                width={72}
                height={72}
                className="rounded-full border-2 border-gold object-cover"
              />

              <div>
                <h3 className="text-xl font-bold">Albert Eromosele</h3>

                <p className="text-muted-foreground text-sm">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mt-6 leading-8">
              Passionate about building scalable web applications using
              Next.js, FastAPI, Django, and modern frontend technologies.
            </p>
          </div>

          {/* CATEGORIES */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-premium)]">
            <h3 className="mb-5 text-xl font-bold text-primary">
              Categories
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Technology",
                "Web Development",
                "React",
                "Next.js",
                "AI",
                "Design",
              ].map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition hover:bg-primary hover:text-primary-foreground"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* RELATED POSTS */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-premium)]">
            <h3 className="mb-6 text-xl font-bold text-primary">
              Related Posts
            </h3>

            <div className="space-y-5">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group flex gap-4 rounded-2xl transition"
                >
                  <div className="relative h-24 w-28 overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop"
                      alt="Related"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="line-clamp-2 font-semibold leading-6 transition group-hover:text-primary">
                      Creating Fast and Scalable React Applications
                    </h4>

                    <p className="text-muted-foreground mt-2 text-sm">
                      May 2026 · 4 min read
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}