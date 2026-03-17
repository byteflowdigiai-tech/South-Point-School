import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

const allNews = [
  {
    date: "Dec 10, 2024", category: "Achievement",
    title: "12 Students Score 95%+ in CBSE Class XII Examinations",
    excerpt: "Our senior secondary students have once again made the school proud with outstanding board examination results. The school achieved a 98.6% overall pass rate.",
    featured: true,
  },
  {
    date: "Dec 5, 2024", category: "Sports",
    title: "South Point Wins Assam State Football Championship 2024",
    excerpt: "The school football team clinched the Assam State Schools Football Championship for the third consecutive year, defeating 24 schools from across the state.",
    featured: false,
  },
  {
    date: "Nov 28, 2024", category: "Event",
    title: "Annual Science Exhibition 'Innovate 2024' — A Grand Success",
    excerpt: "Over 150 science projects were showcased at the annual science exhibition, drawing participation from 30+ schools across Guwahati.",
    featured: false,
  },
  {
    date: "Nov 20, 2024", category: "Admissions",
    title: "Admissions Open for 2025-26 Academic Session",
    excerpt: "Registration forms for the new academic session are now available online and at the school office. Apply before March 31, 2025.",
    featured: false,
  },
  {
    date: "Nov 10, 2024", category: "Achievement",
    title: "South Point Student Wins National Science Talent Search",
    excerpt: "Arjun Das of Class XI has been selected for the prestigious National Science Talent Search Examination, bringing honour to the school and Assam.",
    featured: false,
  },
  {
    date: "Oct 25, 2024", category: "Event",
    title: "Inter-School Debate Competition — South Point Hosts",
    excerpt: "South Point School hosted the annual inter-school debate competition with participation from 18 schools. Our team secured the runner-up position.",
    featured: false,
  },
  {
    date: "Oct 12, 2024", category: "Achievement",
    title: "Class X Students Excel in Pre-Board Assessments",
    excerpt: "The Class X pre-board results reflect outstanding preparedness with 45 students scoring above 90% aggregate across all subjects.",
    featured: false,
  },
  {
    date: "Sep 28, 2024", category: "Sports",
    title: "South Point Wins Zonal Badminton Championship",
    excerpt: "Our school badminton team swept the Zonal Badminton Championship, with three players earning selection to the state-level tournament.",
    featured: false,
  },
];

const categories = ["All", "Achievement", "Sports", "Event", "Admissions"];

const catColors: Record<string, string> = {
  Achievement: "bg-[#0d1b3e] text-gold border border-gold/30",
  Sports: "bg-[#1a3060] text-gold-light border border-gold/20",
  Event: "bg-[#0d1b3e] text-gold border border-gold/30",
  Admissions: "bg-[#1a3a80] text-white border border-white/20",
};

export default function News() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allNews : allNews.filter(n => n.category === filter);
  const featured = allNews.find(n => n.featured);
  const rest = filtered.filter(n => !n.featured);

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
          <div className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Stay Updated</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            News & <span className="text-gold">Events</span>
          </h1>
          <div className="section-divider w-24 mb-6" />
          <p className="text-gray-300 max-w-2xl text-lg">
            The latest from South Point School — achievements, events, announcements, and more.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Article */}
          {featured && filter === "All" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 rounded-2xl overflow-hidden border border-gray-100 shadow-md grid md:grid-cols-2"
            >
              <div className="bg-[#0d1b3e] p-10 flex flex-col justify-center">
                <span className="inline-block bg-gold text-[#0d1b3e] text-xs font-bold px-3 py-1 rounded-full mb-4">Featured</span>
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar size={12} />
                  <span>{featured.date}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${catColors[featured.category]}`}>
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-white text-2xl font-bold mb-4 leading-tight">{featured.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                  Read Full Story <ArrowRight size={16} />
                </button>
              </div>
              <div className="bg-[#1a3060] flex items-center justify-center min-h-48 md:min-h-auto relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 24px)` }} />
                <div className="text-center p-8 relative z-10">
                  <div className="text-7xl mb-4 drop-shadow-lg">🏆</div>
                  <div className="text-gold font-bold text-lg tracking-wide">Outstanding Achievement</div>
                  <div className="text-gray-300 text-sm mt-1">CBSE Board 2024</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat ? "bg-[#0d1b3e] text-gold" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition card-hover cursor-pointer overflow-hidden"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 h-36 flex items-center justify-center text-5xl">
                  {item.category === "Achievement" ? "🏅" :
                   item.category === "Sports" ? "⚽" :
                   item.category === "Event" ? "🎉" : "📢"}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${catColors[item.category]}`}>
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar size={11} /> {item.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0d1b3e] mb-2 leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.excerpt}</p>
                  <button className="mt-4 text-[#1a3a80] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
