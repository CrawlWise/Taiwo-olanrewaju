import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Taiwo Olanrewaju",
  description: "Client testimonials and reviews for Taiwo Olanrewaju.",
};

const REVIEWS = [
  { name: "Sarah M.", role: "Small Business Owner", rating: 5, text: "Working with Taiwo changed my entire perspective on business finances. The clarity I gained has allowed me to scale my operations with confidence." },
  { name: "James & Emily T.", role: "Parents", rating: 5, text: "Taiwo helped us set up a rock-solid life insurance plan and education funds for our kids. His patience in explaining complex concepts is unmatched." },
  { name: "David K.", role: "Newcomer to Canada", rating: 5, text: "Navigating the Canadian financial system was overwhelming until I attended Taiwo's masterclass. He provided a clear roadmap that I'm successfully following today." },
  { name: "Alicia R.", role: "Financial Advisor Trainee", rating: 5, text: "Joining Taiwo's team was the best career decision I've made. The mentorship and system he has in place for new advisors is truly world-class." },
  { name: "Michael P.", role: "Software Engineer", rating: 4, text: "Very practical and straightforward advice on optimizing my portfolio and minimizing taxes. Highly recommended professional." },
];

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary font-poppins mb-4">Client Success Stories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients and team members have to say about our work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Reviews Grid */}
          <div className="lg:col-span-2 columns-1 sm:columns-2 gap-6 space-y-6">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-card border rounded-2xl p-8 shadow-sm break-inside-avoid">
                <div className="flex text-gold mb-4">
                  {Array(review.rating).fill('★').join('')}
                  {Array(5 - review.rating).fill('☆').join('')}
                </div>
                <p className="text-foreground/80 italic mb-6">"{review.text}"</p>
                <div>
                  <p className="font-bold font-poppins text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Submit Review Form */}
          <div className="bg-burgundy text-white rounded-2xl p-8 shadow-xl sticky top-24">
            <h3 className="text-2xl font-bold font-poppins mb-2">Share Your Experience</h3>
            <p className="text-white/80 text-sm mb-8">
              Have we worked together? I would love to hear your feedback.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-white/90">Name</label>
                <input type="text" id="name" required className="mt-1 w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="role" className="text-sm font-medium text-white/90">Profession / Title (Optional)</label>
                <input type="text" id="role" className="mt-1 w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="e.g. Entrepreneur" />
              </div>
              <div>
                <label className="text-sm font-medium text-white/90 block mb-2">Rating</label>
                <div className="flex gap-2 text-2xl text-gold/50">
                  <span className="hover:text-gold cursor-pointer transition-colors">★</span>
                  <span className="hover:text-gold cursor-pointer transition-colors">★</span>
                  <span className="hover:text-gold cursor-pointer transition-colors">★</span>
                  <span className="hover:text-gold cursor-pointer transition-colors">★</span>
                  <span className="hover:text-gold cursor-pointer transition-colors">★</span>
                </div>
              </div>
              <div>
                <label htmlFor="review" className="text-sm font-medium text-white/90">Your Review</label>
                <textarea id="review" rows={4} required className="mt-1 w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Tell us about your experience..."></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-gold hover:bg-gold/90 text-burgundy-dark font-bold rounded-md transition-colors mt-4">
                Submit Review
              </button>
              <p className="text-xs text-white/60 text-center mt-2">
                Reviews are moderated and may take a few days to appear.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
