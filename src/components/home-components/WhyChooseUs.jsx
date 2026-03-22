import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Clock,
  Rocket,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    { title: "Client-focused approach", icon: <Users size={20} /> },
    { title: "Transparent communication", icon: <MessageCircle size={20} /> },
    { title: "Timely project delivery", icon: <Clock size={20} /> },
    { title: "Scalable and future-ready solutions", icon: <Rocket size={20} /> },
    { title: "Dedicated support and service", icon: <Headphones size={20} /> },
  ];

  // 🔥 Title animation
  const titleAnim = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 🔥 Cards container (stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // 🔥 Card pop animation
  const cardAnim = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 30,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16 bg-[#0D3B53] text-white">
      
      {/* 🔥 Animated Title */}
      <motion.div
        variants={titleAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="block">Why choose</span>

          <span className="inline-block bg-white text-[#0D3B53] px-4 py-2 mt-2 rounded-md">
            KK Technologies
          </span>

          <span className="inline-block ml-2 text-white">?</span>
        </h2>
      </motion.div>

      {/* 🔥 Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {points.map((point, index) => (
          
          <motion.div
            key={index}
            variants={cardAnim}
            className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/20 transition duration-300 hover:-translate-y-1"
          >
            
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0D3B53] mb-3">
              {point.icon}
            </div>

            {/* Text */}
            <p className="text-xs sm:text-sm md:text-base font-medium leading-snug">
              {point.title}
            </p>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}