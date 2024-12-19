import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function SignupChat() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  let [expand, setexpand] = useState(false); // New state to toggle expanding behavior
  const steps = [
    {
      item: "Your Full Name",
      question:
        "Hi there! Let’s get to know each other first.\nWhat’s your name?",
      label: "My Name is...",
      key: "name",
    },
    {
      item: "Your Company Name",
      question: `Nice to meet you ${
        responses.name || "there"
      }.\nWhat’s your Company Called?`,
      label: "I’m working at...",
      key: "company",
    },
    {
      item: "Types of business",
      question: "What is the type of your business?",
      label: "Describe your business...",
      key: "business",
    },
    {
      item: "Contact Info",
      question: "Contact details?",
      label: "Enter your contact details...",
      key: "contact",
    },
    {
      item: "Setup Your Account",
      question: "Set up your account.",
      label: "",
      key: "setup",
    },
  ];

  const handleInputChange = (e) => {
    setResponses({
      ...responses,
      [steps[currentStep].key]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      router.push("./SignUp");
    } else if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row  justify-between h-[917px] gap-4">
      {/* Sidebar */}
      <div
        className={` ${
          expand ? "lg:w-full" : "lg:w-[25%]"
        } transition-[width] duration-[1500ms] w-[95%] flex h-[880px] flex-col justify-between bg-gradient-to-r from-[#3BAEEB] to-[#0F5D86] p-8 m-4 text-white rounded-lg`}
      >
        <div className="space-y-28 ">
          <img src="/logo.png" alt="Logo" className="mb-8 w-3/4" />

          <div className="">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex text-[24px] lg:text-[18px] items-start space-x-4 ${
                  index <= currentStep ? "text-white" : "text-[#FFFFFF33]"
                }`}
              >
                <div className=" flex flex-col justify-center ">
                  <div>
                    <div
                      className={`p-1 rounded-full flex items-center justify-center border-2 ${
                        index <= currentStep
                          ? "border-white"
                          : "border-[#FFFFFF33]"
                      }`}
                    >
                      <div
                        className={`p-[6px] rounded-full space-x-4 ${
                          index <= currentStep ? "bg-white" : "bg-[#FFFFFF33]"
                        }`}
                      ></div>
                    </div>
                    <div
                      className={`py-[14px] border-r-2 mr-[11px] border-dashed m-2  ${
                        index <= currentStep
                          ? "border-white"
                          : "border-[#FFFFFF33]"
                      } ${index == steps.length - 1 ? "border-none" : ""}`}
                    ></div>
                  </div>
                </div>
                <span>{step.item}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[30px] lg:text-[22.4px]">
            More Than <span className="font-bold">14,000</span> Expert Use{" "}
            <span className="font-bold">Xpert Assistant</span>
          </h3>
          <p className="text-[15px] lg:text-[8.5px]">
            {" "}
            Xpert Assistant sets the standard in CV analysis.
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full  relative lg:w-3/4  items-start ">
        <div className="flex items-start">
          {/* Back Button */}
          {currentStep >= 0 && (
            <button
              onClick={handleBack}
              className="text-[#3BAEEB] mt-10 bg-white rounded-full  shadow-md p-3 mb-8 flex items-center gap-2"
            >
              <IoIosArrowBack
                onClick={() => steps[currentStep] == 0 && setexpand(true)}
                size={32}
              />
            </button>
          )}
          {/* shade box */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>
        </div>

        {/* Chat Content */}
        <div className="py-8 pl-16 px-2 w-full rounded-lg space-y-6">
          {/* Display previous responses */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -currentStep * 100 }} // Scroll animation
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-lg overflow-hidden text-gray-700"
          >
            {steps.slice(0, currentStep).map((step, index) => (
              <div key={index} className="mt-4">
                <div className="text-lg flex items-center font-normal gap-4">
                  <img src="/client.png" />
                  <p className="whitespace-pre-wrap shadow-md shadow-[#7b8a9c3a] px-6 py-4 rounded-xl h-fit">
                    {step.question}
                  </p>
                </div>
                <div className="text-lg flex items-center justify-end font-normal gap-4">
                  <p className="whitespace-pre-wrap shadow-md text-white bg-[#3BAEEB] shadow-[#7b8a9c3a] px-6 py-4 rounded-xl h-fit">
                    {steps[currentStep].label.replace("...", "") +
                      " " +
                      (responses[step.key] || "")}
                  </p>
                  <img src="/client.png" />
                </div>
              </div>
            ))}
          </motion.div>
          {/* Current Question */}
          <motion.div className="text-lg flex items-center  gap-4">
            <img src="/client.png" />
            <p className="whitespace-pre-wrap shadow-md shadow-[#7b8a9c3a] px-6 py-4 rounded-xl h-fit">
              {steps[currentStep].question}
            </p>
          </motion.div>
          {/* Input Field */}
          <div className="sticky w-full ml-16  left-0">
            {" "}
            <div className="flex  w-full flex-col gap-6">
              <label className="text-[#9D9D9D] ">
                {steps[currentStep].label}
              </label>
              {currentStep < steps.length - 1 ? (
                <input
                  type="text"
                  placeholder={steps[currentStep].key}
                  value={responses[steps[currentStep].key] || ""}
                  onChange={handleInputChange}
                  className="w-[90%] font-md border-b-2 border-[#3BAEEB] text-[#3BAEEB] placeholder:font-normal  focus:outline-none  "
                />
              ) : (
                <p className="text-gray-600">Setup Your Account</p>
              )}
            </div>
            {/* Buttons */}
            <div className="flex mt-10 gap-2">
              <button
                onClick={handleBack}
                className={`py-2 px-10 border-2 bg-transparent border-[#F0F0F0] text-black rounded-lg hover:bg-[#e7f1fd27] ${
                  currentStep === 0 ? "hidden" : ""
                }`}
              >
                Back
              </button>
              <motion.button
                onClick={handleNext}
                className="py-2 px-10 border-2 bg-transparent border-[#F0F0F0] text-black rounded-lg hover:bg-[#e7f1fd27]"
              >
                {currentStep < steps.length - 1 ? "Next" : "Finish"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
