import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <NewsTicker />

      {/* Hero */}
      <section className="bg-[#0d1b3e] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #B8901A 0px, #B8901A 1px, transparent 1px, transparent 30px)`,
        }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 gold-gradient" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy <span className="text-gold">Policy</span></h1>
          <div className="section-divider w-24 mb-4" />
          <p className="text-gray-300 max-w-2xl">
            Last Updated: March 2024. Your privacy is important to South Point School.
          </p>
        </div>
      </section>

      <section className="py-20 blue-glow-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-blue max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">1. Introduction</h2>
            <p className="mb-6">
              South Point School ("we", "us", "our") is committed to protecting the privacy and security of the personal information of our students, parents, and website visitors. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and admission portal.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect personal information including but not limited to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Student and parent names and contact details (email, phone, address).</li>
              <li>Academic records and birth certificates provided during the admission process.</li>
              <li>Communication preferences and feedback provided through our contact forms.</li>
              <li>Technical data like IP addresses and browsing behavior for site optimization.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">Collected data is used specifically for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Processing admission applications and maintaining student records.</li>
              <li>Communicating important school updates and newsletters.</li>
              <li>Improving website functionality and user experience.</li>
              <li>Compliance with educational board (CBSE) mandates and legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">4. Data Security</h2>
            <p className="mb-6">
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and while we strive for excellence, we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">5. Third-Party Sharing</h2>
            <p className="mb-6">
              We do not sell your personal data. We only share information with authorized third parties (like educational boards or payment gateways) when necessary to fulfill school-related services.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">6. Contact Us</h2>
            <p className="mb-6">
              If you have any questions regarding this Privacy Policy, please contact our administrative office at <strong>helpdesk@spsghy.co.in</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
