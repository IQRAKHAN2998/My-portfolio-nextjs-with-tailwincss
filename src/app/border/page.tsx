
import Image from "next/image"
import Link from 'next/link';
import Wrapper from "../../components/wrapper/page";


// Interface for item properties
interface ItemProps {
  imageUrl: string;
  linkUrl: string;
  buttonText: string;
}

// Array of items
const items: ItemProps[] = [
  {
    imageUrl: '/resume.png',
    linkUrl: 'https://hackhthon-1-milestone-static-resume-builder-iqrakhan2998.vercel.app/',
    buttonText: 'Static Resume-Builder'
  },
  {
    imageUrl: '/dynamic.jpeg',
    linkUrl: 'https://3-milestone-dynamic-resume-builder-by-iqrakhan.vercel.app/',
    buttonText: 'dynamic Resume-builder'
  },
  {
    imageUrl: '/GH.jpeg',
    linkUrl: 'https://gh-website-nextjs-ccss.vercel.app/',
    buttonText: 'Governor-House-website'
  },
  {
    imageUrl: '/plant.jpeg',
    linkUrl: 'https://e-commerce-website-figma-ik.vercel.app/',
    buttonText: 'e-commerce-figma-website'
  },
  {
    imageUrl: '/calculater.png',
    linkUrl: 'https://github.com/IQRAKHAN2998/SIMPLE-CALCULATOR.git',
    buttonText: 'Simple Calculator'
  },
  {
    imageUrl: '/funzone.png',
    linkUrl: 'https://github.com/IQRAKHAN2998/cli-number-guessing.git',
    buttonText: 'Guessing-Number'
  },
  {
    imageUrl: '/atmmachine.png',
    linkUrl: 'https://github.com/IQRAKHAN2998/ATM-machine.git',
    buttonText: 'Atm-Machine'
  },
];

const MyComponent: React.FC = () => {
  return (
    <Wrapper>
      <div className='flex justify-around flex-col flex-wrap sm:flex-row items-center space-y-5 '>
    
      {items.map((item, index) => (
        <div key={index}  className=" mx-20 shadow-xl rounded-lg w-4/12 text-blue-950 items-center max-w-full ">
          {/* Image */}
          <Image src={item.imageUrl} alt={`Image ${index + 1}`} width={300} height={250} className="w-500 h-40" />

          {/* Link */}
          <Link href={item.linkUrl} target="_blank" className="text-blue-900 text-center font-bold underline text-2xl  ">
           visit link
          </Link>

          {/* Button */}
          <button>{item.buttonText}</button>
        </div>
      ))}
    </div>
    </Wrapper>
  );
};

export default MyComponent;




