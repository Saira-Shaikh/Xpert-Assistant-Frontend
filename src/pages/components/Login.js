import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export default function Login() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row min-h-fit space-y-6 md:space-y-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* First Column */}
      <motion.div
        className="flex bg-gradient-to-r from-[#3BAEEB] to-[#0F5D86] rounded-2xl lg:w-1/2 h-fit m-6 shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-6 py-16">
          <img
            src="/Logo.png"
            alt="Logo"
            className="mb-4 w-fit h-[25px] opacity-90 hover:opacity-100 transition"
          />
          <div className="text-center text-white">
            <motion.img
              src="/LoginRight.png"
              alt="Logo"
              className="mx-auto mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            />
            <h2 className="text-2xl mb-4 md:text-3xl font-md">
              More Than <span className="font-bold">14,000</span> Expert Use
              <br />
              <span className="block text-2xl md:text-3xl font-bold text-[#3BAEEB]">
                Xpert Assistant
              </span>
            </h2>
            <p className="text-sm md:text-base">
              Xpert Assistant sets the standard in CV analysis.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Second Column */}
      <motion.div
        className="flex flex-col justify-center rounded-lg w-full text-center lg:text-start lg:w-1/2 px-16 py-6 space-y-6"
        initial={{ opacity: 0, x: 400 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.h2 className="text-xl md:text-[48px] font-bold text-[#181818]">
          Login
        </motion.h2>
        <motion.p
          className="text-sm text-gray-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Train it once with your team profiles, and it will score applicants on
          your unique scale.
        </motion.p>
        <motion.button
          className="flex items-center justify-center gap-2 bg-[#3BAEEB1A] text-gray-600 py-2 px-4 rounded-md hover:bg-gray-200 w-full transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FcGoogle />
          <span>Sign In With Google</span>
        </motion.button>

        {/* Input Fields */}
        <motion.div className="space-y-4" variants={childVariants}>
          <input
            type="email"
            placeholder="Email"
            className="border border-[#3BAEEBCC] rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-g[#181818]"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-[#3BAEEBCC] rounded-md w-full py-2 px-4 placeholder:text-g[#181818] focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </motion.div>

        {/* Checkbox and Links */}
        <motion.div
          className="flex items-center justify-between text-sm text-gray-500"
          variants={childVariants}
        >
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 text-blue-500" />
            Remember me
          </label>
          <a href="#" className="hover:underline text-[#1B73A2]">
            Forgot Password?
          </a>
        </motion.div>

        {/* Login Button */}
        <motion.button
          className="bg-[#3BAEEB] text-white w-full py-3 rounded-md hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={childVariants}
        >
          Log In
        </motion.button>

        {/* Footer */}
        <motion.p
          className="text-sm font-md text-center text-gray-500"
          variants={childVariants}
        >
          Don't have an account?{" "}
          <Link
            href="./SignUp"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
