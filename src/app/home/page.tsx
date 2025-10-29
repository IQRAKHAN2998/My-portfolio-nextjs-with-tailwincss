import Image from "next/image";
// import Wrapper from "@/components/wrapper/page";
import Cv from "../cv/cv";

export default function Home() {
  return (
    // <Wrapper>
      <section className="bg-[#0e0b16] text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-10">

          {/* Left Side */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              I am <span className="text-[#E0A96D]">Iqra</span>
            </h1>

            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
              Web Developer
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
              I specialize in building scalable, high-performance web applications using
              <span className="text-[#E0A96D] font-medium"> Next.js, Tailwind CSS, and Sanity CMS</span>.
              With a keen eye for clean UI and efficient development, I focus on creating seamless digital
              experiences. My goal is to contribute to impactful projects, optimize user experiences,
              and inspire aspiring developers.
            </p>

            <div className="pt-4">
              <Cv />
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative rounded-2xl overflow-hidden border-4 border-[#E0A96D] shadow-[0_0_40px_rgba(224,169,109,0.4)]">
              <Image
                src="/portfoliopic.jpg"
                alt="Ayesha"
                width={350}
                height={350}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    // </Wrapper>
  );
}

// import Image from "next/image";
// import Wrapper from "@/components/wrapper/page";
// import Cv from "../cv/cv";

// export default function Home() {
//   return (
//     <Wrapper>
//       <section className="bg-[#D7CCC8] py-10"> {/* Light Brown Background */}
//         <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between px-6 md:px-20 gap-10">

//           {/* Left Side */}
//           <div className="flex-1 text-center sm:text-left">
//             <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4E342E] mb-4 animate-in">
//               Hi, I am IQRA KHAN
//             </h1>
//             <h2 className="text-xl sm:text-3xl font-semibold text-[#5D4037] animate-pulse">
//               I am a Front-end Developer
//             </h2>

//             <div className="mt-6">
//               <Cv />
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="flex-1 flex justify-center sm:justify-end">
//             <Image
//               src="/mypic.jpg"
//               alt="mypic"
//               width={250}
//               height={250}
//               className="rounded-full border-4 border-[#6D4C41] object-cover shadow-lg"
//             />
//           </div>

//         </div>
//       </section>

//     </Wrapper>
//   )
// }