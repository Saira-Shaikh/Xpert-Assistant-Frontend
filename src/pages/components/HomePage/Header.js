import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Reusable Button Component
  const NavButton = ({ children, className, onClick }) => (
    <motion.button
      onClick={onClick}
      className={`px-6 py-2 font-semibold rounded-sm transition ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );

  return (
    <header>
      <div className="bg-gradient-to-br from-[#3BAEEB] px-[5%] to-[#0F5D86] h-fit pb-64 rounded-b-3xl">
        {/* Navbar */}
        <nav className="flex pt-8 justify-between items-center">
          {/* Logo */}
          <img src="logo.svg" width={130} height={130} />

          {/* Desktop Navbar (visible on larger screens) */}
          <div className="hidden md:flex space-x-2">
            <Link href="./components/SignUp">
              <NavButton className="border border-white text-white hover:bg-white hover:text-[#3BAEEB]">
                Sign Up
              </NavButton>
            </Link>
            <Link href="./components/Login">
              <NavButton className="bg-[#3BAEEB] text-white hover:bg-lightBlue-500">
                Log In
              </NavButton>
            </Link>
          </div>

          {/* Hamburger Icon (visible on mobile screens) */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </nav>

        {/* Sidebar (opens when hamburger menu is clicked) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 70 }}
              className="fixed inset-y-0 right-0 w-[75%] bg-white text-black z-50 shadow-lg md:hidden"
            >
              <div className="flex justify-end p-4">
                <button onClick={toggleMenu} className="text-[#3BAEEB]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center space-y-6 text-white text-xl">
                <Link className="w-[90%]" href="./components/SignUp">
                  <NavButton className="border  border-[#3BAEEB] w-full text-[#3BAEEB] hover:bg-white hover:text-[#3BAEEB]">
                    Sign Up
                  </NavButton>
                </Link>
                <Link className="w-[90%]" href="./components/Login">
                  <NavButton className="bg-[#3BAEEB] w-full text-white hover:bg-blue-500">
                    Log In
                  </NavButton>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div
          className={`mt-32 flex flex-col justify-center items-center text-center text-white ${
            isMenuOpen ? "filter brightness-75" : ""
          }`}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-extralight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hire Worriers <span className="font-bold">10x faster</span> Our
          </motion.h1>
          <motion.div
            className="flex gap-2 justify-center mt-4"
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
            className="mt-4 text-sm sm:text-base md:text-lg lg:text-[24px] font-[300] w-3/4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Train it once with your team profiles and it will score applicants
            on your unique scale.
          </motion.p>
          <motion.button
            className="mt-6 bg-[#3BAEEB] text-white px-4 py-1 md:px-8 md:py-3 rounded-sm hover:bg-gradient-to-b hover:duration-1000 hover:shadow-md hover:from-[#3BAEEB] hover:to-[#0F5D86] transition-all font-bold"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Analyze Resume
          </motion.button>
        </div>
      </div>

      {/* Hero Image */}
      <motion.img
        src="./Dashboard.png"
        className="md:-mt-64 -mt-[180px] lg:-mt-[220px] w-full object-contain"
        alt="Dashboard Illustration"
        initial={{ scale: 0.9, rotateX: 120 }}
        whileInView={{ scale: 1, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </header>
  );
}
