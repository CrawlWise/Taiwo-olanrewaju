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
      {/* Book Cover — full-bleed top section */}
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        {bookCover ? (
          <>
            <Image
              src={bookCover}
              alt={book.coverImageAlt || book.title}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
            />
            {/* Subtle gradient overlay so text on top remains readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </>
        ) : (
          /* Premium fallback when no cover image exists */
          <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 ${isFree
              ? "bg-gradient-to-br from-burgundy to-burgundy-light"
              : "bg-gradient-to-br from-charcoal via-black to-burgundy/60"
            }`}>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-color-gold)_0%,transparent_70%)]" />
            {isFree ? (
              <BookOpen className="w-14 h-14 text-gold/80 z-10" />
            ) : (
              <Star className="w-14 h-14 text-gold fill-gold z-10" />
            )}
            <span className="text-[10px] uppercase tracking-widest font-black text-gold z-10">
              {isFree ? "Free Guide" : "Premium Guide"}
            </span>
            <h4 className="text-sm font-bold text-white text-center leading-tight line-clamp-2 z-10 px-6">
              {book.title}
            </h4>
            <div className="z-10 text-[9px] text-white/50">Taiwo Olanrewaju</div>
          </div>
        )}

        {/* Tier badge pinned to top-right */}
        <div className="flex items-center justify-between absolute top-0 left-0 w-full p-3">
          <div className="free-ebook">
            <Badge>
              E-book
            </Badge>
          </div>
          <div className={`absolute top-3 right-3 z-10 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${isFree
              ? "bg-burgundy/90 text-white"
              : "bg-gold text-charcoal"
            }`}>

            {isFree ? "Free" : "Premium"}

          </div>
        </div>
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

          <Button
            onClick={handleAction}
            className={`px-5 py-5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] ${isFree
              ? "bg-burgundy hover:bg-burgundy-light text-white shadow-md hover:shadow-lg cursor-pointer"
              : "bg-gold hover:bg-gold-light text-charcoal shadow-md hover:shadow-lg cursor-pointer"
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
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
