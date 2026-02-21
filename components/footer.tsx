import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">BANASHREE TUTORIALS</h3>
            <p className="text-sm text-background/80 leading-relaxed mb-4">
              Empowering young minds since 2021. We provide quality education for Classes 6-10 and PUC with experienced
              faculty and proven results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-background/80 hover:text-background transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-background/80 hover:text-background transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-background/80 hover:text-background transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:8618336739" className="text-background/80 hover:text-background transition-colors">
                  +91 8618336739
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:banashreetutorials@gmail.com"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  banashreetutorials@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">Banashree, Bangalore</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} Banashree Tutorials. All rights reserved.</p>
          <p className="mt-3">
            Built with love by{" "}
            <a
              href="https://charvexglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/90 hover:text-background font-medium transition-colors underline underline-offset-2"
            >
              Charvex Global
            </a>{" "}
            - CEO & Founder: Theja Suryachar P J
          </p>
        </div>
      </div>
    </footer>
  )
}
