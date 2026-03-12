import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, Award, BookOpen, Users, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";
import StatCounter from "@/components/StatCounter";

const heroSlides = [
  {
    title: "Pursuit of Excellence",
    subtitle: "Shaping Tomorrow's Leaders Since 1960",
    description:
      "South Point School, Guwahati — where academic rigour meets holistic development. Building character, inspiring curiosity, and nurturing potential.",
    bg: "linear-gradient(135deg, #060d1a 0%, #1a3060 50%, #080f20 100%)",
    accent: "#B8901A",
  },
  {
    title: "A Legacy of Achievement",
    subtitle: "6 Decades of Academic Excellence",
    description:
      "With over 4,500 students and 200+ faculty, our institution is the cornerstone of quality education in Assam. CBSE affiliated, nationally recognised.",
    bg: "linear-gradient(135deg, #0a1530 0%, #1e3a7a 50%, #0a1530 100%)",
    accent: "#D4AF37",
  },
  {
    title: "Holistic Development",
    subtitle: "Academics · Sports · Arts · Leadership",
    description:
      "We believe in nurturing every dimension of a student's personality — from STEM excellence to performing arts, from athletics to social responsibility.",
    bg: "linear-gradient(135deg, #060d1a 0%, #0d1a3a 50%, #060d1a 100%)",
    accent: "#B8901A",
  },
];

const newsItems = [
  {
    date: "Dec 10, 2024",
    category: "Achievement",
    title: "12 Students Score 95%+ in CBSE Class XII",
    excerpt: "Our senior secondary students have once again made the school proud with outstanding board examination results.",
  },
  {
    date: "Dec 5, 2024",
    category: "Sports",
    title: "South Point Wins State Football Championship",
    excerpt: "The school football team clinched the Assam State Schools Football Championship for the third consecutive year.",
  },
  {
    date: "Nov 28, 2024",
    category: "Event",
    title: "Annual Science Exhibition 'Innovate 2024'",
    excerpt: "Over 150 science projects were showcased at the annual science exhibition, drawing participation from across Guwahati.",
  },
  {
    date: "Nov 20, 2024",
    category: "Admissions",
    title: "Admissions Open for 2025-26 Session",
    excerpt: "Registration forms for the new academic session are now available online and at the school office.",
  },
];

const programs = [
  {
    icon: "🎒",
    title: "Primary School",
    grades: "Classes I – V",
    desc: "Building strong foundations through activity-based learning, creative exploration, and fundamental skills development.",
    color: "from-blue-600/15 to-blue-700/8",
    border: "border-blue-500/25",
  },
  {
    icon: "📚",
    title: "Middle School",
    grades: "Classes VI – VIII",
    desc: "Expanding horizons with diverse subjects, critical thinking, and extracurricular activities that shape well-rounded individuals.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
  },
  {
    icon: "🎯",
    title: "Secondary School",
    grades: "Classes IX – X",
    desc: "Rigorous CBSE curriculum preparation, career counselling, and developing discipline for the pivotal board examinations.",
    color: "from-red-700/20 to-red-800/10",
    border: "border-red-700/30",
  },
  {
    icon: "🎓",
    title: "Senior Secondary",
    grades: "Classes XI – XII",
    desc: "Specialised streams in Science, Commerce, and Arts. Expert guidance for competitive entrance examinations.",
    color: "from-emerald-600/20 to-emerald-700/10",
    border: "border-emerald-600/30",
  },
];

