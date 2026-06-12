"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="lg:col-span-3"
      >
        <Card className="border-none shadow-premium rounded-[48px] overflow-hidden bg-white">
          <CardContent className="p-10 md:p-16 text-center flex flex-col items-center justify-center min-h-[500px]">
            <div className="w-20 h-20 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold font-poppins text-charcoal mb-4">Message Sent!</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
              Thank you for reaching out. We have received your inquiry and will get back to you as soon as possible.
            </p>
            <Button 
              onClick={() => setStatus('idle')} 
              className="px-8 h-14 font-bold font-poppins bg-burgundy hover:bg-burgundy-dark text-white rounded-2xl shadow-xl transition-all"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-3"
    >
      <Card className="border-none shadow-premium rounded-[48px] overflow-hidden bg-white">
        <CardContent className="p-10 md:p-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-burgundy/5 text-burgundy flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold font-poppins text-charcoal">Send a Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-2xl flex items-start gap-3 text-sm">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <span className="font-bold">Submission Failed</span>
                  <p className="mt-1 text-red-700/90">{errorMessage}</p>
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name *</label>
                <Input 
                  required 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  placeholder="Taiwo Olanrewaju" 
                  className="h-14 rounded-2xl bg-muted/20 border-none focus:ring-burgundy" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address *</label>
                <Input 
                  type="email" 
                  required 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  placeholder="hello@taiwo.com" 
                  className="h-14 rounded-2xl bg-muted/20 border-none focus:ring-burgundy" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Inquiry Subject *</label>
              <select 
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="flex h-14 w-full rounded-2xl border-none bg-muted/20 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy"
              >
                <option value="">Select a subject...</option>
                <option value="advisory">Financial Advisory</option>
                <option value="speaking">Speaking Engagement</option>
                <option value="book">Book Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Message *</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full px-5 py-4 rounded-3xl border-none bg-muted/20 focus:outline-none focus:ring-2 focus:ring-burgundy min-h-[160px]" 
                placeholder="How can we assist you today?"
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full h-16 text-xl font-bold font-poppins bg-burgundy hover:bg-burgundy-dark text-white rounded-2xl shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <>
                    <span className="animate-spin mr-3 h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="ml-3 w-6 h-6" />
                  </>
                )}
              </Button>
              <p className="text-[10px] text-center text-muted-foreground mt-8 uppercase tracking-[0.2em] font-bold">
                We respect your privacy. Your data is encrypted.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

