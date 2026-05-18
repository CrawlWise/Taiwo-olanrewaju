import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <span className="font-poppins text-2xl font-black tracking-tighter text-white">
                TAIWO<span className="text-gold">OLANREWAJU</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-8">
              Professional financial advisor dedicated to helping you build lasting wealth and a meaningful legacy. Trusted advice for modern entrepreneurs.
            </p>
            <div className="flex space-x-4">
              {[Mail, Phone, MapPin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-burgundy transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 font-poppins text-gold">Quick Links</h3>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/about" className="hover:text-gold transition-colors">About My Journey</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Financial Services</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Insights & Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Get In Touch</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-poppins text-gold">Resources</h3>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/books" className="hover:text-gold transition-colors">Books & Guides</Link></li>
              <li><Link href="/resources" className="hover:text-gold transition-colors">Free Wealth Tools</Link></li>
              <li><Link href="/affiliates" className="hover:text-gold transition-colors">Partner Links</Link></li>
              <li><Link href="/newsletter" className="hover:text-gold transition-colors">Weekly Newsletter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-poppins text-gold">Contact Info</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span>hello@taiwoolarenwaju.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-gold" />
                <span>Toronto, Ontario, Canada</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:row justify-between items-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Taiwo Olanrewaju. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
