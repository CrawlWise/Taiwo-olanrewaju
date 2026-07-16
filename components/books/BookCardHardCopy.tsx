"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, MapPin, ChevronDown, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookCardHardCopyProps } from "@/types/book";
import { FLAG_MAP } from "@/site-data/book";
import { Variants } from "framer-motion";



// ── Animation variants ────────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: {
      duration: 0.15,
    },
  },
};



function getFlag(name: string): string {
  const key = name.toLowerCase().trim();
  return FLAG_MAP[key] ?? "🛒";
}

// ── Component ─────────────────────────────────────────────────────────────────
export function BookCardHardCopy({ book }: BookCardHardCopyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasLinks = book.amazonLink && book.amazonLink.length > 0;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group flex flex-col h-full rounded-[32px] overflow-hidden border border-white/5 bg-charcoal shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] hover:border-gold/20 text-white transition-all duration-300"
    >
      {/* Book Cover */}
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        {book.image ? (
          <>
            <Image
              src={book.image}
              alt={book.name}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </>
        ) : (
          /* Fallback cover */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-charcoal via-black to-burgundy/60">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <Star className="w-14 h-14 text-gold fill-gold z-10" />
            <span className="text-[10px] uppercase tracking-widest font-black text-gold z-10">
              Hard Copy
            </span>
            <h4 className="text-sm font-bold text-white text-center leading-tight line-clamp-2 z-10 px-6">
              {book.name}
            </h4>
            <div className="z-10 text-[9px] text-white/50">Taiwo Olanrewaju</div>
          </div>
        )}

        {/* Badges pinned to top */}
        <div className="absolute top-3 left-3 z-10">
          <Badge className="text-[10px] font-black uppercase tracking-widest bg-gold text-charcoal border-0">
            Hard Copy
          </Badge>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <Badge className="text-[10px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-sm text-white border-white/20">
            Amazon
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-8">
        {/* Title */}
        <h3 className="text-xl font-bold font-poppins mb-3 tracking-tight group-hover:text-gold transition-colors duration-300 line-clamp-2 text-white">
          {book.name}
        </h3>

        {/* Description */}
        {book.description && (
          <p className="text-sm font-inter leading-relaxed mb-6 flex-1 line-clamp-3 text-white/60">
            {book.description}
          </p>
        )}

        {/* Purchase Button + Dropdown */}
        <div
          className="mt-auto pt-4 border-t border-dashed border-white/10 relative"
          ref={dropdownRef}
        >
          <Button
            id={`amazon-purchase-btn-${book._id}`}
            onClick={() => setIsOpen((prev) => !prev)}
            disabled={!hasLinks}
            className="w-full px-5 py-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] bg-gold hover:bg-gold-light text-charcoal shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" />
            Purchase on Amazon
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </Button>

          {/* Location Picker Dropdown */}
          <AnimatePresence>
            {isOpen && hasLinks && (
              <motion.div
                key="amazon-dropdown"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute bottom-full left-0 right-0 mb-2 z-50 bg-[#1a1a2e] border border-gold/20 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[11px] uppercase tracking-widest font-black text-gold">
                      Choose Your Region
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors"
                    aria-label="Close region picker"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Store Links */}
                <ul className="py-2 max-h-60 overflow-y-auto">
                  {book.amazonLink!.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-white/5 transition-colors group/item"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl leading-none">
                            {getFlag(link.name)}
                          </span>
                          <span className="text-sm font-semibold text-white group-hover/item:text-gold transition-colors">
                            {link.name}
                          </span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover/item:text-gold transition-colors flex-shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Footer note */}
                <div className="px-4 py-2.5 border-t border-white/10 bg-white/[0.02]">
                  <p className="text-[10px] text-white/30 text-center font-medium uppercase tracking-widest">
                    Opens Amazon in a new tab
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* No links fallback */}
          {!hasLinks && (
            <p className="text-[10px] text-center text-white/30 mt-2 uppercase tracking-widest">
              Purchase links coming soon
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
