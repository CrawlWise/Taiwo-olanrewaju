import { LucideIcon } from "lucide-react";
export interface meetingTypes {
id: string, 
title: string,
subtitle: string,
description: string, 
icon: LucideIcon, // Adjust as needed for your icon types
color: string,
bgClass: string,
duration: string,
link: string
}

export interface AmazonStoreLink {
  name: string;
  url: string;
}

export interface AmazonBook {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  amazonLink?: AmazonStoreLink[];
}

export interface BookCardHardCopyProps {
  book: AmazonBook;
}

export interface Book {
  title: string;
  summary?: string;
  price?: number;
  isbn?: string;
  publishedDate?: string;
  coverImage?: {
    asset?: {
      url: string;
    };
  };
  coverImageAlt?: string;
  author?: {
    name: string;
    image?: {
      asset?: {
        url: string;
      };
      alt?: string;
    };
  };
  categories?: Array<{
    _id: string;
    title: string;
    slug?: { current: string };
  }>;
  fileUrl?: string;
  storeTier: string;
  paymentLink?: string;
}