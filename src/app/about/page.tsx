"use client";

import React from "react";
import { FaUserFriends, FaRocket, FaTasks, FaChartLine } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <main className="bg-[#0C0C0C] text-white py-20 px-6 md:px-16">
      {/* About Header */}
      <div className="relative text-center mb-16">
        <h2 className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E67E22] px-6 py-2 text-white font-semibold rotate-[-5deg] tracking-wider shadow-md">
          ABOUT ME
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C42] to-[#FF3C83]">
            Building Beautiful Web Experiences
          </span>
          <br />
          <span className="text-[#FAD02E]">with Creativity & Precision</span>
        </h1>
      </div>

      {/* About Text + Stats */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 text-gray-300 leading-relaxed">
          <p className="text-lg mb-6">
            I’m <span className="text-[#FF8C42] font-semibold">Iqra Khan</span>, a dedicated{" "}
            <span className="text-[#FAD02E] font-medium">Frontend Developer</span> who loves turning
            creative ideas into interactive digital experiences.
          </p>

          <p className="text-lg mb-6">
            I focus on crafting responsive, modern, and user-friendly web applications with
            attention to design detail and code efficiency. I bring together functionality,
            performance, and visual appeal for seamless user experiences.
          </p>

          <p className="text-lg">
            My expertise includes{" "}
            <span className="text-[#FF8C42] font-semibold">Next.js</span>,{" "}
            <span className="text-[#FF8C42] font-semibold">React</span>, and{" "}
            <span className="text-[#FF8C42] font-semibold">Tailwind CSS</span>, with strong command
            over HTML, CSS, and TypeScript.
          </p>

          <div className="mt-8">
            <div className="flex items-center gap-3 text-[#34d399] font-medium">
              <input type="checkbox" checked readOnly className="accent-[#34d399] w-5 h-5" />
              <span>Frontend Development</span>
            </div>
          </div>
        </div>

        {/* Right Section — Stats */}
        <div className="flex-1 grid grid-cols-2 gap-8 text-center">
          <div>
            <FaUserFriends className="text-4xl mx-auto text-[#facc15] drop-shadow-sm mb-2" />
            <h3 className="text-2xl font-bold">15+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div>
            <FaChartLine className="text-4xl mx-auto text-[#34d399] drop-shadow-sm mb-2" />
            <h3 className="text-2xl font-bold">1+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div>
            <FaTasks className="text-4xl mx-auto text-[#fb7185] drop-shadow-sm mb-2" />
            <h3 className="text-2xl font-bold">15+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div>
            <FaRocket className="text-4xl mx-auto text-[#60a5fa] drop-shadow-sm mb-2" />
            <h3 className="text-2xl font-bold">5+</h3>
            <p className="text-gray-400">Websites Launched</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

// "use client";
// import React from "react";
// import { FaUserFriends, FaRocket, FaTasks, FaChartLine } from "react-icons/fa";

// const About: React.FC = () => {
//   return (
//     <main className="bg-[#0D0D0D] text-white py-20 px-6 md:px-16">
//       {/* About Header */}
//       <div className="relative text-center mb-16">
//         <h2 className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#D35400] px-6 py-2 text-white font-semibold rotate-[-6deg] tracking-wider">
//           ABOUT ME
//         </h2>
//         <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-10">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
//             Crafting Web Applications
//           </span>
//           <br />
//           <span className="text-[#F5B041]">with Passion & Precision</span>
//         </h1>
//       </div>

//       {/* About Text + Stats */}
//       <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
//         {/* Left Section */}
//         <div className="flex-1 text-gray-300 leading-relaxed">
//           <p className="text-lg mb-6">
//             I'm <span className="text-orange-400 font-semibold">Iqra Khan</span>, a passionate{" "}
//             <span className="text-[#F5B041] font-medium">Front-End Developer</span> skilled in HTML,
//             CSS, and TypeScript/JavaScript.
//           </p>

//           <p className="text-lg mb-6">
//             I excel at transforming creative designs into interactive, user-friendly web pages,
//             demonstrating a deep understanding of modern web technologies. I write clean and
//             efficient code that maintains a perfect balance between functionality and aesthetics,
//             ensuring a seamless user experience.
//           </p>

//           <p className="text-lg">
//             I specialize in building responsive, high-performance, and modern web products using{" "}
//             <span className="text-orange-400 font-semibold">Next.js</span> and{" "}
//             <span className="text-orange-400 font-semibold">Tailwind CSS</span>.
//           </p>

//           <div className="mt-8">
//             <div className="flex items-center gap-3 text-blue-400 font-medium">
//               <input type="checkbox" checked readOnly className="accent-blue-500 w-5 h-5" />
//               <span>Frontend Development</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section — Stats */}
//         <div className="flex-1 grid grid-cols-2 gap-8 text-center">
//           <div>
//             <FaUserFriends className="text-4xl mx-auto text-yellow-400 mb-2" />
//             <h3 className="text-2xl font-bold">15+</h3>
//             <p className="text-gray-400">Satisfied Clients</p>
//           </div>
//           <div>
//             <FaChartLine className="text-4xl mx-auto text-green-400 mb-2" />
//             <h3 className="text-2xl font-bold">1+</h3>
//             <p className="text-gray-400">Years of Experience</p>
//           </div>
//           <div>
//             <FaTasks className="text-4xl mx-auto text-pink-400 mb-2" />
//             <h3 className="text-2xl font-bold">15+</h3>
//             <p className="text-gray-400">Completed Projects</p>
//           </div>
//           <div>
//             <FaRocket className="text-4xl mx-auto text-red-400 mb-2" />
//             <h3 className="text-2xl font-bold">5+</h3>
//             <p className="text-gray-400">Websites Launched</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default About;


