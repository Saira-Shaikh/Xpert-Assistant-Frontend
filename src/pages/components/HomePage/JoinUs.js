import React from "react";
import { motion } from "framer-motion";

export default function JoinUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center px-4 md:px-[5%] py-8 space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Headings */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-3xl md:text-[48px] font-md text-center  text-[#303440]"
      >
        Join us <span className="text-[#3BAEEB]">Today</span>
      </motion.h2>
      <motion.p
        className="text-[#999999] text-center max-w-[550px]"
        initial={{ scale: 0.8, opacity: 0, x: 50 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sign up for our waitlist to be the first to access our resume grading
        services. Don't miss out—secure your spot today!
      </motion.p>

      {/* Form */}
      <motion.form
        className="flex flex-col w-[80%] items-center"
        initial="hidden"
        whileInView="visible"
        variants={scaleIn}
      >
        <motion.div
          className="w-full bg-white shadow-lg rounded-xl p-6 space-y-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          custom={3}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Row 1 Inputs */}
            <motion.input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              initial="hidden"
              whileInView="visible"
              variants={slideIn}
            />
            <motion.input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              initial="hidden"
              whileInView="visible"
              variants={slideIn}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Row 2 Inputs */}
            <motion.input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              initial="hidden"
              whileInView="visible"
              variants={slideIn}
            />
            <motion.input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              initial="hidden"
              whileInView="visible"
              variants={slideIn}
            />
          </div>
        </motion.div>
        <motion.button
          type="submit"
          className="w-fit bg-[#3BAEEB] text-white font-medium py-2 my-6 px-8 rounded-md hover:bg-blue-600 transition"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          custom={4}
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