const events = [
  { date: "20", month: "DEC", title: "Annual Cultural Festival — Utsav 2024", location: "School Auditorium" },
  { date: "25", month: "JAN", title: "Republic Day Celebration & March Past", location: "School Ground" },
  { date: "15", month: "FEB", title: "Inter-School Science Olympiad 2025", location: "Science Block" },
  { date: "31", month: "MAR", title: "Last Date: Admission 2025-26", location: "School Office" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const current = heroSlides[slide];

  return (
    <div className="min-h-screen">
      <Navbar />
      <NewsTicker />

      {/* Hero Section */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        style={{ background: current.bg, transition: "background 1s ease" }}
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #B8901A 0px, #B8901A 1px, transparent 1px, transparent 30px)`,
          }} />
        </div>

        {/* Gold accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 gold-gradient" />

        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white"
            >
              <div
                className="inline-block text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-6"
                style={{ background: `${current.accent}22`, border: `1px solid ${current.accent}55`, color: current.accent }}
              >
                {current.subtitle}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span style={{ color: current.accent }}>{current.title}</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                {current.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  className="flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-[#0d1b3e] gold-gradient hover:opacity-90 transition shadow-lg shadow-gold/20"
                >
                  Apply for Admission <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-white border border-white/30 hover:border-white/60 transition backdrop-blur-sm"
                >
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Logo / Visual */}
            <motion.div
              key={`logo-${slide}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-3xl opacity-20" style={{ background: current.accent }} />
                <img
                  src="/logo.png"
                  alt="South Point School"
                  className="relative w-72 h-72 object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`rounded-full transition-all ${i === slide ? "w-8 h-2 bg-gold" : "w-2 h-2 bg-white/40"}`}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <StatCounter />

      {/* About Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#1a3a80] mb-3">
                About Our School
              </div>
              <h2 className="text-4xl font-bold text-[#0d1b3e] mb-6 leading-tight">
                A Premier Institution of<br />
                <span className="text-gold">Learning & Character</span>
              </h2>
              <div className="section-divider w-24 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                Founded in 1960, South Point School stands as one of Assam's most respected 
                educational institutions. Affiliated with CBSE, we offer a comprehensive education 
                that balances academic excellence with moral and social values.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our campus in the heart of Guwahati spans modern infrastructure — well-equipped 
                laboratories, a vast library, dedicated sports facilities, and a technology-integrated 
                learning environment that prepares students for tomorrow's challenges.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <Award className="text-gold" size={22} />, label: "CBSE Affiliated" },
                  { icon: <BookOpen className="text-[#1a3a80]" size={22} />, label: "NAAC Accredited" },
                  { icon: <Users className="text-[#1e3a7a]" size={22} />, label: "ISO Certified" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-100 text-center">
                    {item.icon}
                    <span className="text-xs font-semibold text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0d1b3e] text-white font-semibold hover:bg-[#1a2a5a] transition"
              >
                Discover Our Story <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { bg: "bg-[#0d1b3e]", text: "text-gold", title: "Vision", desc: "To be the leading institution developing globally competent, ethically grounded citizens." },
                { bg: "bg-[#1a3a80]", text: "text-yellow-300", title: "Mission", desc: "Providing quality education that fosters intellectual curiosity and moral integrity." },
                { bg: "bg-[#f0f4ff]0", text: "text-[#0d1b3e]", title: "Values", desc: "Integrity, Excellence, Empathy, Innovation — the pillars of our school culture." },
                { bg: "bg-[#1a3060]", text: "text-gold-light", title: "Excellence", desc: "Consistently delivering outstanding academic and extracurricular achievements." },
              ].map((card) => (
                <div key={card.title} className={`${card.bg} rounded-xl p-6 card-hover`}>
                  <div className={`text-xl font-bold ${card.text} mb-3`}>{card.title}</div>
                  <p className="text-white/80 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-[#1a3a80] mb-3">Programmes Offered</div>
            <h2 className="text-4xl font-bold text-[#0d1b3e] mb-4">Academic Structure</h2>
            <div className="section-divider w-24 mx-auto mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto">
              A structured, progressive curriculum designed to challenge, inspire, and prepare students at every stage of their educational journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${prog.color} border ${prog.border} rounded-2xl p-6 card-hover cursor-pointer`}
              >
                <div className="text-4xl mb-4">{prog.icon}</div>
                <div className="text-[#0d1b3e] font-bold text-xl mb-1">{prog.title}</div>
                <div className="text-[#1a3a80] text-sm font-semibold mb-3">{prog.grades}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{prog.desc}</p>
                <Link href="/academics" className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[#0d1b3e] hover:text-[#1a3a80] transition">
                  Learn more <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#1a3a80] mb-1">Stay Informed</div>
                  <h2 className="text-3xl font-bold text-[#0d1b3e]">Latest News</h2>
                </div>
                <Link href="/news" className="text-sm font-semibold text-[#0d1b3e] hover:text-gold flex items-center gap-1 transition">
                  View All <ArrowRight size={16} />
                </Link>
              </div>
              <div className="space-y-5">
                {newsItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gold/40 hover:shadow-md transition cursor-pointer group"
                  >
                    <div className="shrink-0 w-16 h-16 rounded-xl bg-[#0d1b3e] flex flex-col items-center justify-center text-gold">
                      <span className="text-xs font-medium">{item.date.split(" ")[0]}</span>
                      <span className="text-xs text-gray-400">{item.date.split(" ")[1]} {item.date.split(" ")[2]}</span>
                    </div>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        item.category === "Achievement" ? "text-yellow-600" :
                        item.category === "Sports" ? "text-blue-600" :
                        item.category === "Event" ? "text-purple-600" : "text-green-600"
                      }`}>
                        {item.category}
                      </span>
                      <h3 className="font-semibold text-[#0d1b3e] group-hover:text-[#1a3a80] transition mt-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <div className="mb-8">
                <div className="text-xs font-bold tracking-widest uppercase text-[#1a3a80] mb-1">Schedule</div>
                <h2 className="text-3xl font-bold text-[#0d1b3e]">Upcoming Events</h2>
              </div>
              <div className="space-y-4">
                {events.map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 hover:bg-[#0d1b3e] transition group cursor-pointer border border-gray-100"
                  >
                    <div className="shrink-0 w-14 text-center">
                      <div className="text-2xl font-bold text-[#B8901A] group-hover:text-gold leading-none">{event.date}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300 font-semibold uppercase">{event.month}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0d1b3e] group-hover:text-white text-sm leading-snug">{event.title}</div>
                      <div className="text-gray-400 group-hover:text-gray-300 text-xs mt-1 flex items-center gap-1">
                        <Calendar size={11} /> {event.location}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Box */}
              <div className="mt-6 rounded-xl navy-gradient p-6 text-center">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-white font-bold text-lg mb-2">Admissions 2025–26</h3>
                <p className="text-gray-300 text-sm mb-4">Applications are open. Limited seats available across all grades.</p>
                <Link
                  href="/admissions"
                  className="block px-5 py-2.5 rounded font-semibold gold-gradient text-[#0d1b3e] text-sm hover:opacity-90 transition"
                >
                  Apply Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0d1b3e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-gold/70 mb-3">Why South Point</div>
            <h2 className="text-4xl font-bold text-white mb-4">The South Point Advantage</h2>
            <div className="section-divider w-24 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏆", title: "Academic Excellence", desc: "Consistently top CBSE results with personalised mentoring and competitive exam coaching." },
              { icon: "🔬", title: "Modern Laboratories", desc: "State-of-the-art Physics, Chemistry, Biology, and Computer labs with the latest equipment." },
              { icon: "📖", title: "Vast Library", desc: "A comprehensive library with over 25,000 books, periodicals, and digital resources." },
              { icon: "⚽", title: "Sports Facilities", desc: "Full-size sports ground, indoor gymnasium, swimming pool, and dedicated coaching staff." },
              { icon: "🎨", title: "Arts & Culture", desc: "Music, dance, drama, and fine arts programs that nurture creative expression and talent." },
              { icon: "🌐", title: "Smart Classrooms", desc: "Technology-integrated learning with projectors, interactive boards, and e-learning platforms." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold/30 transition group"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-[#1a3a80] mb-3">Voices</div>
            <h2 className="text-4xl font-bold text-[#0d1b3e] mb-4">What Our Community Says</h2>
            <div className="section-divider w-24 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                role: "Parent, Class IX",
                quote: "The teachers here genuinely care about each child's growth. My daughter has flourished academically and personally since joining South Point.",
                initial: "P",
              },
              {
                name: "Rahul Gogoi",
                role: "Alumni, Batch 2018",
                quote: "South Point instilled in me the values of discipline, curiosity, and excellence. I credit my success at IIT to the strong foundation laid here.",
                initial: "R",
              },
              {
                name: "Anita Das",
                role: "Parent, Class VII",
                quote: "The balance of academics, sports, and arts at South Point is unmatched in Guwahati. Proud to be part of this family.",
                initial: "A",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 card-hover"
              >
                <div className="text-3xl text-gold mb-4">"</div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0d1b3e] flex items-center justify-center text-gold font-bold">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0d1b3e] text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#1a3a80]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Begin Your <span className="text-gold-light">South Point Journey</span>
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            Applications for the 2025–26 academic session are open. Take the first step toward an outstanding education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="px-8 py-3.5 rounded font-bold gold-gradient text-[#0d1b3e] hover:opacity-90 transition shadow-lg">
              Apply for Admission
            </Link>
            <Link href="/contact" className="px-8 py-3.5 rounded font-bold border-2 border-white/50 text-white hover:border-white transition">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
