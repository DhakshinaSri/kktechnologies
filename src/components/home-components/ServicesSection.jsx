import { motion } from "framer-motion";
import webDev from "@/assets/webdevelopment.jpg";
import erp from "@/assets/erpsolutions.jpg";
import software from "@/assets/softwaredevelopment.jpg";
import maintenance from "@/assets/maintenance.jpg";
import Button from "@/components/common-components/Button";

export default function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      image: webDev,
      description: "Modern, responsive websites designed to engage users and grow your business.",
    },
    {
      title: "ERP Solutions",
      image: erp,
      description: "Integrated systems to streamline operations and improve efficiency.",
    },
    {
      title: "Custom Software Development",
      image: software,
      description: "Tailored software solutions built to match your unique business needs.",
    },
    {
      title: "Maintenance & Support",
      image: maintenance,
      description: "Reliable support and updates to keep your systems running smoothly.",
    },
  ];

  // 🔥 Header animations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 🔥 Button animation
  const buttonAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  // 🔥 Cards container (stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 Card pop animation
  const cardAnim = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-14">
      
      {/* 🔥 Header */}
      <div className="text-center mb-10">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-6xl font-bold text-black"
        >
          What We Do
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mt-3 max-w-4xl mx-auto text-lg pb-6"
        >
          We deliver smart, reliable, and scalable technology solutions that 
          simplify business operations and enhance productivity. Whether you 
          are launching your first website or transforming your business with 
          ERP, KK Technologies is here to support your journey every step of the way.
        </motion.p>

        <motion.div
          variants={buttonAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Button text="Explore Services" to="/services" />
        </motion.div>
      </div>

      {/* 🔥 Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardAnim}
            className="group"
          >
            
            {/* Image */}
            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[180px] sm:h-[250px] object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="mt-3 text-base sm:text-lg font-bold text-gray-900">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-1 text-lg text-gray-600 leading-relaxed">
              {service.description}
            </p>

            {/* CTA */}
            <p className="text-sm font-semibold text-[#0D3B53] mt-2 cursor-pointer hover:underline">
              Learn more ↗
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}