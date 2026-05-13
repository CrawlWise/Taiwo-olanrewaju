"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-poppins text-xl font-bold tracking-tight text-primary">Taiwo Olanrewaju</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Book Appointment
            </Link>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground ml-2"
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
        <div className="md:hidden border-b">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-background">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/70 hover:bg-accent hover:text-accent-foreground"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
