"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image";


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
    { href: "/results", label: "Results" },
    { href: "/materials", label: "Materials" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          

<div className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="Banashree Tutorials Logo"
    width={60}
    height={60}
    priority
  />

  <div className="flex flex-col">
    <span className="text-xl font-bold text-primary leading-tight">
      BANASHREE TUTORIALS
    </span>
    <span className="text-xs text-muted-foreground uppercase tracking-wide">
      Empowering Young Minds
    </span>
  </div>
</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <a href="tel:8618336739">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                <a href="tel:8618336739">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="sm" className="w-full">
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
