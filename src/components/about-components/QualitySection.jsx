import qualityImg from "@/assets/quality.jpg"; // 👈 add your image

export default function QualitySection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16 bg-gray-50 border-t-5 border-[#CFB0F840]">
      
      <div className="max-w-6xl mx-auto">
        
        {/* 🔥 HEADER */}
        <div className="max-w-4xl">
          <span className="inline-block bg-[#123a4a] text-white text-xs sm:text-sm px-4 py-2 rounded-lg mb-6">
            Quality Statement
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-snug">
            Quality is not just a process at{" "}
            <span className="font-bold">KK Technologies</span>
            —it is a mindset.
          </h2>
        </div>

        {/* 🔥 CONTENT (IMAGE + LIST) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
  
  {/* LEFT IMAGE */}
  <div className="rounded-xl overflow-hidden h-[220px] sm:h-[240px]">
    <img
      src={qualityImg}
      alt="Quality"
      className="w-full h-full object-cover"
    />
  </div>

  {/* RIGHT BOX */}
  <div className="bg-gray-100 rounded-xl p-4 sm:p-5 space-y-3 flex flex-col justify-center">
    
    <p className="text-gray-700 text-sm sm:text-base">
      Following structured development methodologies
    </p>

    <p className="text-gray-700 text-sm sm:text-base">
      Conducting thorough testing at every stage
    </p>

    <p className="text-gray-700 text-sm sm:text-base">
      Maintaining clear and consistent communication with clients
    </p>

    <p className="text-gray-700 text-sm sm:text-base">
      Using reliable and modern technologies
    </p>

    <p className="text-gray-700 text-sm sm:text-base">
      Continuously improving based on feedback and performance
    </p>

  </div>
</div>

        {/* 🔥 BOTTOM TEXT */}
        <p className="mt-8 text-gray-600 text-base sm:text-lg max-w-4xl">
          Our goal is to deliver solutions that are secure, efficient, scalable, 
          and dependable, ensuring complete client satisfaction.
        </p>

      </div>
    </section>
  );
}