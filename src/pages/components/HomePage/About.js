import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const cards = [
    {
      id: 1,
      image: "./Ellipse 6.png",
      name: "John Wick",
      duration: "Been using it for 1 months",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      date: "2015 / January/ 01",
    },
    {
      id: 2,
      image: "./Ellipse 7.png",
      name: "Giga Chad",
      duration: "Been using it for 241 years",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      date: "2024 / April / 25",
    },
    {
      id: 3,
      image: "./Ellipse 8.png",
      name: "Bruce Wayne ",
      duration: "Been using it for 33 months",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      date: "2024 / May / 12",
    },
    {
      id: 4,
      image: "./Ellipse 9.png",
      name: "Anonymous",
      duration: "Been using it for ¿¿¿ months",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      date: "2023 / July / 04",
    },
    {
      id: 5,
      image: "./Ellipse 10.png",
      name: "Eric Cartman",
      duration: "Been using it for 4 months",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      date: "2023 / July / 04",
    },
    {
      id: 6,
      image: "./Ellipse 11.png",
      name: "Philip J. Fry",
      duration: "Been using it for 4 months",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      date: "2999 / December / 31",
    },
  ];

  return (
    <div className="px-4 md:px-[5%] py-8 space-y-6">
      {/* Headings */}

      <motion.h4
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[20px] md:text-[26px] font-medium text-center bg-gradient-to-r from-[#3BAEEB] to-[#0F5D86] bg-clip-text text-transparent"
      >
        Testimonials
      </motion.h4>
      <motion.h2
        initial={{ scale: 0.8, opacity: 0, x: 50 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl sm:text-3xl md:text-[48px] font-md text-center text-gray-800"
      >
        What They Say{" "}
        <span className="font-semibold text-[#3BAEEB]">About Us</span>
      </motion.h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {cards.map((card) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: card.id * 0.2 }}
            key={card.id}
            className="bg-white  rounded-2xl shadow-md pl-8 py-8 flex flex-col space-y-10 hover:bg-[#F0F9FE]"
          >
            <div className="flex items-center space-x-4">
              <img
                src={card.image}
                alt={`Card ${card.id}`}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-md text-[#303440]">{card.name}</h3>
                <p className="text-[18px]  text-[#B9B9B9]">{card.duration}</p>
              </div>
            </div>

            <div>
              <p className="text-[#6A7080]   text-[18px]">{card.details}</p>
            </div>

            <div>
              <span className="text-[18px] text-[#6A7080] ">{card.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
