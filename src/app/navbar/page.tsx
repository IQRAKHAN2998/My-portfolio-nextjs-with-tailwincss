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
      <div className="flex  justify-around  bg-[#4E342E] text-white py-4 px-6 sm:px-12 sticky top-0 shadow-md z-50">
        
        {/* Logo */}
        <h1 className="font-bold text-xl sm:text-2xl tracking-wide">Iqra Khan</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-base sm:text-lg font-medium">
          <Link href="/" className="hover:text-[#FFCCBC] transition">Home</Link>
          <Link href="/about" className="hover:text-[#FFCCBC] transition">About</Link>
          <Link href="/project" className="hover:text-[#FFCCBC] transition">Project</Link>
          <Link href="/contact" className="hover:text-[#FFCCBC] transition">Contact</Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="text-white w-6 h-6" />
          </SheetTrigger>

          <SheetContent className="bg-[#D7CCC8]">
            <SheetHeader>
              <ul className="flex flex-col gap-6 text-lg mt-8 text-[#3E2723] font-semibold px-4">
                <li><Link href="/" className="hover:text-[#5D4037]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#5D4037]">About</Link></li>
                <li><Link href="/project" className="hover:text-[#5D4037]">Project</Link></li>
                <li><Link href="/contact" className="hover:text-[#5D4037]">Contact</Link></li>
              </ul>
              <SheetClose className="mt-6 ml-4 bg-[#4E342E] text-white px-4 py-2 rounded hover:bg-[#3E2723] font-bold">
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
