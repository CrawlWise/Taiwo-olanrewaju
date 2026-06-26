import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "snc3c4j9",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});