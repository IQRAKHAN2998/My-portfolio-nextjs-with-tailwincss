import Link from "next/link";
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {

    return (
        <main>
            <div className="flex items-center bg-black text-white p-4 justify-around  sticky top-0">
                <h1 className="font-bold text-3xl underline">Iqra Khan</h1>
                <ul className=" hidden md:block">
                    <li className="space-x-5">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/project">Project</Link>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <ul className="bg-white flex flex-col items-start font-medium">
                                <li className="space-x-5 py-4">
                                    <Link href="/" className=" hover:bg-blue-400">Home</Link>
                                    <Link href="/about"  className=" hover:bg-blue-400">About</Link>
                                    <Link href="/project"  className=" hover:bg-blue-400">Project</Link>
                                    <Link href="/contact"  className=" hover:bg-blue-400">Contact</Link>
                                    <SheetClose className="bg-white font-bold">X</SheetClose>

                                </li>
                            </ul>
                            <SheetDescription>

                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
        </main>
    )
}