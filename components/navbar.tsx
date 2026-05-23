"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
// This section needs to be updated with what we have on the cloud

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Books", href: "/books" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Affiliate", href: "/affiliates" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md border-b border-burgundy/5 py-2"
          : "bg-white/90 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className={cn(
                "font-poppins text-2xl font-black tracking-tighter transition-colors text-burgundy"
              )}>
                TAIWO<span className="text-gold group-hover:text-gold-light transition-colors">OLANREWAJU</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "transition-all relative group",
                    isActive ? "text-burgundy" : "text-burgundy/70 hover:text-burgundy"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-full transition-colors text-burgundy bg-burgundy/5"
              )}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-burgundy/10 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-4 px-6 pb-10 pt-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-2xl font-black font-poppins transition-colors",
                    isActive ? "text-gold" : "text-burgundy hover:text-gold"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-burgundy/5">
              <Button
                asChild
                className="w-full bg-burgundy text-white py-8 text-xl font-bold rounded-2xl shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/book">
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

