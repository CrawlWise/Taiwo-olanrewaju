import { Video, MapPin} from "lucide-react";
import {meetingTypes } from "@/types/book";
export const meetingData: meetingTypes[] = [
  {
    id: "online",
    title: "Online Consultation",
    subtitle: "Virtual Strategy Session",
    description: "Connect from anywhere via Zoom or Google Meet. Perfect for initial consultations, financial reviews, and strategic planning from the comfort of your home.",
    icon: Video,
    color: "burgundy",
    bgClass: "bg-burgundy",
    duration: "45-60 mins",
    link: "https://go.taiwoolanrewaju.org/widget/booking/vUD8BzTkOy2TFYHJFFLf" // Placeholder
  },
  {
    id: "in-person",
    title: "In-Person Meeting",
    subtitle: "Face-to-Face Advisory",
    description: "A more personal touch. Meet at our professional office for a comprehensive deep dive into your financial future and legacy building.",
    icon: MapPin,
    color: "gold",
    bgClass: "bg-gold",
    duration: "60-90 mins",
    link: "https://go.taiwoolanrewaju.org/widget/booking/dIirfxRn3LZE83tX9aDc" // Placeholder
  }
];

// ── Flag emoji map for common Amazon store locales ────────────────────────────
export const FLAG_MAP: Record<string, string> = {
  usa: "🇺🇸",
  us: "🇺🇸",
  "united states": "🇺🇸",
  uk: "🇬🇧",
  "united kingdom": "🇬🇧",
  canada: "🇨🇦",
  ca: "🇨🇦",
  australia: "🇦🇺",
  au: "🇦🇺",
  germany: "🇩🇪",
  de: "🇩🇪",
  france: "🇫🇷",
  fr: "🇫🇷",
  italy: "🇮🇹",
  it: "🇮🇹",
  spain: "🇪🇸",
  es: "🇪🇸",
  japan: "🇯🇵",
  jp: "🇯🇵",
  india: "🇮🇳",
  in: "🇮🇳",
  brazil: "🇧🇷",
  br: "🇧🇷",
  mexico: "🇲🇽",
  mx: "🇲🇽",
  netherlands: "🇳🇱",
  nl: "🇳🇱",
  sweden: "🇸🇪",
  se: "🇸🇪",
  poland: "🇵🇱",
  pl: "🇵🇱",
  "south africa": "🇿🇦",
  za: "🇿🇦",
  nigeria: "🇳🇬",
  ng: "🇳🇬",
};