import Link from "next/link"

export default function About() {
    return (
        <main className="bg-[#A1887F] text-white">
            {/* about me */}
            <div className="mt-70 sm:mt-20 py-20">
                <h1 className="font-bold text-3xl text-center">About Me</h1>
            </div>

            <div className="flex items-center space-x-8 flex-col sm:flex-row  ">

                {/* <div>
                    <Image src="/images.jpeg" alt="aboutpic" width={400} height={300} className="w-200 h-300 sm:w-500 h-400" ></Image>
                </div> */}

                <div className="m-20">
                    <p className="mt-4 ">

                        I am a skilled front-end developer with a strong command of HTML, CSS, and TypeScript/JavaScript. <br />
                        I excel at turning creative designs into interactive and user-friendly web pages, <br />
                        showcasing a deep understanding of modern web technologies. <br />
                        I write clean and efficient code to maintain a perfect balance between functionality and aesthetics, <br />
                        ensuring an exceptional user experience. <br />
                        I build responsive and modern products using Next.js and Tailwind CSS.


                    </p>


                    <ol className="list-disc space-y-2 m-10 mr-5">
                        <li >Name :  Iqra khan</li>
                        <li>Email : iqrakhan2998@gmail.com</li>
                        <li>03230207681</li>
                        <li>LinkedIn :
                            <Link href="https://www.linkedin.com/in/iqra-khan2998" target="_blank" rel="noopener noreferrer" >
                                <label htmlFor="linkedin" className="font-bold text-blue-800 underline"> IQRA KHAN </label>
                            </Link>
                        </li>
                    </ol>
                </div>


            </div>
            {/* <div className="text-center p-5 font-bold">
                <p>
                    I am currently learning Next.js, and I have a keen interest in artificial intelligence (AI) and cloud computing. <br />
                    My goal is to become a full stack developer in the future, equipped with the skills necessary to build dynamic web applications <br />
                    and leverage advanced technologies. I believe that combining my knowledge in web development with AI and cloud solutions will enable me to create innovative applications
                    that can solve real-world problems.</p>
            </div> */}


        </main>
    )
}