// ─────────────────────────────────────────────
// POSTS (ALL)
// ─────────────────────────────────────────────
export const ALL_POSTS_QUERY = `
*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug{ current },
  excerpt,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  author->{
    name,
    image{
      asset->{
        _id,
        url
      }
    }
  },
  categories[]->{
    _id,
    title,
    slug{ current }
  }
}
`;

// ─────────────────────────────────────────────
// POSTS (LATEST)
// ─────────────────────────────────────────────
export const LATEST_POSTS_QUERY = `
*[_type == "post"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug{ current },
  excerpt,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  author->{
    name,
    image{
      asset->{
        _id,
        url
      }
    }
  },
  categories[]->{
    _id,
    title,
    slug{ current }
  }
}
`;

// ─────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────
export const ALL_CATEGORIES_QUERY = `
*[_type == "category"]{
  _id,
  title,
  slug{ current }
}
`;

// ─────────────────────────────────────────────
// BOOKS (ALL)
// ─────────────────────────────────────────────
export const ALL_BOOKS_QUERY = `
*[_type == "book"] | order(publishedAt desc){
  _id,
  title,
  slug{ current },
  summary,
  price,
  isFree,
  coverImage{
    asset->{
      _id,
      url
    },
    alt
  },
  "fileUrl": file.asset->url
}
`;

// ─────────────────────────────────────────────
// BOOK (BY SLUG)
// ─────────────────────────────────────────────
export const BOOK_BY_SLUG_QUERY = `
*[_type == "book" && slug.current == $slug][0]{
  _id,
  title,
  slug{ current },
  summary,
  price,
  isFree,
  coverImage{
    asset->{
      _id,
      url
    },
    alt
  },
  "fileUrl": file.asset->url
}
`;