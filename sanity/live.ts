import { client } from "./client";

export async function sanityFetch(query: string) {
  return client.fetch(query, {}, { cache: "no-store" });
}