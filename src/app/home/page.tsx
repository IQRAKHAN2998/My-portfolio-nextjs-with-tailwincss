import Image from "next/image";
import Wrapper from "@/components/wrapper/page";
import Cv from "../cv/cv";

export default function Home() {
  return (
    <Wrapper>
      <section className="bg-[#D7CCC8] py-10"> {/* Light Brown Background */}
        <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between px-6 md:px-20 gap-10">

          {/* Left Side */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4E342E] mb-4 animate-in">
              Hi, I am IQRA KHAN
            </h1>
            <h2 className="text-xl sm:text-3xl font-semibold text-[#5D4037] animate-pulse">
              I am a Front-end Developer
            </h2>

            <div className="mt-6">
              <Cv />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center sm:justify-end">
            <Image
              src="/mypic.jpg"
              alt="mypic"
              width={250}
              height={250}
              className="rounded-full border-4 border-[#6D4C41] object-cover shadow-lg"
            />
          </div>

        </div>
      </section>

    </Wrapper>
  )
}