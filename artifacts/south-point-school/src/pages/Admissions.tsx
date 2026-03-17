import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Download, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

const steps = [
  { no: "01", title: "Download Form", desc: "Download or collect the admission form from the school office or our website." },
  { no: "02", title: "Fill & Submit", desc: "Complete the form and submit it with required documents and registration fee." },
  { no: "03", title: "Entrance Test", desc: "Students appear for a grade-appropriate entrance assessment." },
  { no: "04", title: "Interview", desc: "Shortlisted students and parents attend an interaction session with school authorities." },
  { no: "05", title: "Admission Offer", desc: "Merit-based admission letters are issued within 7 working days." },
  { no: "06", title: "Fee Payment", desc: "Confirm admission by completing fee payment and document verification." },
];

const docs = [
  "Birth Certificate (Original + 2 copies)",
  "Transfer Certificate from previous school",
  "Report card / Mark sheet of last class",
  "Aadhaar Card of student",
  "Aadhaar Card of parents/guardian",
  "4 recent passport-size photographs",
  "Proof of residence (electricity bill / rent agreement)",
  "Caste certificate (if applicable)",
];

const fees = [
  { grade: "Classes I – V", annual: "₹45,000", quarterly: "₹11,250", monthly: "₹3,750" },
  { grade: "Classes VI – VIII", annual: "₹55,000", quarterly: "₹13,750", monthly: "₹4,584" },
  { grade: "Classes IX – X", annual: "₹65,000", quarterly: "₹16,250", monthly: "₹5,417" },
  { grade: "Classes XI – XII (Sci)", annual: "₹80,000", quarterly: "₹20,000", monthly: "₹6,667" },
  { grade: "Classes XI – XII (Com/Arts)", annual: "₹70,000", quarterly: "₹17,500", monthly: "₹5,833" },
];

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", grade: "", parent: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <NewsTicker />

      {/* Hero */}
      <section className="bg-[#1a3a80] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #B8901A 0px, #B8901A 1px, transparent 1px, transparent 30px)`,
        }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 gold-gradient" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-xs font-bold tracking-widest uppercase text-yellow-300/70 mb-3">Join Our Family</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Admissions <span className="text-gold">2025 – 26</span>
          </h1>
          <div className="section-divider w-24 mb-6" />
          <p className="text-red-100 max-w-2xl text-lg">
            Applications are now open for all classes. Limited seats available. Take the first step towards a future of excellence.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm">
            <Calendar size={16} className="text-gold" />
            <span>Application Deadline: <strong>March 31, 2025</strong></span>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-[#1a3a80] mb-3">How to Apply</div>
            <h2 className="text-4xl font-bold text-[#0d1b3e] mb-4">Admission Process</h2>
            <div className="section-divider w-24 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl border border-gray-100 hover:border-gold/40 hover:shadow-md transition"
              >
                <div className="text-5xl font-black text-gray-100 absolute top-4 right-4 leading-none">{step.no}</div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#0d1b3e] flex items-center justify-center text-gold font-bold text-sm mb-4">
                    {step.no}
                  </div>
                  <h3 className="font-bold text-[#0d1b3e] text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Fees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Docs */}
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-[#1a3a80] mb-3">Required</div>
              <h2 className="text-3xl font-bold text-[#0d1b3e] mb-6">Documents Required</h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <ul className="space-y-3">
                  {docs.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0d1b3e] border-2 border-[#0d1b3e] px-5 py-2 rounded hover:bg-[#0d1b3e] hover:text-white transition">
                  <Download size={16} />
                  Download Checklist
                </button>
              </div>
            </div>

            {/* Fee Structure */}
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-[#1a3a80] mb-3">Financials</div>
              <h2 className="text-3xl font-bold text-[#0d1b3e] mb-6">Fee Structure 2025–26</h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0d1b3e] text-white">
                      <th className="px-4 py-3 text-left font-semibold">Class</th>
                      <th className="px-4 py-3 text-right font-semibold">Annual</th>
                      <th className="px-4 py-3 text-right font-semibold">Quarterly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((fee, i) => (
                      <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b border-gray-100 last:border-0`}>
                        <td className="px-4 py-3 text-gray-700">{fee.grade}</td>
                        <td className="px-4 py-3 text-right font-semibold text-[#0d1b3e]">{fee.annual}</td>
                        <td className="px-4 py-3 text-right text-gray-500">{fee.quarterly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-4 py-3 bg-amber-50 text-xs text-gray-500 border-t border-gray-100">
                  * Fees include tuition, examination, activity, and sports charges. Transport and hostel are extra.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-[#0d1b3e]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Get In Touch</div>
            <h2 className="text-4xl font-bold text-white mb-4">Admission Enquiry</h2>
            <div className="section-divider w-24 mx-auto" />
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 border border-gold/30 rounded-2xl p-12 text-center"
            >
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-white text-2xl font-bold mb-2">Enquiry Submitted!</h3>
              <p className="text-gray-300">Our admissions team will contact you within 48 hours. Thank you for choosing South Point School.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">Student Name*</label>
                  <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold transition"
                    placeholder="Full name of student" />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">Applying for Grade*</label>
                  <select required value={form.grade} onChange={e => setForm({...form, grade: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold transition">
                    <option value="" className="text-gray-900">Select grade</option>
                    {["Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI", "Class XII"].map(g => (
                      <option key={g} value={g} className="text-gray-900">{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">Parent/Guardian Name*</label>
                  <input required type="text" value={form.parent} onChange={e => setForm({...form, parent: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold transition"
                    placeholder="Parent / Guardian name" />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">Phone Number*</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold transition"
                    placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1.5">Email Address*</label>
                <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold transition"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1.5">Message / Query</label>
                <textarea rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold transition resize-none"
                  placeholder="Any specific queries or information you'd like to share..." />
              </div>
              <button type="submit"
                className="w-full py-3.5 rounded-lg font-bold gold-gradient text-[#0d1b3e] hover:opacity-90 transition flex items-center justify-center gap-2">
                Submit Enquiry <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
