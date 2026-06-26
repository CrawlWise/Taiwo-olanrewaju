import { sanityFetch } from "@/sanity/live";
import { LATEST_POSTS_QUERY, ALL_BOOKS_QUERY } from "@/sanity/queries";
import HomeClient from "./home-client";

export default async function HomePage() {
  const [postsRes, storesRes] = await Promise.all([
    sanityFetch({ query: LATEST_POSTS_QUERY }),
    sanityFetch({ query: ALL_BOOKS_QUERY })
  ]);

  const posts = (postsRes?.data as any) || [];
  const stores = (storesRes?.data as any) || [];

  let foundFreeBook = null;
  stores?.forEach((store: any) => {
    if (store.tier === "free" && store.books?.length > 0) {
      foundFreeBook = store.books[0];
    }
  });

  return (
    <HomeClient
      initialBlogPosts={posts}
      initialFreeBook={foundFreeBook}
    />
  );
}
