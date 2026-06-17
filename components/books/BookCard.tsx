"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ShoppingCart, ShieldCheck, FileText, Star, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Book } from "@/app/(root)/books/BooksClient";

interface BookCardProps {
  book: Book;
  onDownloadClick?: (book: Book) => void;
  onPurchaseClick?: (book: Book) => void;
}

export function BookCard({ book, onDownloadClick, onPurchaseClick }: BookCardProps) {
  const isFree = book.storeTier === "free";
  const bookCover = book.coverImage?.asset?.url;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFree) {
      onDownloadClick?.(book);
    } else {
      onPurchaseClick?.(book);
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`group flex flex-col h-full rounded-[32px] overflow-hidden border transition-all duration-300 ${isFree
        ? "bg-white border-burgundy/5 shadow-md hover:shadow-premium hover:border-burgundy/10"
        : "bg-charcoal border-white/5 shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] hover:border-gold/20 text-white"
        }`}
    >
      {/* Book Cover Area */}
      <div className={`relative aspect-[4/3] w-full flex items-center justify-center overflow-hidden p-6 ${isFree ? "bg-muted/30" : "bg-white/5"
        }`}>
        <div className={`absolute inset-0 opacity-10 ${isFree
          ? "bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
          : "bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
          }`} />

        {/* Cover Container with lift/tilt animation */}
        <div className="relative z-10 w-36 h-48 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
          {bookCover ? (
            <div className={`w-full h-full rounded shadow-xl overflow-hidden border ${isFree ? "border-black/5" : "border-white/10"
              }`}>
              <Image
                src={bookCover}
                alt={book.coverImageAlt || book.title}
                fill
                sizes="(max-width: 768px) 150px, 180px"
                className="object-cover"
                priority={false}
              />
            </div>
          ) : (
            /* Premium fallbacks */
            <div className={`w-full h-full rounded shadow-xl overflow-hidden border p-4 flex flex-col justify-between text-center relative ${isFree
              ? "bg-gradient-to-tr from-burgundy to-burgundy-light border-black/5 text-white"
              : "bg-gradient-to-tr from-burgundy/80 via-black to-charcoal border-white/10 text-white"
              }`}>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-color-gold)_0%,transparent_70%)]" />
              <div className="z-10 mt-2">
                {isFree ? (
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-gold/80" />
                ) : (
                  <Star className="w-8 h-8 mx-auto mb-2 text-gold fill-gold" />
                )}
                <span className="text-[9px] uppercase tracking-widest font-black text-gold">
                  {isFree ? "Free Guide" : "Premium Guide"}
                </span>
              </div>
              <h4 className="text-xs font-bold leading-tight line-clamp-3 z-10 my-auto">
                {book.title}
              </h4>
              <div className="z-10 text-[8px] text-white/50 mb-1">
                Taiwo Olanrewaju
              </div>
            </div>
          )}

          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/20 mix-blend-overlay rounded" />
        </div>

        {/* Backdrop Glow */}
        <div className={`absolute -bottom-10 w-32 h-32 rounded-full blur-3xl opacity-20 -z-0 transition-opacity duration-500 group-hover:opacity-35 ${isFree ? "bg-burgundy" : "bg-gold"
          }`} />
      </div>

      {/* Book Metadata & Actions */}
      <div className="flex flex-col flex-1 p-6 lg:p-8">
        {/* Category Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {book.categories && book.categories.length > 0 ? (
            book.categories.map((cat) => (
              <Badge
                key={cat._id}
                variant="secondary"
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${isFree
                  ? "bg-burgundy/5 text-burgundy hover:bg-burgundy/10"
                  : "bg-white/5 text-gold hover:bg-white/10"
                  }`}
              >
                {cat.title}
              </Badge>
            ))
          ) : (
            <Badge
              variant="secondary"
              className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${isFree
                ? "bg-burgundy/5 text-burgundy"
                : "bg-white/5 text-gold"
                }`}
            >
              Finance
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold font-poppins mb-2 tracking-tight group-hover:text-gold transition-colors duration-300 line-clamp-1 ${isFree ? "text-charcoal" : "text-white"
          }`}>
          {book.title}
        </h3>

        {/* Summary */}
        <p className={`text-sm font-inter leading-relaxed mb-6 flex-1 line-clamp-3 ${isFree ? "text-muted-foreground" : "text-white/60"
          }`}>
          {book.summary || "No summary available. Get access to detailed strategies and expert recommendations inside this guide."}
        </p>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-dashed border-muted-foreground/10">
          <div>
            <div className={`text-[10px] uppercase font-bold tracking-wider ${isFree ? "text-muted-foreground" : "text-white/40"
              }`}>
              Tier
            </div>
            <div className={`text-lg font-black ${isFree ? "text-burgundy" : "text-gold"
              }`}>
              {isFree ? (
                "FREE"
              ) : (
                <span>
                  ${book.price || "49.99"} <span className="text-xs font-semibold text-white/50">CAD</span>
                </span>
              )}
            </div>
          </div>

          {/* <Button
            onClick={handleAction}
            className={`px-5 py-5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] ${isFree
              ? "bg-burgundy hover:bg-burgundy-light text-white shadow-md hover:shadow-lg"
              : "bg-gold hover:bg-gold-light text-charcoal shadow-md hover:shadow-lg"
              }`}
          >
            {isFree ? (
              <>
                Download <Download className="w-4 h-4" />
              </>
            ) : (
              <>
                Buy Now <ShoppingCart className="w-4 h-4" />
              </>
            )}
          </Button> */}
        </div>
      </div>
    </motion.div>
  );
}
