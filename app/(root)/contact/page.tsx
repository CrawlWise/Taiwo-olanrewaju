import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Taiwo Olanrewaju",
  description: "Get in touch with Taiwo Olanrewaju.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary font-poppins mb-4">Contact Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about my services, books, or joining the team? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold font-poppins text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="font-bold">@</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:hello@taiwo.com" className="text-muted-foreground hover:text-primary transition-colors">hello@taiwo.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="font-bold">#</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+15550000000" className="text-muted-foreground hover:text-primary transition-colors">+1 (555) 000-0000</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="font-bold">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Office Address</p>
                    <p className="text-muted-foreground">123 Financial Ave, Suite 400<br/>Calgary, AB T2P 1A1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-muted border rounded-2xl overflow-hidden flex items-center justify-center text-muted-foreground">
              [Google Maps Embed Placeholder]
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card border shadow-xl rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject *</label>
                <select id="subject" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Select a subject...</option>
                  <option value="advisory">Financial Advisory</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="book">Book Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                <textarea id="message" rows={6} required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 px-8 bg-burgundy hover:bg-burgundy-light text-white font-bold rounded-md transition-colors text-lg font-poppins">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
