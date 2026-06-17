import { sanityFetch } from "@/sanity/live";
import { ALL_BOOKS_QUERY } from "@/sanity/queries";
import BooksClient from "./BooksClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books & Guides | Taiwo Olanrewaju",
  description:
    "Comprehensive blueprints, financial guides, and resources designed to build long-term wealth.",
};

export default async function BooksPage() {
  const books = await sanityFetch(ALL_BOOKS_QUERY);

  return <BooksClient books={books} />;
}
