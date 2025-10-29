import Image from "next/image";
import Link from "next/link";
// import Wrapper from "../../components/wrapper/page";

interface ItemProps {
  imageUrl: string;
  linkUrl: string;
  buttonText: string;
}

const items: ItemProps[] = [
  {
    imageUrl: "/password.jpeg",
    linkUrl: "https://ikgeneratepassword.streamlit.app/",
    buttonText: "Secure_Generate_Password",
  },
  {
    imageUrl: "/currency.png",
    linkUrl: "https://multiconvertor.streamlit.app/",
    buttonText: "Currency_Converter",
  },
  {
    imageUrl: "/file_converter.png",
    linkUrl: "https://growth-mindset-file-converter.streamlit.app/",
    buttonText: "Growth_Mindset_File_Converter",
  },
  {
    imageUrl: "/website.png",
    linkUrl: "https://hackathon-template-0-8gxr.vercel.app",
    buttonText: "Ecommerce-Furniture-Website",
  },
  {
    imageUrl: "/agentic.webp",
    linkUrl: "https://agentic-ai-nine.vercel.app/",
    buttonText: "Agentic-AI",
  },
  {
    imageUrl: "/BLOG.png",
    linkUrl: "https://blog-ai--alpha.vercel.app/",
    buttonText: "Blog-In-AI",
  },
  {
    imageUrl: "/ui.png",
    linkUrl: "https://practice-e-commerce.vercel.app/",
    buttonText: "Statics-UI-website",
  },
  {
    imageUrl: "/panaverseDao.png",
    linkUrl: "https://panaverse-dao-website-seven.vercel.app/",
    buttonText: "Panaverse-Dao-Website",
  },
  {
    imageUrl: "/portfolio.png",
    linkUrl: "https://portfolio-with-custom-css-omega.vercel.app/",
    buttonText: "portfolio-with-css",
  },
  {
    imageUrl: "/resume.png",
    linkUrl:
      "https://hackhthon-1-milestone-static-resume-builder-iqrakhan2998.vercel.app/",
    buttonText: "Static Resume-Builder",
  },
  {
    imageUrl: "/dynamic.jpeg",
    linkUrl:
      "https://3-milestone-dynamic-resume-builder-by-iqrakhan.vercel.app/",
    buttonText: "dynamic Resume-builder",
  },
  {
    imageUrl: "/GH.jpeg",
    linkUrl: "https://gh-website-nextjs-ccss.vercel.app/",
    buttonText: "Governor-House-website",
  },
  {
    imageUrl: "/plant.jpeg",
    linkUrl: "https://e-commerce-website-figma-ik.vercel.app/",
    buttonText: "e-commerce-figma-website",
  },
  {
    imageUrl: "/calculater.png",
    linkUrl: "https://github.com/IQRAKHAN2998/SIMPLE-CALCULATOR.git",
    buttonText: "Simple Calculator",
  },
  {
    imageUrl: "/funzone.png",
    linkUrl: "https://github.com/IQRAKHAN2998/cli-number-guessing.git",
    buttonText: "Guessing-Number",
  },
  {
    imageUrl: "/atmmachine.png",
    linkUrl: "https://github.com/IQRAKHAN2998/ATM-machine.git",
    buttonText: "Atm-Machine",
  },
];

const MyComponent: React.FC = () => {
  return (
    // <Wrapper>
    <div className="bg-[#0a0909] min-h-screen py-16 px-6 flex flex-wrap justify-center gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative bg-[#17204d] border border-[#263373] rounded-2xl shadow-2xl w-full sm:w-[300px] md:w-[320px] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[#d64b1f]/50"
        >
          {/* Image Section */}
          <div className="relative w-full h-[200px] overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={`Project ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
              <Link
                href={item.linkUrl}
                target="_blank"
                className="text-white bg-[#d64b1f] px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#e65c29] transition"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Project Name */}
          <div className="p-4">
            <h3 className="text-white text-center font-semibold text-lg tracking-wide">
              {item.buttonText}
            </h3>
          </div>
        </div>
      ))}
    </div>
    // </Wrapper>
  );
};

export default MyComponent;

// import Image from "next/image"
// import Link from 'next/link';
// import Wrapper from "../../components/wrapper/page";


// // Interface for item properties
// interface ItemProps {
//   imageUrl: string;
//   linkUrl: string;
//   buttonText: string;
// }

