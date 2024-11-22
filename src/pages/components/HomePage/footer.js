import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaSkype } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.3, duration: 0.6 },
    }),
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.footer
      className="bg-white shadow-[0_-4px_10px_0_rgba(0,0,0,0.1)] px-[5%] py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Footer Content */}
      <div className="flex flex-col justify-between lg:flex-row gap-6">
        {/* Column 1 */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeft}
        >
          <img
            src="blacklogo.png"
            className="text-blue-500"
            width={130}
            height={130}
            alt="Logo"
          />
          <p className="text-gray-400 w-[500px]">
            Upload your resume and let our advanced tools enhance it for you.
            Tailor your resume to fit your dream job effortlessly.
          </p>
        </motion.div>

        {/* Column 2 */}
        <motion.div className="">
          <div className="space-x-6">
            {["Home", "Features", "How It Works", "FAQs"].map((item, index) => (
              <motion.span
                key={index}
                className="cursor-pointer hover:underline text-gray-600"
                whileHover={{ scale: 1.1, color: "#3BAEEB" }}
              >
                {item}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-6 justify-start items-center">
            {/* Divider */}
            <motion.hr
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "290px", opacity: 1 }}
              transition={{ duration: 1 }}
              className="my-8 border-2 border-[#3BAEEB] w-[290px]"
            />
            {/* Social Icons */}
            <motion.div className="flex justify-center space-x-6">
              {[
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaFacebook, label: "Facebook" },
                { icon: FaSkype, label: "Skype" },
              ].map((social, index) => (
                <motion.a
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  key={index}
                  href="#"
                  className="text-black hover:text-[#3BAEEB] transition duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
