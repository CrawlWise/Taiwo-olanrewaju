export interface Book {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  summary?: string;
  price?: number;
  isFree?: boolean;
  coverImage?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
  fileUrl?: string;
}