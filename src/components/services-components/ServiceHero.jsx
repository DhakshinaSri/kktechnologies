import servicesImage from "@/assets/service-image.png"; // 👈 replace with your image

export default function ServicesHero() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800">
          Our Services
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-3xl text-lg mx-auto">
          We provide powerful, scalable, and user-focused digital solutions
          designed to help businesses grow, streamline operations, and succeed
          in a competitive digital landscape.
        </p>

        {/* Image Section */}
        <div className="relative mt-16 flex justify-center items-center">


          {/* Main Image */}
          <img
  src={servicesImage}
  alt="Services Dashboard"
  className="relative z-10 w-full max-w-4xl object-contain mix-blend-multiply"
/>

          
        </div>
      </div>
    </section>
  );
}