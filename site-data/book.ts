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
    link: "https://calendar.app.google/BQTgf6xR9Ro3pw6d9" // Placeholder
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
    link: "https://calendar.app.google/ZKpj2WACypicUynE9" // Placeholder
  }
];