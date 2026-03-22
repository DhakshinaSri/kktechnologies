import Navbar from "@/components/common-components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import CSR from "@/pages/CSR";
import Footer from "@/components/common-components/Footer";

// 👇 Import ScrollToTop
import ScrollToTop from "@/components/common-components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />

      {/* 🔥 Scroll to top on route change */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}