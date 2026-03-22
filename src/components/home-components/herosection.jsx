import { motion } from "framer-motion";
import phoneImage from "@/assets/hero.png";
import Button from "@/components/common-components/Button";

export default function HeroSection() {
  // 🔥 Container animation (stagger children)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 Common fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full px-3 sm:px-6 py-6">
  
      <div className="relative w-full rounded-xl overflow-hidden">
        
        {/* Gradient */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(97,178,229,0.3) 0deg, #ffffff 169.62deg, rgba(138,56,245,0.2) 292.5deg, rgba(97,178,229,0.3) 360deg)",
          }}
        />

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-4 py-8"
        >
          
          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Empowering Businesses with <br />
            Smart Digital Solutions
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-2 text-gray-600 max-w-2xl mx-auto text-lg"
          >
            At KK Technologies, we believe technology should feel natural, intuitive, and 
            empowering—not complicated. We are a dedicated software development company 
            focused on building meaningful digital experiences through high-quality website 
            development and intelligent ERP solutions.
          </motion.p>

          {/* Button */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex justify-center"
          >
            <Button text="Explore" to="/services" />
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            className="relative mt-8 flex justify-center"
            animate={{ y: [0, -10, 0] }} // 🔥 floating effect
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={phoneImage}
              alt="mockup"
              className="w-[390px] sm:w-[320px] md:w-[550px]"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}