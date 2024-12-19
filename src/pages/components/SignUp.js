import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignUp() {
  let [shrink, setShrink] = useState(false); // New state to toggle shrinking behavior

  return (
    <div className="flex bg-gray-100 p-6 min-h-screen items-center justify-start">
      {/* Main Rounded Div */}
      <div
        className={`relative bg-gradient-to-r from-[#3BAEEB] to-[#0F5D86] 
          ${shrink ? "w-[25%]" : "w-full"} 
          transition-[width] overflow-hidden duration-[1500ms] rounded-3xl h-fit p-6 lg:p-10 shadow-lg`}
      >
        {/* First Div */}
        <div className="flex pt-6 items-center justify-between">
          <img src="/Logo.png" alt="Logo" className="mb-4 w-fit h-[35px]" />
          <Link href="./Login">
            <FaTimes
              className="text-[#3BAEEB] bg-white rounded-full p-2 text-[40px] cursor-pointer hover:scale-110 transition-transform shadow-lg"
              title="Close"
            />
          </Link>
        </div>

        {/* Second Div */}
        <div className="text-white mt-16 space-y-4">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[62px] font-extralight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hire Warriors <span className="font-bold">10x Faster</span> with Our
          </motion.h1>
          <motion.div
            className="flex gap-2 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-bold">
              AI
            </h1>
            <div className="px-2 flex items-center justify-center bg-white rounded-sm w-fit">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[58px] bg-gradient-to-r from-[#3BAEEB] to-[#0F5D86] bg-clip-text text-transparent font-bold p-2">
                Automated Solution
              </h2>
            </div>
          </motion.div>
          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg w-3/4 lg:w-[780px] lg:text-[24px] font-[300]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Train it once with your team profiles, and it will score applicants
            on your unique scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href={"./SignupChat"}
              onClick={() => setShrink(true)}
              className="mt-16 bg-[#3BAEEB] text-white px-6 py-3 md:px-8 md:py-4 rounded-md 
              hover:bg-gradient-to-b hover:duration-1000 shadow-md 
              hover:from-[#3BAEEB] hover:to-[#0F5D86] transition-all font-bold text-lg"
            >
              Sign Up
            </Link>
          </motion.div>
        </div>

        {/* Third Div */}
        <div className="w-full flex justify-end gap-4 mt-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <motion.div
              className="bg-[#FFFFFF42] rounded-xl shadow-lg w-full lg:w-[400px] p-6 space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white tracking-wider text-sm">
                Figma ipsum component variant main layer. Draft figma selection
                project create rotate create ellipse content. Content text
                content device stroke.
              </p>

              {/* Horizontal Section */}
              <div className="flex items-center gap-4">
                {/* Profile Image */}
                <img
                  src="/Profile.png"
                  alt="Bruce Wayne"
                  className="w-14 h-14 rounded-full object-cover"
                />
                {/* Profile Details */}
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Bruce Wayne
                  </h4>
                  <p className="text-sm text-white">
                    Been using it for 33 months
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="flex gap-2 justify-center w-full">
              <motion.div
                className="p-1 rounded-full bg-[#FFFFFF2E]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              ></motion.div>
              <motion.div
                className="px-4 py-1 rounded-3xl bg-[#FFFFFF]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              ></motion.div>
              <motion.div
                className="p-1 rounded-full bg-[#FFFFFF2E]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