// // Array of items
// const items: ItemProps[] = [
//   {
//     imageUrl: '/password.jpeg',
//     linkUrl: 'https://ikgeneratepassword.streamlit.app/',
//     buttonText: 'Secure_Generate_Password'

//   },
//   {
//     imageUrl: '/currency.png',
//     linkUrl: 'https://multiconvertor.streamlit.app/',
//     buttonText: 'Currency_Converter'

//   },
//   {
//     imageUrl: '/file_converter.png',
//     linkUrl: 'https://growth-mindset-file-converter.streamlit.app/',
//     buttonText: 'Growth_Mindset_File_Converter'

//   },
//   {
//     imageUrl: '/website.png',
//     linkUrl: 'https://hackathon-template-0-8gxr.vercel.app',
//     buttonText: 'Ecommerce-Furniture-Website'

//   },
//   {
//     imageUrl: '/agentic.webp',
//     linkUrl: 'https://agentic-ai-nine.vercel.app/',
//     buttonText: 'Agentic-AI'

//   },
//   {
//     imageUrl: '/BLOG.png',
//     linkUrl: 'https://blog-ai--alpha.vercel.app/',
//     buttonText: 'Blog-In-AI'

//   },
//   {
//     imageUrl: '/ui.png',
//     linkUrl: 'https://practice-e-commerce.vercel.app/',
//     buttonText: 'Statics-UI-website'

//   },
  
//   {
//     imageUrl: '/panaverseDao.png',
//     linkUrl: 'https://panaverse-dao-website-seven.vercel.app/',
//     buttonText: 'Panaverse-Dao-Website'
//   },
//   {
//     imageUrl: '/portfolio.png',
//     linkUrl: 'https://portfolio-with-custom-css-omega.vercel.app/',
//     buttonText: 'portfolio-with-css'
//   },
//   {
//     imageUrl: '/resume.png',
//     linkUrl: 'https://hackhthon-1-milestone-static-resume-builder-iqrakhan2998.vercel.app/',
//     buttonText: 'Static Resume-Builder'
//   },
//   {
//     imageUrl: '/dynamic.jpeg',
//     linkUrl: 'https://3-milestone-dynamic-resume-builder-by-iqrakhan.vercel.app/',
//     buttonText: 'dynamic Resume-builder'
//   },
//   {
//     imageUrl: '/GH.jpeg',
//     linkUrl: 'https://gh-website-nextjs-ccss.vercel.app/',
//     buttonText: 'Governor-House-website'
//   },
//   {
//     imageUrl: '/plant.jpeg',
//     linkUrl: 'https://e-commerce-website-figma-ik.vercel.app/',
//     buttonText: 'e-commerce-figma-website'
//   },
//   {
//     imageUrl: '/calculater.png',
//     linkUrl: 'https://github.com/IQRAKHAN2998/SIMPLE-CALCULATOR.git',
//     buttonText: 'Simple Calculator'
//   },
//   {
//     imageUrl: '/funzone.png',
//     linkUrl: 'https://github.com/IQRAKHAN2998/cli-number-guessing.git',
//     buttonText: 'Guessing-Number'
//   },
//   {
//     imageUrl: '/atmmachine.png',
//     linkUrl: 'https://github.com/IQRAKHAN2998/ATM-machine.git',
//     buttonText: 'Atm-Machine'
//   },

// ];

// const MyComponent: React.FC = () => {
//   return (
//     // <Wrapper>
//   <div className="flex flex-wrap justify-center gap-6 py-10 px-4">
//     {items.map((item, index) => (
//       <div
//         key={index}
//         className="bg-black shadow-lg rounded-2xl w-full sm:w-[300px] md:w-[320px] p-4 border border-gray-300 hover:shadow-2xl transition-shadow duration-300"
//       >
//         {/* Image */}
//         <Image
//           src={item.imageUrl}
//           alt={`Image ${index + 1}`}
//           width={300}
//           height={200}
//           className="rounded-md object-cover w-full h-[180px]"
//         />

//         {/* Link */}
//         <Link
//           href={item.linkUrl}
//           target="_blank"
//           className="block text-center mt-4 text-[#e4e4e9] font-semibold text-xl hover:underline"
//         >
//           {item.buttonText}
//         </Link>
//       </div>
//     ))}
//   </div>
// // </Wrapper>

//   );
// };

// export default MyComponent;




