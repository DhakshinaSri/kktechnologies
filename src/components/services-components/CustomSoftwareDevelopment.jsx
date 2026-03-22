import SoftwareImg from "@/assets/softwareimg.png";
import { Cpu, Lightbulb, Layers, Plug } from "lucide-react";

export default function CustomSoftwareDevelopment() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* 🔥 Heading with Icon */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#5ce1e6]/20 text-[#001919]">
              <Cpu size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001919]">
              Custom Software Development
            </h2>
          </div>

          {/* 🔥 Image */}
          <div className="mt-8 relative">
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#5ce1e6]/10 rounded-2xl blur-2xl"></div>

            <img
              src={SoftwareImg}
              alt="Custom Software Development"
              className="relative z-10 w-full max-w-lg object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">
          
          {/* ✅ MOVED DESCRIPTION HERE */}
          <p className="text-gray-600 text-base sm:text-lg max-w-md text-justify">
            Every business is unique, and so are its requirements. We design and develop 
            custom software tailored specifically to your workflows and objectives.
          </p>

          {/* FOCUS SECTION */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 w-[3px] h-full bg-gradient-to-b from-[#5ce1e6] to-[#001919] rounded-full"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#001919] mb-4">
              Our focus:
            </h3>

            <ul className="space-y-4 text-gray-600 text-lg sm:text-base">

              <li className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
                  <Lightbulb size={16} />
                </div>
                Understanding your exact requirements
              </li>

              <li className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
                  <Layers size={16} />
                </div>
                Building flexible and scalable solutions
              </li>

              <li className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
                  <Plug size={16} />
                </div>
                Ensuring seamless integration with existing systems
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}