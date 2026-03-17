import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0a06] text-gray-300">
      {/* Gold divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <img src="/logo.png" alt="Logo" className="h-14 w-14 object-contain group-hover:scale-105 transition-transform" />
              <div>
                <div className="text-gold font-bold text-lg">South Point School</div>
                <div className="text-gray-500 text-xs tracking-wider">GUWAHATI · EST. 1960</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Nurturing young minds for over six decades. A legacy of academic excellence, 
              character building, and holistic development in the heart of Guwahati.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/southpointguwahati/" },
                { icon: Instagram, href: "https://www.instagram.com/southpointguwahati/" },
                { icon: Youtube, href: "https://www.youtube.com/@spsghy" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Academics", href: "/academics" },
                { label: "Admissions", href: "/admissions" },
                { label: "News & Events", href: "/news" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold opacity-60" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Academics
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Primary School (I–V)", href: "/academics#primary" },
                { label: "Middle School (VI–VIII)", href: "/academics#middle" },
                { label: "Secondary (IX–X)", href: "/academics#secondary" },
                { label: "Senior Secondary (XI–XII)", href: "/academics#senior" },
                { label: "Science Stream", href: "/academics#senior" },
                { label: "Commerce Stream", href: "/academics#senior" },
                { label: "Arts Stream", href: "/academics#senior" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold opacity-60" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>21 Barsapara Road, Near Battalion Gate, Guwahati – 781018, Assam, India</span>
              </li>
              <li>
                <a href="tel:+919706012121" className="flex gap-3 text-sm text-gray-400 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold shrink-0" />
                  <span>+91 97060-12121</span>
                </a>
              </li>
              <li>
                <a href="mailto:helpdesk@spsghy.co.in" className="flex gap-3 text-sm text-gray-400 hover:text-gold transition-colors">
                  <Mail size={16} className="text-gold shrink-0" />
                  <span>helpdesk@spsghy.co.in</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-lg border border-white/10 bg-white/5">
              <div className="text-xs text-gray-400 mb-1">Office Hours</div>
              <div className="text-sm text-gray-200">Mon – Sat: 9:00 AM – 3:00 PM</div>
              <div className="text-xs text-gray-500 mt-1">Closed on Sundays & 1st/3rd Sat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} South Point School, Guwahati. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
