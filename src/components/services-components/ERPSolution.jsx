import WebImg from "@/assets/erpimg.png";
import { Database, Calculator, Users, Package, UserCheck } from "lucide-react";

export default function ERPSolution() {
  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* 🔥 Heading with Icon */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#5ce1e6]/20 text-[#001919]">
              <Database size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001919]">
              ERP Solutions
            </h2>
          </div>

          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-md text-justify">
            Managing multiple business processes can be complex. Our ERP solutions simplify 
            everything by integrating your operations into a single, efficient system.
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

        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-10">
          
          {/* SERVICES LIST */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 w-[3px] h-full bg-gradient-to-b from-[#5ce1e6] to-[#001919] rounded-full"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#001919] mb-4">
              Our ERP systems help you:
            </h3>

            <ul className="space-y-3 text-gray-600 text-lg sm:text-base">
              <li>• Automate daily operations</li>
              <li>• Manage data centrally</li>
              <li>• Improve decision-making with real-time insights</li>
              <li>• Reduce manual costs and increase productivity</li>
            </ul>
          </div>

          {/* WE DEVELOP */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 w-[3px] h-full bg-gradient-to-b from-[#5ce1e6] to-[#001919] rounded-full"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#001919] mb-4">
              We customize ERP modules based on your business needs, including:
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-lg sm:text-base">

  <li className="flex items-center gap-3">
    <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
      <Calculator size={16} />
    </div>
    Finance & Accounting
  </li>

  <li className="flex items-center gap-3">
    <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
      <Users size={16} />
    </div>
    Human Resource Management
  </li>

  <li className="flex items-center gap-3">
    <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
      <Package size={16} />
    </div>
    Inventory & Supply Chain
  </li>

  <li className="flex items-center gap-3">
    <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
      <UserCheck size={16} />
    </div>
    Sales & Customer Management
  </li>

</ul>
          </div>

        </div>
      </div>
    </section>
  );
}