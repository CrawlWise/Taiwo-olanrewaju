import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Taiwo Olanrewaju",
  description: "Read the latest articles on Insurance, Financial Education, and Wealth Building.",
};

const MOCK_POSTS = [
  { id: 1, title: "5 Steps to Build Generational Wealth", category: "Wealth Building", date: "May 10, 2026", excerpt: "Discover the foundational principles of creating wealth that lasts for generations." },
  { id: 2, title: "Understanding Life Insurance Policies", category: "Insurance", date: "May 5, 2026", excerpt: "A comprehensive guide to choosing the right life insurance for your family." },
  { id: 3, title: "A Financial Guide for Newcomers to Canada", category: "Newcomer Finance", date: "April 28, 2026", excerpt: "Navigating the Canadian financial system can be daunting. Start here." },
  { id: 4, title: "The Power of Compound Interest", category: "Financial Education", date: "April 15, 2026", excerpt: "Why starting early is the most important factor in your investment journey." },
  { id: 5, title: "Protecting Your Assets During Economic Downturns", category: "Wealth Building", date: "April 2, 2026", excerpt: "Strategies to recession-proof your portfolio." },
  { id: 6, title: "Term vs Whole Life Insurance: Explained", category: "Insurance", date: "March 20, 2026", excerpt: "Breaking down the pros and cons of the two main types of life insurance." },
];

const CATEGORIES = ["All", "Insurance", "Financial Education", "Wealth Building", "Newcomer Finance"];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-primary font-poppins mb-6">Financial Insights</h1>
          <p className="text-lg text-muted-foreground">
            Articles, guides, and updates on wealth building, insurance, and personal finance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                i === 0 
                  ? "bg-primary text-white" 
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_POSTS.map((post) => (
            <article key={post.id} className="group flex flex-col bg-card rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  [Article Image: {post.category}]
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-bold rounded-full text-primary">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-sm text-muted-foreground mb-3">{post.date}</span>
                <h2 className="text-xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center text-primary font-semibold text-sm">
                  Read Article &rarr;
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center">
          <button className="px-6 py-3 border border-border rounded-md hover:bg-muted font-medium transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
