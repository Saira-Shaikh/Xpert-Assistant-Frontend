import React from "react";
import { motion } from "framer-motion";
export default function Analyze() {
  const cards = [
    {
      id: "01",
      title: "Step 01",
      heading: "Upload Your Resume",
      description:
        "Easily drag and drop your resume into our upload box or select a file from your computer. We accept PDF and DOCX formats with a maximum file size of 2MB.",
      img: "./r1.png",
      reverse: false,
    },
    {
      id: "02",
      title: "Step 02",
      heading: "Automatic Analysis",
      description:
        "Our advanced AI-powered system analyzes your resume instantly. We review your content for key elements such as formatting, structure, keyword optimization, grammar, and spelling.",
      img: "./r2.png",
      reverse: true,
    },
    {
      id: "03",
      title: "Step 03",
      heading: "AI Evaluation Results",
      description:
        "Our AI system will start evaluating the candidate resumes against the ideal employee resume and the provided job description.",
      img: "./r3.png",
      reverse: false,
    },
  ];
  // Animation variants for the container
  const slideLeft = {
    initial: { opacity: 0, x: 150 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.3, stiffness: 100 },
    },
  };
  const slideRight = {
    initial: { opacity: 0, x: -150 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.3, stiffness: 100 },
    },
  };
  const slideUp = {
    initial: { opacity: 0, y: 150 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3, stiffness: 100 },
    },
  };
  const slideDown = {
    initial: { opacity: 0, y: -150 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3, stiffness: 100 },
    },
  };
  return (
    <div className="pb-8 px-4 md:px-[5%] space-y-8">
      {/* First Container */}
      <div>
        <motion.h3
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[20px] sm:text-[26px] md:text-xl font-medium mb-4 bg-gradient-to-r from-[#3BAEEB] to-[#0F5D86] bg-clip-text text-transparent text-center"
        >
          HOW TO START
        </motion.h3>
        <motion.h1
          initial={{ scale: 0.8, opacity: 0, x: 50 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-3xl md:text-5xl lg:text-[58px]  font-medium text-gray-800 mb-8 text-center"
        >
          Analyze Your Resume in{" "}
          <span className="text-[#3BAEEB]">3 Easy Steps</span>
        </motion.h1>

        {/* Cards Container */}
        <div className="space-y-6">
          {/* First Card */}
          <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg hover:scale-[102%]">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              variants={slideRight}
              className="bg-[#F0F9FE]  rounded-l-2xl pt-6 px-6 w-full md:w-1/2 relative"
            >
              <img
                src={cards[0].img}
                alt={`Card ${cards[0].id}`}
                className="object-contain mx-auto"
              />
              <button className="top-16 left-8 md:top-8 md:left-8 lg:top-6 lg:left-6 absolute bg-gradient-to-br from-[#3badeb2c] to-[#0f5c862a] text-black text-sm px-6 py-2 rounded-sm hover:bg-blue-200 transition">
                Resume
              </button>
              <button className="bottom-4 right-9 md:bottom-4 md:right-9 lg:bottom-6 lg:right-6 absolute bg-gradient-to-br from-[#3badeb2c] to-[#0f5c862a] text-black text-sm px-6 py-2 rounded-sm hover:bg-blue-200 transition">
                Upload
              </button>
            </motion.div>
            <div className="p-6  md:items-start items-center w-full lg:w-1/2 md:ml-6 space-y-2 flex flex-col justify-center">
              <motion.span
                initial="initial"
                whileInView="whileInView"
                variants={slideDown}
                className="text-[60px] text-center md:text-start sm:text-[120px] md:text-[186px] leading-[40px]  font-semibold md:leading-[125px]  text-[#3BAEEB1A]"
              >
                {cards[0].id}
              </motion.span>
              <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={slideLeft}
              >
                <h4 className="text-[20px] text-center lg:text-start sm:text-[26px] font-semibold bg-gradient-to-r from-[#3badeb9c] to-[#0f5c869c] bg-clip-text text-transparent">
                  {cards[0].title}
                </h4>
                <h3 className="text-[20px] text-center md:text-start sm:text-[30px] font-medium text-gray-800 leading-6 pb-4">
                  {cards[0].heading}
                </h3>
                <p className="text-gray-600 text-center md:text-start text-sm sm:text-base">
                  {cards[0].description}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Second and Third Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.slice(1).map((card) => (
              <div
                key={card.id}
                className={`flex flex-col hover:scale-[102%] ${
                  card.reverse ? "md:flex-col-reverse" : ""
                } bg-white rounded-2xl shadow-lg`}
              >
                <motion.div
                  initial="initial"
                  whileInView="whileInView"
                  variants={card.id == "02" ? slideUp : slideDown}
                  className={`bg-[#F0F9FE] ${
                    card.id === "02" ? "rounded-b-2xl" : "rounded-t-2xl"
                  } p-6`}
                >
                  <img
                    src={card.img}
                    alt={`Card ${card.id}`}
                    className="object-contain mx-auto"
                  />
                </motion.div>
                <div className="p-6 space-y-2 flex flex-col justify-center ">
                  <motion.span
                    initial="initial"
                    whileInView="whileInView"
                    variants={card.id == "02" ? slideRight : slideLeft}
                    className={`text-[60px] text-center md:text-start sm:text-[120px] md:text-[186px] leading-[40px]  font-semibold md:leading-[125px]    text-[#3BAEEB1A]]  ${
                      card.id === "03"
                        ? "text-center pr-4  md:text-left lg:text-left"
                        : "text-center pl-4  md:text-right lg:text-right"
                    } font-semibold leading-[125px] text-[#3BAEEB1A]`}
                  >
                    {card.id}
                  </motion.span>

                  <motion.div
                    initial="initial"
                    whileInView="whileInView"
                    variants={card.id == "02" ? slideLeft : slideRight}
                    className={`text-center ${
                      card.id === "03"
                        ? "md:text-right  pr-4"
                        : "md:text-left pl-4"
                    }`}
                  >
                    <h4
                      className={` text-[20px] text-center  sm:text-[26px] font-semibold bg-gradient-to-r from-[#3badeb9c] to-[#0f5c869c] bg-clip-text text-transparent  ${
                        card.id === "03" ? "md:text-right  " : "md:text-left"
                      }`}
                    >
                      {card.title}
                    </h4>
                    <h3
                      className={`text-[20px]   sm:text-[30px] font-medium  text-gray-800 leading-6 pb-4  ${
                        card.id === "03" ? "md:text-end" : "md:text-left"
                      }`}
                    >
                      {card.heading}
                    </h3>
                    <p
                      className={`text-gray-600 text-center md:text-start text-sm sm:text-base ${
                        card.id === "03" ? "md:text-end" : "md:text-left"
                      }`}
                    >
                      {card.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="space-y-4 py-12 px-4 sm:px-8 bg-gradient-to-r from-[#3BAEEB] to-[#0F5D86] text-white rounded-xl shadow-md text-center"
      >
        <h2 className="text-xl sm:text-[40px] md:text-[60px] font-light">
          Get your candidates <span className="font-bold">Sorted</span>
        </h2>
        <hr className="border-gray-300 mx-auto w-[60%] sm:w-[300px]" />
        <p className="text-sm sm:text-lg font-extralight text-center max-w-[750px] mx-auto">
          No need to go through stacks of resumes. We will give you
          high-potential candidates quickly.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-[#3BAEEB] text-white font-medium py-2 px-6 rounded-lg "
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
