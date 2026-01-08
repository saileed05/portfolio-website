// components/contact-form.tsx

"use client";

import React, { useState, FormEvent } from 'react';
import { ArrowUpRight, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

// ✅ SECURE: Read from environment variable
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate API key is available
    if (!WEB3FORMS_ACCESS_KEY) {
      setErrorMessage("Configuration error. Please contact the site owner.");
      setStatus('error');
      return;
    }
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
      setErrorMessage("Please fill in all required fields.");
      setStatus('error');
      return;
    }
    
    setErrorMessage(null);
    setStatus('submitting');
    
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("botcheck", ""); 

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage("Network error. Check your connection.");
      setStatus('error');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {/* Hidden honeypot field */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
          placeholder="Your Name"
          className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-purple-400 focus:border-transparent transition-all placeholder:text-neutral-400 dark:text-white"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          placeholder="Email Address"
          className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-purple-400 focus:border-transparent transition-all placeholder:text-neutral-400 dark:text-white"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea 
          id="message" 
          name="message" 
          required
          rows={3}
          placeholder="How can we collaborate?"
          className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-purple-400 focus:border-transparent transition-all placeholder:text-neutral-400 resize-none dark:text-white"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="mt-2 flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-neutral-800 dark:text-white hover:text-pink-600 dark:hover:text-purple-400 transition-colors group disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400 dark:focus-visible:ring-purple-400"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={14} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="mt-4 p-3 bg-pink-50 dark:bg-purple-900/20 border border-pink-100 dark:border-purple-800/30 rounded-lg">
          <p className="flex items-center gap-2 text-sm text-pink-700 dark:text-purple-200 font-medium">
            <CheckCircle2 size={16} /> 
            Message sent successfully!
          </p>
        </div>
      )}
      {status === 'error' && errorMessage && (
        <p className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400 font-medium">
          <AlertTriangle size={16} className='flex-shrink-0 mt-[2px]' /> {errorMessage}
        </p>
      )}
    </form>
  );
}