// import { useState } from "react";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import { FaCheck } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
// import { IoLockClosed } from "react-icons/io5";

// export default function Resume() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (id) => {
//     setActiveDropdown(activeDropdown === id ? null : id);
//   };

//   let cards = [
//     {
//       id: 1,
//       name: "Jacob Jones",
//       position: "Front-End Developer",
//       email: "JohnDavid@gmail.com",
//       phone: "03526272822",
//       city: "City, State",
//       experienceLevel: "10",
//       skillSets: "09",
//       educationLevel: "08",
//     },
//     {
//       id: 2,
//       name: "Jacob Jones",
//       position: "Front-End Developer",
//       email: "JohnDavid@gmail.com",
//       phone: "03526272822",
//       city: "City, State",
//       experienceLevel: "10",
//       skillSets: "09",
//       educationLevel: "08",
//     },
//     {
//       id: 3,
//       name: "Jacob Jones",
//       position: "Front-End Developer",
//       email: "JohnDavid@gmail.com",
//       phone: "03526272822",
//       city: "City, State",
//       experienceLevel: "10",
//       skillSets: "09",
//       educationLevel: "08",
//     },
//     {
//       id: 4,
//       name: "Jacob Jones",
//       position: "Front-End Developer",
//       email: "JohnDavid@gmail.com",
//       phone: "03526272822",
//       city: "City, State",
//       experienceLevel: "10",
//       skillSets: "09",
//       educationLevel: "08",
//     },
//     {
//       id: 5,
//       name: "Jacob Jones",
//       position: "Front-End Developer",
//       email: "JohnDavid@gmail.com",
//       phone: "03526272822",
//       city: "City, State",
//       experienceLevel: "10",
//       skillSets: "09",
//       educationLevel: "08",
//     },
//     {
//       id: 6,
//       name: "Jacob Jones",
//       position: "Front-End Developer",
//       email: "JohnDavid@gmail.com",
//       phone: "03526272822",
//       city: "City, State",
//       experienceLevel: "10",
//       skillSets: "09",
//       educationLevel: "08",
//     },
//   ];
//   let array = [
//     {
//       id: 1,
//       item: "CONTENT",
//       percent: "90%",
//       itemInnerContent: [
//         { iconSrc: "", text: "ATS Parse Rate" },
//         { iconSrc: <FaCheck />, text: "Qualifying Impact" },
//         { iconSrc: <ImCross />, text: "Repetition" },
//         { iconSrc: <IoLockClosed />, text: "Spelling & Grammar" },
//         { iconSrc: <IoLockClosed />, text: "Summarize Resume" },
//       ],
//     },
//     {
//       id: 2,
//       item: "FORMAT & BREVITY",
//       percent: "84%",
//       itemInnerContent: [
//         { iconSrc: "", text: "ATS Parse Rate" },
//         { iconSrc: <FaCheck />, text: "Qualifying Impact" },
//         { iconSrc: <ImCross />, text: "Repetition" },
//         { iconSrc: <IoLockClosed />, text: "Spelling & Grammar" },
//         { iconSrc: <IoLockClosed />, text: "Summarize Resume" },
//       ],
//     },
//     {
//       id: 3,
//       item: "STYLE",
//       percent: "40%",
//       itemInnerContent: [
//         { iconSrc: "", text: "ATS Parse Rate" },
//         { iconSrc: <FaCheck />, text: "Qualifying Impact" },
//         { iconSrc: <ImCross />, text: "Repetition" },
//         { iconSrc: <IoLockClosed />, text: "Spelling & Grammar" },
//         { iconSrc: <IoLockClosed />, text: "Summarize Resume" },
//       ],
//     },
//     {
//       id: 4,
//       item: "SECTIONS",
//       percent: "40%",
//       itemInnerContent: [
//         { iconSrc: "", text: "ATS Parse Rate" },
//         { iconSrc: <FaCheck />, text: "Qualifying Impact" },
//         { iconSrc: <ImCross />, text: "Repetition" },
//         { iconSrc: <IoLockClosed />, text: "Spelling & Grammar" },
//         { iconSrc: <IoLockClosed />, text: "Summarize Resume" },
//       ],
//     },
//     {
//       id: 5,
//       item: "SKILLS",
//       percent: "68%",
//       itemInnerContent: [
//         { iconSrc: "", text: "ATS Parse Rate" },
//         { iconSrc: <FaCheck />, text: "Qualifying Impact" },
//         { iconSrc: <ImCross />, text: "Repetition" },
//         { iconSrc: <IoLockClosed />, text: "Spelling & Grammar" },
//         { iconSrc: <IoLockClosed />, text: "Summarize Resume" },
//       ],
//     },
//   ];

//   return (
//     <div className="flex py-[3%] px-[4%] gap-4 rounded-2xl ">
//       {/* First Container (25% Width) */}
//       <div className="w-1/4 p-4 text-center h-fit items-center flex flex-col border border-silver rounded-2xl">
//         <div className="space-y-6">
//           <div className="space-y-4">
//             <h2 className="text-2xl font-md">Resume Score</h2>
//             <img src="./Mask group (2).png" />
//             <h3 className="text-xl bg-gradient-to-r from-[#3BAEEB] via-[#046b38] to-[#aed32b] bg-clip-text text-transparent">
//               92/100
//             </h3>
//             <h4 className="text-lg text-gray-600">24 issues</h4>
//             <hr className="my-4 border-gray-300" />
//           </div>

