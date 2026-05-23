import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "zsv76hod",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});