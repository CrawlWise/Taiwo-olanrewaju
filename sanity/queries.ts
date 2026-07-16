import { defineQuery } from "next-sanity";

// ── Blog Listing ─────────────────────────────────────────────────────────────
export const ALL_POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{ url },
      alt
    },
    author->{ name, image { asset->{ url }, alt } },
    categories[]->{ _id, title, slug }
  }
`);

// ── Latest 3 Posts ────────────────────────────────────────────────────────────
export const LATEST_POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{ url },
      alt
    },
    author->{ name, image { asset->{ url }, alt } },
    categories[]->{ _id, title, slug }
  }
`);

// ── Single Post by Slug ───────────────────────────────────────────────────────
export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{ url },
      alt
    },
    body,
    author->{
      name,
      bio,
      image { asset->{ url }, alt }
    },
    categories[]->{ _id, title, slug }
  }
`);

// ── All Slugs (for generateStaticParams) ────────────────────────────────────
export const ALL_POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`);

// ── Related Posts (excluding current, latest 3) ──────────────────────────────
export const RELATED_POSTS_QUERY = defineQuery(`
  *[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset->{ url },
      alt
    }
  }
`);

// ── All Categories ────────────────────────────────────────────────────────────
export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug
  }
`);

// ── All Books by Store Tier ───────────────────────────────────────────────────
export const ALL_BOOKS_QUERY = defineQuery(`
  *[_type == "store"] {
    tier,
    books[] {
      title,
      summary,
      price,
      isbn,
      publishedDate,
      coverImage {
        asset->{ url }
      },
      coverImageAlt,
      author-> {
        name,
        image { asset->{ url }, alt }
      },
      categories[]-> {
        _id,
        title,
        slug
      },
      "fileUrl": bookupload.asset->url,
      paymentLink
    }
  }
`);

// ── All Amazon Books ───────────────────────────────────────────────────────────
export const ALL_AMAZON_BOOKS_QUERY = defineQuery(`
  *[_type == "amazon"]{
  _id,
  name,
  "slug": slug.current,
  description,
  "image": image.asset->url,
  "amazonLink": amazonStoreLink[]{
    name,
    url
  }
}
  `)