//           <div className="space-y-6">
//             {array.map((item) => (
//               <div key={item.id} className="text-left">
//                 <div
//                   className="flex gap-6 justify-between items-center cursor-pointer"
//                   onClick={() => toggleDropdown(item.id)}
//                 >
//                   <h5 className="text-sm font-medium text-[#47445AE5]">
//                     {item.item}
//                   </h5>
//                   <div className="flex gap-4">
//                     <span
//                       className={`font-semibold h-fit text-sm rounded-3xl px-2 ${
//                         parseInt(item.percent) < 50
//                           ? "text-[#D94A5E] bg-[#FFCDD4]"
//                           : parseInt(item.percent) < 70
//                           ? "text-[#D89745] bg-[#FFE0B9]"
//                           : "text-[#249A71] bg-[#CDF0E4]"
//                       }`}
//                     >
//                       {item.percent}
//                     </span>
//                     {activeDropdown === item.id ? (
//                       <IoIosArrowUp size={20} className="text-blue-500" />
//                     ) : (
//                       <IoIosArrowDown size={20} className="text-blue-500" />
//                     )}
//                   </div>
//                 </div>
//                 {activeDropdown === item.id && (
//                   <div className="mt-2 space-y-2">
//                     {item.itemInnerContent.map((innerItem, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center space-x-4 p-2"
//                       >
//                         {innerItem.iconSrc ? (
//                           <span
//                             className={`${
//                               innerItem.iconSrc.type === FaCheck
//                                 ? "text-green-500"
//                                 : innerItem.iconSrc.type === ImCross
//                                 ? "text-red-500"
//                                 : ""
//                             }`}
//                           >
//                             {innerItem.iconSrc}
//                           </span>
//                         ) : (
//                           <span className="w-4 h-4"></span> // Placeholder for no icon
//                         )}
//                         <span className="text-sm text-[#47445AE5]">
//                           {innerItem.text}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Second Container (75% Width) */}
//       <div className="w-3/4  rounded">
//         <div className="flex gap-4 items-center mb-6">
//           <h2 className="text-3xl font-md">All Candidates</h2>
//           <span className="text-xl  rounded-2xl text-gray-800 bg-[#3BAEEB4D]">
//             20
//           </span>
//         </div>
//         <div className="grid grid-cols-1 bg-[#e1f2fc] px-6 py-10  lg:grid-cols-2 gap-3">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className="p-4 flex gap-4 h-fit bg-white shadow-lg rounded-lg space-y-4"
//             >
//               <div className="flex flex-col justify-between">
//                 <div className="space-y-2 ">
//                   <h3 className="text-lg font-semibold text-[#3BAEEB]">
//                     {card.name}
//                   </h3>
//                   <h5 className="text-xs text-[#181818] ">{card.position}</h5>
//                 </div>
//                 <div className="space-y-1 text-xs  text-[#4A525D]">
//                   <p>{card.email}</p>
//                   <p>{card.phone}</p>
//                   <p>{card.city}</p>
//                 </div>
//               </div>
//               {/* Tags */}
//               <div className="flex space-x-2">
//                 <span className="bg-[#18921533] text-[#189215] text-[8px] px-2 py-1 rounded-3xl font-bold w-fit h-fit">
//                   Recommended
//                 </span>
//                 <span className="bg-[#EA433533] text-[#EA4335] text-[8px] px-2 py-1 rounded-3xl font-bold w-fit h-fit">
//                   Switcher
//                 </span>
//               </div>

//               {/* Additional Details Section */}
//               <div className="grid grid-rows-3 gap-2">
//                 <div>
//                   <h3 className="text-sm">
//                     <span className="text-[#3BAEEB] text-sm font-semibold">
//                       {card.experienceLevel}
//                     </span>
//                     <span className="text-[8px] text-[#858585] ">/12</span>
//                   </h3>
//                   <div className="flex flex-col">
//                     <span className="text-[10px] text-[#9B9B9B]">
//                       Experience
//                     </span>
//                     <span className="text-[8px] text-[#858585]">level</span>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-sm">
//                     <span className="text-[#325098] text-sm font-semibold">
//                       {card.skillSets}
//                     </span>
//                     <span className="text-[8px] text-[#858585]">/13</span>
//                   </h3>
//                   <div className="flex flex-col">
//                     <span className="text-[10px] text-[#9B9B9B]">
//                       Skill Sets
//                     </span>
//                     <span className="text-[8px] text-[#858585]">level</span>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-sm">
//                     <span className="text-[#325098] text-sm font-semibold">
//                       {card.educationLevel}
//                     </span>
//                     <span className="text-[8px] text-[#858585]">/10</span>
//                   </h3>
//                   <div className="flex flex-col">
//                     <span className="text-[10px] text-[#9B9B9B]">
//                       Education
//                     </span>
//                     <span className="text-[8px] text-[#858585]">level</span>
//                   </div>
//                 </div>
//               </div>
//               {/* 4th Section (Circular Loader Divs) */}
//               <div className="flex space-x-4 justify-center">
//                 <div className="w-12 h-12 border-4 border-blue-500 rounded-full flex items-center justify-center">
//                   <div className="w-6 h-6 border-4 border-green-500 rounded-full"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
