import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <main>
      <div className="flex justify-between items-center bg-gradient-to-r from-[#0f0f0f] via-[#1b1b1b] to-[#2b2b2b] text-white py-4 px-6 sm:px-12 sticky top-0 shadow-lg z-50 border-b border-[#f3683a]/20 backdrop-blur-md">
        
        {/* Logo */}
        <h1 className="font-extrabold text-2xl sm:text-3xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#f3683a] to-[#ff9f59] hover:scale-105 transition-transform duration-300 cursor-pointer">
          Iqra Khan
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-base sm:text-lg font-medium">
          <Link href="/" className="hover:text-[#f3683a] transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#f3683a] transition-colors duration-200">
            About
          </Link>
          <Link href="/project" className="hover:text-[#f3683a] transition-colors duration-200">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-[#f3683a] transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="text-[#f3683a] w-7 h-7" />
          </SheetTrigger>

          <SheetContent className="bg-[#121212] text-white border-l border-[#f3683a]/30">
            <SheetHeader>
              <ul className="flex flex-col gap-6 text-lg mt-10 font-semibold px-4">
                <li>
                  <Link href="/" className="hover:text-[#f3683a]">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#f3683a]">About</Link>
                </li>
                <li>
                  <Link href="/project" className="hover:text-[#f3683a]">Projects</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#f3683a]">Contact</Link>
                </li>
              </ul>
              <SheetClose className="mt-8 ml-4 bg-[#f3683a] text-white px-4 py-2 rounded-lg hover:bg-[#f57c40] font-bold shadow-md transition-colors">
                Close
              </SheetClose>
              <SheetDescription />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}

// import Link from "next/link";
// import { Menu } from "lucide-react";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// export default function Navbar() {
//   return (
//     <main>
//       <div className="flex  justify-around  bg-[#4E342E] text-white py-4 px-6 sm:px-12 sticky top-0 shadow-md z-50">
        
//         {/* Logo */}
//         <h1 className="font-bold text-xl sm:text-2xl tracking-wide">Iqra Khan</h1>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 text-base sm:text-lg font-medium">
//           <Link href="/" className="hover:text-[#FFCCBC] transition">Home</Link>
//           <Link href="/about" className="hover:text-[#FFCCBC] transition">About</Link>
//           <Link href="/project" className="hover:text-[#FFCCBC] transition">Project</Link>
//           <Link href="/contact" className="hover:text-[#FFCCBC] transition">Contact</Link>
//         </nav>

//         {/* Mobile Navigation */}
//         <Sheet>
//           <SheetTrigger className="md:hidden">
//             <Menu className="text-white w-6 h-6" />
//           </SheetTrigger>

//           <SheetContent className="bg-[#D7CCC8]">
//             <SheetHeader>
//               <ul className="flex flex-col gap-6 text-lg mt-8 text-[#3E2723] font-semibold px-4">
//                 <li><Link href="/" className="hover:text-[#5D4037]">Home</Link></li>
//                 <li><Link href="/about" className="hover:text-[#5D4037]">About</Link></li>
//                 <li><Link href="/project" className="hover:text-[#5D4037]">Project</Link></li>
//                 <li><Link href="/contact" className="hover:text-[#5D4037]">Contact</Link></li>
//               </ul>
//               <SheetClose className="mt-6 ml-4 bg-[#4E342E] text-white px-4 py-2 rounded hover:bg-[#3E2723] font-bold">
//                 Close
//               </SheetClose>
//               <SheetDescription />
//             </SheetHeader>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </main>
//   );
// }
