import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

const streams = [
  {
    name: "Science",
    icon: "🔬",
    subjects: ["Physics", "Chemistry", "Biology / Mathematics", "English", "Computer Science"],
    career: "Engineering, Medicine, Research, Technology",
    color: "border-blue-400 bg-blue-50",
    badge: "bg-blue-600",
  },
  {
    name: "Commerce",
    icon: "📊",
    subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics"],
    career: "CA, MBA, Banking, Finance, Entrepreneurship",
    color: "border-green-400 bg-green-50",
    badge: "bg-green-600",
  },
  {
    name: "Arts",
    icon: "🎨",
    subjects: ["History", "Political Science", "Geography", "Economics", "English"],
    career: "Civil Services, Law, Journalism, Teaching",
    color: "border-purple-400 bg-purple-50",
    badge: "bg-purple-600",
  },
];

const activities = [
  { icon: "⚽", name: "Football" },
  { icon: "🏏", name: "Cricket" },
  { icon: "🏸", name: "Badminton" },
  { icon: "🏊", name: "Swimming" },
  { icon: "🎭", name: "Drama & Theatre" },
  { icon: "🎵", name: "Music" },
  { icon: "💃", name: "Classical Dance" },
  { icon: "🖌️", name: "Fine Arts" },
  { icon: "🤖", name: "Robotics Club" },
  { icon: "📰", name: "Debate Club" },
  { icon: "🌿", name: "Eco Club" },
  { icon: "📸", name: "Photography" },
];

export default function Academics() {
  const [activeTab, setActiveTab] = useState("primary");

  const tabs = [
    { id: "primary", label: "Primary (I–V)" },
    { id: "middle", label: "Middle (VI–VIII)" },
    { id: "secondary", label: "Secondary (IX–X)" },
    { id: "senior", label: "Senior Sec. (XI–XII)" },
  ];

  const tabContent: Record<string, { title: string; desc: string; subjects: string[]; highlights: string[] }> = {
    primary: {
      title: "Primary School — Classes I to V",
      desc: "Our primary programme focuses on building strong foundations through activity-based, experiential learning. Children develop literacy, numeracy, and life skills in a joyful, supportive environment.",
      subjects: ["English Language & Literature", "Hindi", "Mathematics", "Environmental Studies", "General Knowledge", "Art & Craft", "Physical Education"],
      highlights: ["Activity-based teaching methodology", "Individual attention in small class sizes", "Integrated arts and games curriculum", "Regular parent-teacher interactions"],
    },
    middle: {
      title: "Middle School — Classes VI to VIII",
      desc: "The middle school broadens academic horizons while nurturing critical thinking, collaborative skills, and character development. Students are introduced to specialized subjects and encouraged to explore diverse interests.",
      subjects: ["English", "Hindi / Sanskrit", "Mathematics", "Science", "Social Science", "Computer Applications", "Art / Music / PE"],
      highlights: ["Subject-specific teaching staff", "Science and Maths olympiad preparation", "Leadership development programmes", "Community service initiatives"],
    },
    secondary: {
      title: "Secondary School — Classes IX to X",
      desc: "The secondary phase prepares students rigorously for CBSE Board examinations while developing analytical abilities and academic discipline. Career awareness and guidance begins at this stage.",
      subjects: ["English Language & Literature", "Mathematics", "Science", "Social Science", "Hindi / Sanskrit", "Information Technology"],
      highlights: ["CBSE Pattern intensive preparation", "Regular mock examinations", "Career guidance workshops", "Competitive exam foundation courses"],
    },
    senior: {
      title: "Senior Secondary — Classes XI to XII",
      desc: "Three specialized streams — Science, Commerce, and Arts — allow students to pursue their areas of interest with depth and rigour. Comprehensive coaching for JEE, NEET, CUET, and other entrance exams is provided.",
      subjects: ["Stream-specific core subjects", "Elective subjects as per stream", "Physical Education", "English (Compulsory)"],
      highlights: ["Expert subject faculty", "Entrance exam coaching (JEE/NEET/CUET)", "College application guidance", "Industry interaction and career fairs"],
    },
  };

  const content = tabContent[activeTab];

  return (
    <div className="min-h-screen">
      <Navbar />
      <NewsTicker />

      {/* Page Hero */}
      <section className="bg-[#0f1e3d] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #c9a227 0px, #c9a227 1px, transparent 1px, transparent 30px)`,
        }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 gold-gradient" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-xs font-bold tracking-widest uppercase text-gold/70 mb-3">Learning & Growth</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-gold">Academic</span> Excellence
          </h1>
          <div className="section-divider w-24 mb-6" />
          <p className="text-gray-300 max-w-2xl text-lg">
            A structured, CBSE-aligned curriculum spanning primary through senior secondary, designed to challenge and inspire every student.
          </p>
        </div>
      </section>

      {/* Academic Levels */}
      <section id="primary" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-widest uppercase text-[#7d2a1e] mb-3">Curriculum</div>
            <h2 className="text-4xl font-bold text-[#0f1e3d] mb-4">Academic Structure</h2>
            <div className="section-divider w-24 mx-auto" />
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0f1e3d] text-gold shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-10 items-start"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0f1e3d] mb-4">{content.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{content.desc}</p>
              <div>
                <div className="font-semibold text-[#0f1e3d] mb-3">Key Highlights</div>
                <ul className="space-y-2">
                  {content.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-gold mt-1">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="font-semibold text-[#0f1e3d] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded bg-gold inline-block" />
                Subjects Offered
              </div>
              <ul className="space-y-2">
                {content.subjects.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-700 py-2 border-b border-gray-100 last:border-0 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#7d2a1e] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Senior Secondary Streams */}
      <section id="senior" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-[#7d2a1e] mb-3">Classes XI–XII</div>
            <h2 className="text-4xl font-bold text-[#0f1e3d] mb-4">Senior Secondary Streams</h2>
            <div className="section-divider w-24 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {streams.map((stream, i) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border-2 ${stream.color} p-6 card-hover`}
              >
                <div className="text-4xl mb-4">{stream.icon}</div>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`${stream.badge} text-white text-xs font-bold px-3 py-1 rounded-full`}>{stream.name} Stream</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {stream.subjects.map((s) => (
                    <li key={s} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-gray-500 pt-3 border-t border-gray-200">
                  <span className="font-semibold text-gray-700">Career Options: </span>
                  {stream.career}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Curricular */}
      <section className="py-20 bg-[#0f1e3d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-gold/70 mb-3">Beyond Classrooms</div>
            <h2 className="text-4xl font-bold text-white mb-4">Co-Curricular Activities</h2>
            <div className="section-divider w-24 mx-auto" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {activities.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-gold/30 transition cursor-pointer"
              >
                <div className="text-3xl mb-2">{a.icon}</div>
                <div className="text-gray-300 text-xs font-medium">{a.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
