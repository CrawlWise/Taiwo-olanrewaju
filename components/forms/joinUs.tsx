"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function JoinUs() {
  const [formData, setFormData] = useState({
    isLicensed: 'no',
    provinces: '',
    passive: 'no',
    motivation: '',
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.motivation) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          isLicensed: 'no',
          provinces: '',
          passive: 'no',
          motivation: '',
          name: '',
          email: '',
          phone: ''
        });
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

  return (
    <section id="apply" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto"
        >
          {/* Card */}
          <div className="bg-white rounded-[40px] shadow-premium border border-burgundy/8 p-8 sm:p-14">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold font-poppins text-charcoal mb-3">
                Take the First Step
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fill in the form below to learn about our licensing program and
                choose your path forward.
              </p>
            </div>

            <Card className="border-none shadow-premium rounded-[40px] overflow-hidden bg-muted/30">
              {status === 'success' ? (
                <CardContent className="p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-20 h-20 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold font-poppins text-charcoal mb-4">Application Submitted!</h2>
                  <p className="text-base text-muted-foreground max-w-md mx-auto mb-8">
                    Thank you for applying to join our team. We've received your application and will review it within 48 hours.
                  </p>
                  <Button 
                    onClick={() => setStatus('idle')} 
                    className="px-8 h-14 font-bold font-poppins bg-burgundy hover:bg-burgundy-dark text-white rounded-2xl shadow-xl transition-all"
                  >
                    Submit Another Application
                  </Button>
                </CardContent>
              ) : (
                <CardContent className="p-8 sm:p-12">
                  <form onSubmit={handleSubmit} className="space-y-10">
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

                    <div className="space-y-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-burgundy text-white flex items-center justify-center font-bold text-sm">1</div>
                        <h3 className="text-xl font-bold font-poppins text-charcoal">Licensing Status</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Are you currently licensed? *</label>
                        <div className="grid grid-cols-2 gap-4">
                          <label 
                            className={`flex items-center justify-center p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                              formData.isLicensed === 'yes' 
                                ? 'border-burgundy bg-burgundy/5 text-burgundy' 
                                : 'border-transparent bg-white text-charcoal hover:border-burgundy/30'
                            }`}
                          >
                            <input 
                              type="radio" 
                              name="isLicensed" 
                              value="yes" 
                              checked={formData.isLicensed === 'yes'}
                              onChange={() => setFormData({ ...formData, isLicensed: 'yes' })}
                              className="sr-only" 
                              required 
                            />
                            <span className="font-bold">Yes, I am</span>
                          </label>
                          <label 
                            className={`flex items-center justify-center p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                              formData.isLicensed === 'no' 
                                ? 'border-burgundy bg-burgundy/5 text-burgundy' 
                                : 'border-transparent bg-white text-charcoal hover:border-burgundy/30'
                            }`}
                          >
                            <input 
                              type="radio" 
                              name="isLicensed" 
                              value="no" 
                              checked={formData.isLicensed === 'no'}
                              onChange={() => setFormData({ ...formData, isLicensed: 'no', provinces: '' })}
                              className="sr-only" 
                            />
                            <span className="font-bold">Not yet</span>
                          </label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">If yes, which provinces?</label>
                        <Input 
                          name="provinces"
                          value={formData.provinces}
                          onChange={handleChange}
                          disabled={formData.isLicensed === 'no' || status === 'loading'}
                          placeholder="e.g. Alberta, Ontario" 
                          className="h-12 rounded-xl bg-white border-muted-foreground/20" 
                        />
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-burgundy text-white flex items-center justify-center font-bold text-sm">2</div>
                        <h3 className="text-xl font-bold font-poppins text-charcoal">Goals & Vision</h3>
                      </div>

                      <div className="space-y-4">
                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Interest in Passive Income? *</label>
                        <div className="grid grid-cols-2 gap-4">
                          <label 
                            className={`flex items-center justify-center p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                              formData.passive === 'yes' 
                                ? 'border-burgundy bg-burgundy/5 text-burgundy' 
                                : 'border-transparent bg-white text-charcoal hover:border-burgundy/30'
                            }`}
                          >
                            <input 
                              type="radio" 
                              name="passive" 
                              value="yes" 
                              checked={formData.passive === 'yes'}
                              onChange={() => setFormData({ ...formData, passive: 'yes' })}
                              className="sr-only" 
                              required 
                            />
                            <span className="font-bold">High Interest</span>
                          </label>
                          <label 
                            className={`flex items-center justify-center p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                              formData.passive === 'no' 
                                ? 'border-burgundy bg-burgundy/5 text-burgundy' 
                                : 'border-transparent bg-white text-charcoal hover:border-burgundy/30'
                            }`}
                          >
                            <input 
                              type="radio" 
                              name="passive" 
                              value="no" 
                              checked={formData.passive === 'no'}
                              onChange={() => setFormData({ ...formData, passive: 'no' })}
                              className="sr-only" 
                            />
                            <span className="font-bold">Unsure</span>
                          </label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">What motivates you? *</label>
                        <textarea 
                          required
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          className="w-full px-4 py-3 rounded-2xl border border-muted-foreground/20 bg-white focus:outline-none focus:ring-2 focus:ring-burgundy min-h-[100px]" 
                          placeholder="Tell us about your drive..."
                        />
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-burgundy text-white flex items-center justify-center font-bold text-sm">3</div>
                        <h3 className="text-xl font-bold font-poppins text-charcoal">Contact Details</h3>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name *</label>
                          <Input 
                            required 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                            placeholder="John Doe" 
                            className="h-12 rounded-xl bg-white border-muted-foreground/20" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email *</label>
                          <Input 
                            type="email" 
                            required 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                            placeholder="john@example.com" 
                            className="h-12 rounded-xl bg-white border-muted-foreground/20" 
                          />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Phone Number *</label>
                          <Input 
                            type="tel" 
                            required 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                            placeholder="+1 (555) 000-0000" 
                            className="h-12 rounded-xl bg-white border-muted-foreground/20" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="w-full py-8 text-xl font-bold font-poppins bg-burgundy hover:bg-burgundy-dark text-white rounded-2xl shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="animate-spin mr-3 h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application <ArrowRight className="ml-3 h-6 w-6" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              )}
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

