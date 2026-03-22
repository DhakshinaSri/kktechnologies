import targetImg from "@/assets/target.png"; // 👈 center image

export default function MissionVisionSplit() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          
          {/* 🔥 MISSION */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#001919]">
              Mission
            </h2>

            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
              Our mission is to deliver smart, reliable, and scalable technology 
              solutions that simplify business operations and enhance productivity.
            </p>

            <h4 className="mt-6 font-semibold text-[#001919] text-lg">
              We aim to:
            </h4>

            <ul className="mt-4 space-y-4 text-gray-700 text-base sm:text-lg">
              <li>Help businesses adopt digital transformation with ease</li>
              <li>Build solutions that are practical, efficient, and user-friendly</li>
              <li>Maintain strong relationships through trust and consistent delivery</li>
            </ul>
          </div>

          {/* 🔥 CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src={targetImg}
              alt="Target"
              className="w-48 sm:w-56 md:w-64 object-contain"
            />
          </div>

          {/* 🔥 VISION */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#001919]">
              Vision
            </h2>

            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
              Our vision is to become a trusted and recognized technology partner 
              for businesses across industries.
            </p>

            <h4 className="mt-6 font-semibold text-[#001919] text-lg">
              We strive to:
            </h4>

            <ul className="mt-4 space-y-4 text-gray-700 text-base sm:text-lg">
              <li>Lead with innovation and continuous improvement</li>
              <li>Deliver solutions that create long-term impact</li>
              <li>Expand our reach while maintaining quality and integrity</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}