import React from "react";
import { motion } from "framer-motion";
export default function Pricing() {
  const plans = [
    {
      price: "0$",
      description:
        "Full access to the app features for 50 hours a month, after which the app will only run for 20 minutes a day.",
    },
    {
      price: "59$",
      description:
        "For $59 a month you get a full no-limit for a calendar month from the date of payment.",
    },
    {
      price: "799$",
      description:
        "For a one-time fee of $799, you get full access to all current and future features forever!",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 md:px-[5%] py-8 space-y-6">
      {/* Headings */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-3xl md:text-[48px] font-md text-center text-[#303440]"
      >
        The Choice <span className="text-[#3BAEEB]">is yours</span>
      </motion.h2>
      <motion.p
        initial={{ scale: 0.8, opacity: 0, x: 50 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[#999999] text-[24px] text-center max-w-[600px]"
      >
        You have 50 hours to see if the app is right for you
      </motion.p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
        {plans.map((plan, index) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="group bg-white rounded-2xl px-10 py-6 flex flex-col shadow-[#5b788849] items-center shadow-lg md:items-start space-y-4 hover:bg-gradient-to-br hover:from-[#3BAEEB] hover:to-[#0F5D86] duration-700 transition"
          >
            <h2 className="text-[77.49px] font-semibold text-[#3BAEEB] group-hover:text-white transition">
              {plan.price}
            </h2>
            <p className="text-[24px]  text-[#6A7080] text-center md:text-start group-hover:text-white transition">
              {plan.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Closing Paragraph */}
      <motion.p
        initial={{ scale: 0.8, opacity: 0, x: 50 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#999999] text-[24px] text-center max-w-[600px]"
      >
        You can pay for your subscription in the app.
      </motion.p>
    </div>
  );
}
