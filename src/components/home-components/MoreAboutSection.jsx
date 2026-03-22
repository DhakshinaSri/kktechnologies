import { motion } from "framer-motion";
import mainImage from "@/assets/mainimage.jpg";

export default function MoreAboutSection() {
  // 🔥 Container (stagger effect)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // delay between cards
      },
    },
  };

  // 🔥 Card animation (zoom out)
  const cardAnim = {
    hidden: {
      opacity: 0,
      scale: 1.1, // slightly zoomed in
    },
    show: {
      opacity: 1,
      scale: 1, // zoom out to normal
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16 bg-gray-50">
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
      >
        
        {/* 🔵 Left Card */}
        <motion.div
          variants={cardAnim}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex h-[250px] overflow-hidden"
        >
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            In today’s fast-paced digital environment, having just an online presence 
            is not enough. Businesses need platforms that engage users, streamline 
            operations, and support long-term growth. That’s where we come in.
          </p>
        </motion.div>

        {/* 🟣 Center Image Card */}
        <motion.div
          variants={cardAnim}
          className="group bg-white rounded-2xl shadow-md overflow-hidden flex h-[250px]"
        >
          <img
            src={mainImage}
            alt="About visual"
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />
        </motion.div>

        {/* 🔵 Right Card */}
        <motion.div
          variants={cardAnim}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex h-[250px] overflow-hidden"
        >
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            We combine creative thinking with technical expertise to deliver 
            solutions that are visually appealing, functionally strong, and 
            aligned with your business goals. Every project we take up is 
            treated as a partnership—we listen, understand, design, and deliver with precision.
          </p>
        </motion.div>

      </motion.div>

    </section>
  );
}