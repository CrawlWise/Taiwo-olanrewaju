import { client } from "@/sanity/lib/client";
import { BOOK_BY_SLUG_QUERY } from "@/sanity/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Download, BookOpen, Lock } from "lucide-react";

export const dynamic = "force-dynamic";

interface Book {
  _id: string;
  title: string;
  summary?: string;
  price?: number;
  isFree?: boolean;
  coverImage?: {
    asset?: { url: string };
    alt?: string;
  };
  fileUrl?: string;
}

export default async function BookPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  if (!slug) {
    return notFound();
  }

  const book: Book | null = await client.fetch(BOOK_BY_SLUG_QUERY, { slug });

  if (!book) {
    return notFound();
  }

  const image = book.coverImage?.asset?.url || "/images/book-mockup.png";

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-burgundy to-black text-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <div className="relative h-[420px] w-full">
            <Image
              src={image}
              alt={book.title}
              fill
              className="object-contain rounded-xl"
            />
          </div>

          {/* DETAILS */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-white/80">
              <BookOpen className="w-5 h-5" />
              <span>Digital Book</span>
            </div>

            <h1 className="text-4xl font-bold mb-4">{book.title}</h1>

            <p className="text-white/80 mb-6">
              {book.summary || "No description available."}
            </p>

            <div className="mb-6">
              {book.isFree ? (
                <span className="bg-green-500 px-4 py-2 rounded-full text-sm">
                  Free Download
                </span>
              ) : (
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm">
                  ₦{book.price || 0}
                </span>
              )}
            </div>

            {book.fileUrl ? (
              <a
                href={book.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            ) : (
              <div className="flex items-center gap-2 text-white/60">
                <Lock className="w-4 h-4" />
                PDF not available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PREVIEW SECTION */}
      {book.fileUrl && (
        <section className="py-20 container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Preview</h2>

          <div className="w-full h-[700px] border rounded-xl overflow-hidden">
            <iframe
              src={book.fileUrl}
              className="w-full h-full"
              title={book.title}
            />
          </div>
        </section>
      )}
    </div>
  );
}
