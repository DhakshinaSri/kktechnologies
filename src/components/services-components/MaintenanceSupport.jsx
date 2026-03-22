import SupportImg from "@/assets/supportimg.png";
import { Headset, RefreshCw, Wrench, ShieldCheck, LifeBuoy } from "lucide-react";

export default function MaintenanceSupport() {
  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* 🔥 Heading with Icon */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#5ce1e6]/20 text-[#001919]">
              <Headset size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001919]">
              Maintenance & Support
            </h2>
          </div>

          {/* 🔥 Image */}
          <div className="mt-8 relative">
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#5ce1e6]/10 rounded-2xl blur-2xl"></div>

            <img
              src={SupportImg}
              alt="Maintenance & Support"
              className="relative z-10 w-full max-w-lg object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">
          
          {/* DESCRIPTION */}
          <p className="text-gray-600 text-base sm:text-lg max-w-md text-justify">
            Our relationship doesn’t end after delivery. We provide ongoing support 
            to ensure your systems run smoothly at all times.
          </p>

          {/* SUPPORT SERVICES */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 w-[3px] h-full bg-gradient-to-b from-[#5ce1e6] to-[#001919] rounded-full"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#001919] mb-4">
              Our support services include:
            </h3>

            <ul className="space-y-4 text-gray-600 text-lg sm:text-base">

              <li className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
                  <RefreshCw size={16} />
                </div>
                Regular updates and improvements
              </li>

              <li className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
                  <Wrench size={16} />
                </div>
                Bug fixing and performance optimization
              </li>

              <li className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
                  <ShieldCheck size={16} />
                </div>
                Security monitoring
              </li>

              <li className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
                  <LifeBuoy size={16} />
                </div>
                Technical assistance when needed
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}