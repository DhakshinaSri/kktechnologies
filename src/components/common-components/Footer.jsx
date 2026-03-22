import { Link } from "react-router-dom";
import Logo from "@/assets/kktlogo.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 py-12">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_2fr] gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <img src={Logo} alt="KK Technologies Logo" className="h-13 w-auto" />

            <h2 className="text-[#0D3B53] text-2xl font-semibold">
              KK Technologies
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-gray-600">
              Whether you are launching your first website or transforming your business 
              with ERP, KK Technologies is here to support your journey every step of the way.
            </p>
          </div>

          {/* Quick Links */}
<div className="space-y-4 mt-6 md:mt-10">
  <h3 className="text-[#0D3B53] text-lg font-bold">
    Quick Links
  </h3>

  <div className="flex flex-col space-y-2 text-lg">
    <Link to="/" className="hover:text-[#567C8D] transition">› Home</Link>
    <Link to="/about" className="hover:text-[#567C8D] transition">› About Us</Link>
    <Link to="/services" className="hover:text-[#567C8D] transition">› Services</Link>
    <Link to="/contact" className="hover:text-[#567C8D] transition">› Contact Us</Link>
  </div>
</div>

{/* Services */}
<div className="space-y-4 mt-6 md:mt-10">
  <h3 className="text-[#0D3B53] text-lg font-bold">
    Our Services
  </h3>

  <div className="grid gap-x-8 gap-y-2 text-lg">
    <Link to="/services" className="hover:text-[#567C8D] transition">Website Development</Link>
    <Link to="/services" className="hover:text-[#567C8D] transition">ERP Solution</Link>
    <Link to="/services" className="hover:text-[#567C8D] transition">Custom Software Development</Link>
    <Link to="/services" className="hover:text-[#567C8D] transition">Maintenance & Support</Link>
  </div>
</div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 border-t border-gray-200"></div>

        {/* ================= CONTACT STRIP ================= */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">

          {/* Reach Us */}
          <div className="space-y-2">
            <h4 className="text-[#0D3B53] font-medium">Reach Us</h4>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#567C8D]" />
              <span>+91-XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#567C8D]" />
              <span>info@kktechnologies.com</span>
            </div>
          </div>

          {/* Our Presence */}
          <div className="space-y-2">
            <h4 className="text-[#0D3B53] font-medium">Our Presence</h4>

            <p className="text-gray-600">
              Tamil Nadu, India
            </p>
          </div>

          {/* Our Office */}
          <div className="space-y-2">
            <h4 className="text-[#0D3B53] font-medium">Our Office</h4>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#567C8D] mt-1" />
              <span className="text-gray-600">
                Monday – Friday: 9:00 AM – 6:00 PM <br />
                Saturday: 10:00 AM – 2:00 PM <br />
                Sunday: Closed
              </span>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-gray-200 pt-6 text-center text-lg text-gray-500">
          © {new Date().getFullYear()} KK Technologies. All rights reserved.
        </div>

      </div>
    </footer>
  );
}