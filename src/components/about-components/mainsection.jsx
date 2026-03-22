import { motion } from "framer-motion";
import BgImage from "@/assets/handshake.jpg"; 

export default function mainsection() {
  return (
    <section
      className="w-full relative bg-fixed bg-center bg-cover border-b-5 border-[#CFB0F8]"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center px-6 md:px-20 lg:px-32 py-28">
        <div className="flex flex-col items-center text-center max-w-3xl">

          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white pb-6"
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-white text-base md:text-lg text-center pb-8"
          >
            KK Technologies was founded with a simple idea—to make technology accessible 
            and valuable for every business. Over time, we have grown into a reliable 
            development partner for organizations looking to build efficient, scalable, 
            and user-friendly digital solutions.
          </motion.p>

        </div>
      </div>
    </section>
  );
}