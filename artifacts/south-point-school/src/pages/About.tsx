import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

const faculty = [
  { name: "Dr. Ramesh Baruah", role: "Principal", dept: "Administration", initial: "R" },
  { name: "Mrs. Ananya Bora", role: "Vice Principal", dept: "Academics", initial: "A" },
  { name: "Mr. Sunil Sharma", role: "Head of Science", dept: "Science Dept.", initial: "S" },
  { name: "Mrs. Priti Deka", role: "Head of Arts", dept: "Arts & Humanities", initial: "P" },
  { name: "Mr. Bikash Das", role: "Sports Director", dept: "Physical Education", initial: "B" },
  { name: "Mrs. Ranjita Nath", role: "Head of Commerce", dept: "Commerce Dept.", initial: "R" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <NewsTicker />

      {/* Page Hero */}
      <section className="bg-[#1a1510] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #c9a227 0px, #c9a227 1px, transparent 1px, transparent 30px)`,
        }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 gold-gradient" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-xs font-bold tracking-widest uppercase text-gold/70 mb-3">Our Story</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About <span className="text-gold">South Point School</span></h1>
          <div className="section-divider w-24 mb-6" />
          <p className="text-gray-300 max-w-2xl text-lg">
            Guwahati's institution of choice for parents who believe in the transformative power of quality education.
          </p>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-xs font-bold tracking-widest uppercase text-[#6b4a10] mb-3">Our Legacy</div>
              <h2 className="text-4xl font-bold text-[#1a1510] mb-6">History & Heritage</h2>
              <div className="section-divider w-24 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                South Point School was established in <strong>1960</strong> by visionary educators who believed that every child in Assam deserved access to world-class education. Starting with a modest batch of students, the school grew steadily over the decades.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Affiliated with the Central Board of Secondary Education (CBSE), South Point has consistently produced exceptional results, sending thousands of alumni to premier institutions like IITs, NITs, medical colleges, and universities across India and abroad.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, with over 4,500 students and 200+ faculty members, we continue to honour the founding principle: <em>"Pursuit of Excellence."</em>
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { year: "1960", event: "School founded in Guwahati" },
                { year: "1975", event: "CBSE affiliation obtained" },
                { year: "1990", event: "Senior Secondary wing established" },
                { year: "2000", event: "Modern campus expansion" },
                { year: "2010", event: "Smart classroom initiative launched" },
                { year: "2024", event: "64 years of academic excellence" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="text-gold font-bold text-xl mb-1">{item.year}</div>
                  <div className="text-gray-600 text-sm">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-[#6b4a10] mb-3">Our Purpose</div>
            <h2 className="text-4xl font-bold text-[#1a1510] mb-4">Vision, Mission & Values</h2>
            <div className="section-divider w-24 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔭",
                title: "Our Vision",
                color: "bg-[#1a1510]",
                textColor: "text-gold",
                content: "To be a nationally recognized centre of learning that develops globally competent, ethically grounded, and socially responsible individuals who contribute meaningfully to society.",
              },
              {
                icon: "🎯",
                title: "Our Mission",
                color: "bg-[#6b4a10]",
                textColor: "text-yellow-300",
                content: "To provide high-quality, inclusive education in a nurturing environment that stimulates intellectual curiosity, fosters creativity, and builds character through academic and co-curricular excellence.",
              },
              {
                icon: "⭐",
                title: "Our Values",
                color: "bg-[#4a3008]",
                textColor: "text-gold",
                content: "Integrity, Excellence, Respect, Innovation, Empathy — these core values guide every decision, interaction, and achievement at South Point School.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${card.color} rounded-2xl p-8 text-white card-hover`}
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className={`text-2xl font-bold mb-4 ${card.textColor}`}>{card.title}</h3>
                <p className="text-white/80 leading-relaxed">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section id="principal" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-[#6b4a10] mb-3">From the Desk</div>
            <h2 className="text-4xl font-bold text-[#1a1510]">Principal's Message</h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>
          <div className="bg-[#faf5e8] rounded-3xl p-10 border border-amber-100 relative">
            <div className="text-6xl text-gold absolute top-6 left-8 opacity-30 font-serif leading-none">"</div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div className="w-28 h-28 rounded-full bg-[#1a1510] flex items-center justify-center text-gold text-4xl font-bold shadow-lg">
                  R
                </div>
                <div className="text-center mt-3">
                  <div className="font-bold text-[#1a1510]">Dr. Ramesh Baruah</div>
                  <div className="text-gray-500 text-sm">Principal</div>
                  <div className="text-gray-400 text-xs">M.Ed., Ph.D.</div>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg italic mb-4">
                  "Welcome to South Point School — a place where dreams are nurtured and potential is realized. For over six decades, we have maintained an unwavering commitment to providing the highest quality of education to the children of Guwahati and beyond."
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our approach combines time-tested pedagogical principles with modern teaching methodologies. We believe that true education goes far beyond textbooks — it encompasses the development of character, compassion, and the courage to face life's challenges with integrity.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I invite you to be a part of our distinguished community, where every student is valued, every achievement celebrated, and every aspiration supported. Together, we build the leaders of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-[#6b4a10] mb-3">Our Team</div>
            <h2 className="text-4xl font-bold text-[#1a1510] mb-4">Distinguished Faculty</h2>
            <div className="section-divider w-24 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a1510] flex items-center justify-center text-gold text-2xl font-bold shrink-0">
                  {f.initial}
                </div>
                <div>
                  <div className="font-bold text-[#1a1510]">{f.name}</div>
                  <div className="text-[#6b4a10] text-sm font-medium">{f.role}</div>
                  <div className="text-gray-400 text-xs">{f.dept}</div>
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
