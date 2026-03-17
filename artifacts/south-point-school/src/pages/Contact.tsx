import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <NewsTicker />

      {/* Hero */}
      <section className="bg-[#0d1b3e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #B8901A 0px, #B8901A 1px, transparent 1px, transparent 30px)`,
        }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 gold-gradient" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Reach Us</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <div className="section-divider w-24 mb-6" />
          <p className="text-gray-300 max-w-2xl text-lg">
            We'd love to hear from you. Reach out to our admissions office, faculty, or administrative team.
          </p>
        </div>
      </section>

      <section className="py-20 blue-glow-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-[#1a3a80] mb-3">Contact Details</div>
              <h2 className="text-3xl font-bold text-[#0d1b3e] mb-8">Contact Information</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="text-gold" size={20} />,
                    title: "Address",
                    lines: ["21 Barsapara Road", "Near Battalion Gate, Guwahati – 781018", "Assam, India"],
                  },
                  {
                    icon: <Phone className="text-gold" size={20} />,
                    title: "Phone",
                    lines: ["+91 97060-12121", "helpdesk@spsghy.co.in"],
                  },
                  {
                    icon: <Mail className="text-gold" size={20} />,
                    title: "Email",
                    lines: ["helpdesk@spsghy.co.in", "spsghy@rediffmail.com"],
                  },
                  {
                    icon: <Clock className="text-gold" size={20} />,
                    title: "Office Hours",
                    lines: ["Mon – Sat: 9:00 AM – 3:00 PM", "Closed on Sundays", "1st & 3rd Saturdays: Closed"],
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0d1b3e] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-[#0d1b3e] text-sm mb-1">{item.title}</div>
                      {item.lines.map((line, i) => (
                        <div key={i} className="text-gray-500 text-sm">{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Departments */}
              <div className="mt-10">
                <div className="font-semibold text-[#0d1b3e] mb-4">Quick Contacts</div>
                <div className="space-y-3">
                  {[
                    { dept: "Helpdesk", email: "helpdesk@spsghy.co.in" },
                    { dept: "Office", email: "spsghy@rediffmail.com" },
                  ].map((d) => (
                    <div key={d.dept} className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="text-xs font-bold text-[#1a3a80] uppercase tracking-wider">{d.dept}</div>
                      <div className="text-sm text-gray-600">{d.email}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="text-xs font-bold tracking-widest uppercase text-[#1a3a80] mb-3">Write to Us</div>
              <h2 className="text-3xl font-bold text-[#0d1b3e] mb-8">Send a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#0d1b3e] border border-gold/30 rounded-2xl p-12 text-center"
                >
                  <div className="text-6xl mb-4">✉️</div>
                  <h3 className="text-gold text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-300">We'll get back to you within 1-2 business days. Thank you for reaching out to South Point School.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">Full Name*</label>
                      <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-[#B8901A] transition"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">Email Address*</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-[#B8901A] transition"
                        placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-[#B8901A] transition"
                        placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">Subject*</label>
                      <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-[#B8901A] transition">
                        <option value="">Select subject</option>
                        <option>Admission Enquiry</option>
                        <option>General Query</option>
                        <option>Transport</option>
                        <option>Fee Related</option>
                        <option>Academic Query</option>
                        <option>Alumni</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1.5">Message*</label>
                    <textarea required rows={6} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-[#B8901A] transition resize-none"
                      placeholder="Write your message or query here..." />
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 rounded-lg font-bold bg-[#0d1b3e] text-gold hover:bg-[#1a2a5a] transition flex items-center justify-center gap-2">
                    Send Message <ArrowRight size={18} />
                  </button>
                </form>
              )}

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin size={40} className="mx-auto mb-2 text-gray-300" />
                  <div className="font-medium text-gray-600">South Point School, Guwahati</div>
                  <div className="text-sm">Assam, India</div>
                  <a
                    href="https://www.google.com/maps/search/South+Point+School+Barsapara+Guwahati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-[#0d1b3e] hover:text-gold transition"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
