import { motion } from "framer-motion";
import aboutImg from "@/assets/aboutimage.png";

export default function AboutSection() {
  // 🔥 Title animation
  const titleAnim = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 🔥 Description animation
  const descAnim = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
    },
  };

  // 🔥 Image animation
  const imageAnim = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-10">
      
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-2xl p-2">
          
          {/* Title */}
          <motion.h2
            variants={titleAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4"
          >
            About Us
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={descAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-700 text-lg sm:text-xl leading-relaxed text-justify font-semibold"
          >
            KK Technologies was founded with a simple idea—to make technology
            accessible and valuable for every business. Over time, we have grown
            into a reliable development partner for organizations looking to build
            efficient, scalable, and user-friendly digital solutions.{" "}
            
            <span className="text-[#0D3B53] font-bold cursor-pointer hover:underline">
              more....
            </span>
          </motion.p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={imageAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
          animate={{ y: [0, -10, 0] }} // 🔥 subtle float
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={aboutImg}
            alt="About KK Technologies"
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[370px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}