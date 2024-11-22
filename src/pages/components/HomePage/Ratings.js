import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Ratings() {
  const ratings = [
    { score: "4.9", label: "By Individuals" },
    { score: "4.7", label: "By Companies" },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
  };

  // Animation variants for individual child elements
  const childVariants = {
    hidden: { x: -120, opacity: 0, scale: 0.8 },
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex mx-[5%] flex-col md:flex-row items-center md:items-start justify-between px-[5%] py-8 gap-8 mb-32 bg-transparent border border-[#E9E9E9] rounded-xl"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      {/* First Div */}
      <motion.div
        className="space-y-4 text-center md:text-start"
        variants={childVariants}
      >
        <h2 className="text-[36px] sm:text-[44px] md:text-[54px] font-md text-[#303440] leading-tight">
          More Than <span className="font-semibold">14,000</span> Expert Use
          <br />
          <span className="font-semibold text-[#3BAEEB]">Xpert Assistant</span>
        </h2>
        <p className="text-[#6A7080] text-[16px] sm:text-[18px] md:text-[22px]">
          Xpert Assistant sets the standard in CV analysis.
        </p>
      </motion.div>

      {/* Second Div */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {ratings.map((rating, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 * index }}
              className="text-[40px] sm:text-[48px] md:text-[64px] font-bold text-[#181818]"
            >
              {rating.score}
            </motion.h2>
            <motion.div
              className="flex gap-1 text-[#F5A623]"
              variants={childVariants}
            >
              {Array(5)
                .fill()
                .map((_, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50, x: 50 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 * i }}
                  >
                    {" "}
                    <FaStar key={i} size={20} />
                  </motion.div>
                ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 * index }}
              className="text-[#6A7080] text-[16px] sm:text-[18px] md:text-[22px] mt-2"
            >
              {rating.label}
            </motion.p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
