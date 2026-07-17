import { sanityFetch } from "@/sanity/live";
import { ALL_BOOKS_QUERY, ALL_AMAZON_BOOKS_QUERY } from "@/sanity/queries";
import BooksClient from "./BooksClient";
import type { Book } from "@/types/book";
import type { AmazonBook } from "@/types/book";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books & Guides | Taiwo Olanrewaju",
  description: "Comprehensive blueprints, financial guides, and resources designed to build long-term wealth.",
};

export default async function BooksPage() {
  // Fetch stores and their books from Sanity
  const { data: stores } = (await sanityFetch({ query: ALL_BOOKS_QUERY })) as { data: any[] };

  // Fetch Amazon hard-copy books
  const { data: amazonBooks } = (await sanityFetch({ query: ALL_AMAZON_BOOKS_QUERY })) as {
    data: AmazonBook[];
  };

  // Group books by store tier
  const freeBooks: Book[] = [];
  const paidBooks: Book[] = [];

  stores?.forEach((store: any) => {
    const tier = store.tier;
    store.books?.forEach((book: any) => {
      const bookWithTier: Book = {
        title: book.title,
        summary: book.summary,
        price: book.price,
        isbn: book.isbn,
        publishedDate: book.publishedDate,
        coverImage: book.coverImage,
        coverImageAlt: book.coverImageAlt,
        author: book.author,
        categories: book.categories,
        fileUrl: book.fileUrl,
        storeTier: tier,
        paymentLink: book.paymentLink,
      };

      if (tier === "free") {
        freeBooks.push(bookWithTier);
      } else if (tier === "paid" || tier === "premium") {
        paidBooks.push(bookWithTier);
      }
    });
  });

  return (
    <BooksClient
      freeBooks={freeBooks}
      paidBooks={paidBooks}
      amazonBooks={amazonBooks ?? []}
    />
  );
}
