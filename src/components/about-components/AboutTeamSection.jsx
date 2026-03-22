import { motion } from "framer-motion";

export default function AboutTeamSection() {
  // 🔥 Heading animation
  const headingAnim = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 🔥 Container (stagger paragraphs)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 Paragraph animation
  const textAnim = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* 🔥 Animated Heading */}
        <motion.h2
          variants={headingAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001919] max-w-3xl"
        >
          We build solutions that truly fit your business
        </motion.h2>

        {/* 🔥 Animated Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-base sm:text-lg text-justify"
        >
          
          <motion.p variants={textAnim}>
            Our team consists of skilled developers, creative designers, and 
            strategic thinkers who bring diverse expertise into every project. 
            We don’t just develop software; we solve problems. By understanding 
            your business processes, challenges, and goals, we create solutions 
            that truly fit your needs.
          </motion.p>

          <motion.p variants={textAnim}>
            We follow a collaborative approach where clients are involved at 
            every stage—from planning and design to development and deployment. 
            This ensures transparency, trust, and results that match expectations. 
            At KK Technologies, we are driven by curiosity, innovation, and a 
            commitment to excellence.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
}