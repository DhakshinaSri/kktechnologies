export default function QualitySection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-12 bg-gray-50">
      
      <div className="max-w-4xl">
        
        {/* Badge */}
        <span className="inline-block bg-[#123a4a] text-white text-xs sm:text-sm px-4 py-2 rounded-lg mb-6">
          Quality Statement
        </span>

        {/* Text */}
        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-800 leading-snug">
          Quality is not just a process at{" "}
          <span className="font-bold">KK Technologies</span>
          —it is a mindset.
        </h2>

      </div>
    </section>
  );
}