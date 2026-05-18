import { sanityFetch } from "@/sanity/live";
import { LATEST_POSTS_QUERY } from "@/sanity/queries";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Taiwo Olanrewaju | Master Your Finances, Build Your Legacy",
  description:
    "Secure your future with professional financial guidance. I help individuals and entrepreneurs navigate the complexities of wealth building and legacy planning.",
};

export default async function Home() {
  const { data } = await sanityFetch({ query: LATEST_POSTS_QUERY });
  const latestPosts = (data || []) as any;

  return <HomeClient latestPosts={latestPosts} />;
}
