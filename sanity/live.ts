import { client } from "./client";
import type { QueryParams } from "@sanity/client";

export async function sanityFetch<T = unknown>(
  query: string,
  params: QueryParams = {}
): Promise<T> {
  return client.fetch(query, params, {
    cache: "no-store",
  });
}