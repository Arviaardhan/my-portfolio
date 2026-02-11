"use client";

import Navbar from "@/components/navbar/navbar";
import { motion, BezierDefinition } from "framer-motion"; // Tambahkan BezierDefinition
import { Send, Mail, MapPin } from "lucide-react";
import { useState } from "react";

// Definisikan ease secara eksplisit agar tidak error TS
const ease: BezierDefinition = [0.22, 1, 0.36, 1];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika integrasi API (seperti Formspree atau Resend)
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="pt-32 pb-32 px-6 flex-grow">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground">
              Let&apos;s Build {/* Gunakan &apos; untuk menghindari error build */}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground font-body max-w-lg">
              Have a project in mind? Let&apos;s connect and start assembling something great.
            </p>
            <div className="w-16 h-1 bg-primary rounded-full mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-12 gap-16 mt-20">
            {/* Contact Form */}
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center border border-primary/20 bg-primary/5 rounded-sm"
                >
                  <div className="w-12 h-12 rounded-sm bg-primary/20 flex items-center justify-center mb-6">
                    <Send size={20} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Message Sent
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-display font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-display font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-display font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Tell me about your project, timeline, and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-all group"
                  >
                    Send Message
                    <Send size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
            >
              <div className="space-y-8">
                <div className="group">
                  <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground font-body">hello@mpa.dev</p>
                </div>

                <div className="group">
                  <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <MapPin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Based in</h3>
                  <p className="text-sm text-muted-foreground font-body">San Francisco, CA</p>
                </div>
              </div>

              {/* Decorative brick stack */}
              <div className="mt-16 space-y-2 opacity-50">
                <div className="h-3 w-full rounded-sm bg-primary/20" />
                <div className="h-3 w-4/5 rounded-sm bg-accent/20" />
                <div className="h-3 w-3/5 rounded-sm bg-orange-400/20" />
                <div className="h-3 w-2/5 rounded-sm bg-blue-400/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted-foreground font-body">
          <span>© 2026 MPA. Built brick by brick.</span>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-primary/40" />
            <span className="w-2 h-2 rounded-sm bg-accent/40" />
            <span className="w-2 h-2 rounded-sm bg-orange-400/40" />
          </div>
        </div>
      </footer>
    </div>
  );
}