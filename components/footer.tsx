import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-poppins text-xl font-bold tracking-tight text-primary">Taiwo Olanrewaju</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Empowering individuals and businesses with trusted financial advice, education, and resources.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-poppins">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/books" className="hover:text-primary transition-colors">Books</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Free Tools</Link></li>
              <li><Link href="/affiliates" className="hover:text-primary transition-colors">Partner Links</Link></li>
              <li><Link href="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-poppins">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/book" className="text-primary hover:underline font-medium">Book an Appointment</Link></li>
              <li><Link href="/join" className="hover:text-primary transition-colors">Join My Team</Link></li>
              <li><Link href="/reviews" className="hover:text-primary transition-colors">Reviews</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Taiwo Olanrewaju. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
