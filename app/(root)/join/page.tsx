import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join My Team | Taiwo Olanrewaju",
  description: "Become an advisor and join Taiwo Olanrewaju's team to build your passive income.",
};

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen py-20 bg-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary font-poppins mb-6">Build a Rewarding Career in Finance</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Whether you are already licensed or looking for a career change, join my team to unlock unlimited income potential, passive revenue streams, and comprehensive mentorship.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-card border shadow-xl rounded-2xl overflow-hidden p-8 sm:p-12">
          <h2 className="text-2xl font-bold font-poppins text-foreground mb-8">Advisor Recruitment Application</h2>
          
          <form className="space-y-10">
            {/* Licensing Status */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold border-b pb-2">1. Current Status</h3>
              
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Are you currently licensed as a financial advisor? *</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="isLicensed" value="yes" className="w-4 h-4 text-primary" required />
                    <span>Yes, I am licensed</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="isLicensed" value="no" className="w-4 h-4 text-primary" />
                    <span>No, I am not licensed</span>
                  </label>
                </div>
              </div>

              {/* Conditional: If Yes */}
              <div className="space-y-2 p-4 bg-muted rounded-md border">
                <label htmlFor="provinces" className="text-sm font-medium text-foreground">If yes, which provinces are you licensed in?</label>
                <input type="text" id="provinces" className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Alberta, Ontario" />
              </div>

              {/* Conditional: If No */}
              <div className="space-y-2 p-4 bg-muted rounded-md border">
                <label htmlFor="timeCommitment" className="text-sm font-medium text-foreground">If no, how much time can you dedicate weekly to learning and getting licensed?</label>
                <select id="timeCommitment" className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select an option</option>
                  <option value="1-5">1-5 hours</option>
                  <option value="5-10">5-10 hours</option>
                  <option value="10-20">10-20 hours</option>
                  <option value="20+">20+ hours (Full Time)</option>
                </select>
              </div>
            </div>

            {/* Goals & Interests */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold border-b pb-2">2. Goals & Interests</h3>
              
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Would you like to earn passive income? *</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="passiveIncome" value="yes" className="w-4 h-4 text-primary" required />
                    <span>Yes, absolutely</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="passiveIncome" value="no" className="w-4 h-4 text-primary" />
                    <span>I'm more interested in active income</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interests" className="text-sm font-medium text-foreground">What interests you most about becoming an advisor? *</label>
                <textarea id="interests" rows={4} required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell me about your motivation..."></textarea>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold border-b pb-2">3. Contact Details</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name *</label>
                  <input type="text" id="fullName" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@example.com" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-4 px-8 bg-burgundy hover:bg-burgundy-light text-white font-bold rounded-md transition-colors text-lg font-poppins mt-8 shadow-md">
              Submit Application
            </button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Your application will be securely sent to our recruitment team via HubSpot CRM. We will get back to you within 48 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
