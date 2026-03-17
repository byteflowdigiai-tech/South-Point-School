import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

export default function TermsConditions() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms & <span className="text-gold">Conditions</span></h1>
          <div className="section-divider w-24 mb-4" />
          <p className="text-gray-300 max-w-2xl">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </section>

      <section className="py-20 blue-glow-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-blue max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">1. Acceptances of Terms</h2>
            <p className="mb-6">
              By accessing and using the South Point School website (spsghy.co.in) and its related portals, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">2. Intellectual Property</h2>
            <p className="mb-6">
              All content on this website, including but not limited to text, graphics, logos, images, and school insignia, is the property of South Point School and is protected by copyright laws. Unauthorized use of these materials is strictly prohibited.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">3. Admission & Fees</h2>
            <p className="mb-6">
              Submission of an admission form does not guarantee admission. The school reserves the right to grant admission based on its specific criteria and availability. All fees are non-refundable except where explicitly stated in our school fee structure guidelines.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">4. Code of Conduct</h2>
            <p className="mb-6">
              Students and parents are expected to adhere to the school's high standards of discipline, respect, and academic integrity. Violation of school rules and regulations may lead to disciplinary action, including suspension or expulsion as per the school board's recommendations.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">5. Limitation of Liability</h2>
            <p className="mb-6">
              South Point School shall not be held liable for any damages arising from the use of this website, including technical malfunctions or inaccuracies in the data provided. While we strive to keep information accurate, all data is subject to verification by the school office.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-4">6. Governing Law</h2>
            <p className="mb-6">
              These terms are governed by the laws of India. Any disputes arising in connection with the school or this website shall be subject to the exclusive jurisdiction of the courts in Guwahati, Assam.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
