import Image from "next/image";
import Wrapper from "@/components/wrapper/page";
import Cv from "../cv/cv";

export default function Home() {
  return (
    <Wrapper>
      <section>
        <div  className= "bg-[url(/pinkbg.jpeg)] bg-no-repeat bg-cover max-w-full max-h-screen flex justify-around flex-col-reverse sm:flex-row items-center md:gap-72">
          {/* leftside */}
          <div className=" pt-10 pl-10 font-bold text-black text-2xl sm:text-4xl flex-1">
            <h1 className="animate-in ">  Hi, I am IQRA KHAN</h1>
            <h2 className="text-3lg sm:text-4xl animate-pulse "> I am a Front-end Developer</h2>

            <div className="my-5 ">

               <Cv />
              
            </div>
          </div>
          
          {/* rightside */}
          <div className="flex-1 py-8">
            <Image src="/mypic.jpg" alt="mypic" width={200} height={200} className="border rounded-full w-300 h-100"></Image>
          </div>

        </div>
      </section>
      </Wrapper>
        )
}