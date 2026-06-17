"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Book {
  _id: string;
  title: string;
  slug?: { current: string };
  summary?: string;
  price?: number;
  isFree?: boolean;
  coverImage?: {
    asset?: { url: string };
    alt?: string;
  };
  fileUrl?: string;
}

interface BooksClientProps {
  books: Book[];
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const SUMMARY_LIMIT = 110;

function truncate(text: string, max: number) {
  if (!text) return "";
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}

export default function BooksClient({ books }: BooksClientProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* HERO */}
      <section className="py-24 bg-gradient-burgundy text-white text-center">
        <motion.div initial="initial" animate="animate" variants={fadeIn}>
          <Badge className="mb-6">Knowledge Library</Badge>
          <h1 className="text-5xl font-bold mb-6">Books & Guides</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Download free and premium resources to accelerate your growth.
          </p>
        </motion.div>
      </section>

      {/* BOOKS GRID */}
      <div className="container mx-auto px-4 py-20">
        {books.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-10 h-10 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold">No Books Available</h3>
            <p className="text-gray-500">Check back soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {books.map((book) => {
              // ✅ SAFE IMAGE FALLBACK
              const image =
                book.coverImage?.asset?.url || "/images/book-mockup.png";

              // ✅ SAFE SLUG
              const slug = book.slug?.current?.trim();

              return (
                <motion.div
                  key={book._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border transition-shadow group hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-64 bg-gray-50">
                    <Image
                      src={image}
                      alt={book.coverImage?.alt || book.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-4"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{book.title}</h3>

                    <p className="text-gray-500 text-sm mb-4">
                      {book.summary
                        ? truncate(book.summary, SUMMARY_LIMIT)
                        : "No description available."}
                    </p>

                    {/* VIEW DETAILS BUTTON */}
                    {slug ? (
                      <Link
                        href={`/books/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy hover:underline"
                      >
                        View Details <FileText className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400">
                        View Details (unavailable)
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
