import { LucideIcon } from "lucide-react";

export interface ServiceCard {
  title: string;
  description: string;
}

export interface ServiceCTA {
  text: string;
  href: string;
  variant: "outline" | "solid";
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  cards?: ServiceCard[];
  bullets?: string[];
  cta?: ServiceCTA;
}