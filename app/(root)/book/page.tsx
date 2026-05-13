import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment | Taiwo Olanrewaju",
  description: "Book a virtual or in-office appointment with Taiwo Olanrewaju.",
};

export default function BookPage() {
  return (
    <div className="flex flex-col min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary font-poppins mb-4">Book an Appointment</h1>
          <p className="text-lg text-muted-foreground">
            Take the first step towards financial clarity. Choose how you'd like to meet.
          </p>
        </div>

        <div className="bg-card border shadow-xl rounded-2xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <form className="space-y-8">
              {/* Meeting Type */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-poppins text-foreground">1. How would you like to meet?</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="flex items-center justify-center p-4 border-2 border-primary bg-primary/5 rounded-xl cursor-pointer transition-colors">
                    <input type="radio" name="meetingType" value="virtual" className="sr-only" defaultChecked />
                    <div className="text-center">
                      <span className="block font-bold text-primary font-poppins">Virtual Meeting</span>
                      <span className="block text-sm text-muted-foreground mt-1">via Google Meet</span>
                    </div>
                  </label>
                  <label className="flex items-center justify-center p-4 border-2 border-transparent hover:border-primary/50 bg-muted rounded-xl cursor-pointer transition-colors">
                    <input type="radio" name="meetingType" value="office" className="sr-only" />
                    <div className="text-center">
                      <span className="block font-bold text-foreground font-poppins">In-Office</span>
                      <span className="block text-sm text-muted-foreground mt-1">Calgary, AB</span>
                    </div>
                  </label>
                </div>
              </div>

              <hr className="border-border" />

              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold font-poppins text-foreground">2. Your Information</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name *</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name *</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label htmlFor="province" className="text-sm font-medium text-foreground">Province *</label>
                    <select id="province" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select your province</option>
                      <option value="AB">Alberta</option>
                      <option value="BC">British Columbia</option>
                      <option value="ON">Ontario</option>
                      <option value="MB">Manitoba</option>
                      <option value="SK">Saskatchewan</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <hr className="border-border" />

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-poppins text-foreground">3. Preparation</h3>
                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm font-medium text-foreground">Tell me anything that will help me prepare for our meeting</label>
                  <textarea id="notes" rows={4} className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="I am looking for advice on..."></textarea>
                </div>
              </div>

              <button type="submit" className="w-full py-4 px-8 bg-burgundy hover:bg-burgundy-light text-white font-bold rounded-md transition-colors text-lg font-poppins">
                Confirm Booking
              </button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                By submitting this form, your information will be securely sent to our CRM (Greatway/Google Calendar).
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
