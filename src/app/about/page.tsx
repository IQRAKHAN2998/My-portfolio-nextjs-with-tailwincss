import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <main>
            {/* about me */}
            <div className="mt-60 sm:mt-20">
                <h1 className="font-bold text-3xl text-center">About Me</h1>
            </div>

            <div className="flex items-start space-x-8 flex-col sm:flex-row ">

                <div>
                    <Image src="/images.jpeg" alt="aboutpic" width={400} height={300} className="w-200 h-300 sm:w-500 h-400" ></Image>
                </div>

                <div>
                    <p className="mt-4">I am an exceptional front-end developer with a strong command over HTML, CSS, and TypeScript/JavaScript. <br />
                        I have the ability to transform creative designs into interactive, user-friendly web pages,  <br />
                        demonstrating a deep understanding of modern web technologies. <br />
                        I write clean, efficient code to ensure both functionality and aesthetics are balanced, providing an outstanding user experience.</p>

                    <ol className="list-disc space-y-2 m-10 mr-5">
                        <li >Name :  Iqra khan</li>
                        <li>Gender : Female</li>
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
            <div className="text-center p-5 font-bold">
                <p>
                    I am currently learning Next.js, and I have a keen interest in artificial intelligence (AI) and cloud computing. <br />
                    My goal is to become a full stack developer in the future, equipped with the skills necessary to build dynamic web applications <br />
                    and leverage advanced technologies. I believe that combining my knowledge in web development with AI and cloud solutions will enable me to create innovative applications
                    that can solve real-world problems.</p>
            </div>


        </main>
    )
}