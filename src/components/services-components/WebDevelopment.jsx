import WebImg from "@/assets/WebImg.png";
import { Code, Globe, Layout, ShoppingCart, AppWindow } from "lucide-react";

export default function WebDevelopmentSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* 🔥 Heading with Icon */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#5ce1e6]/20 text-[#001919]">
              <Code size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001919]">
              Web Development
            </h2>
          </div>

          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-md">
            We create websites that do more than just look good—they perform.
          </p>

          {/* 🔥 Image (clean, no background feel) */}
          <div className="mt-8 relative">
            
            {/* subtle glow instead of box */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#5ce1e6]/10 rounded-2xl blur-2xl"></div>

            <img
              src={WebImg}
              alt="Web Development"
              className="relative z-10 w-full max-w-lg object-contain mix-blend-multiply"
            />
          </div>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-md">
            Every website we build reflects your brand identity and helps you
            connect effectively with your audience.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-10">
          
          {/* SERVICES LIST */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 w-[3px] h-full bg-gradient-to-b from-[#5ce1e6] to-[#001919] rounded-full"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#001919] mb-4">
              Our website development services include:
            </h3>

            <ul className="space-y-3 text-gray-600 text-lg sm:text-base">
              <li>• Responsive design for all devices</li>
              <li>• User-friendly interface and smooth navigation</li>
              <li>• SEO-friendly structure for better visibility</li>
              <li>• High performance and fast loading speed</li>
              <li>• Secure and scalable architecture</li>
            </ul>
          </div>

          {/* WE DEVELOP */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 w-[3px] h-full bg-gradient-to-b from-[#5ce1e6] to-[#001919] rounded-full"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#001919] mb-4">
              We develop:
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-lg sm:text-base">

  <li className="flex items-center gap-3">
    <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
      <Globe size={16} />
    </div>
    Business websites
  </li>

  <li className="flex items-center gap-3">
    <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
      <Layout size={16} />
    </div>
    Portfolio websites
  </li>

  <li className="flex items-center gap-3">
    <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
      <ShoppingCart size={16} />
    </div>
    E-commerce platforms
  </li>

  <li className="flex items-center gap-3">
    <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
      <AppWindow size={16} />
    </div>
    Web applications
  </li>

</ul>
          </div>

        </div>
      </div>
    </section>
  );
}