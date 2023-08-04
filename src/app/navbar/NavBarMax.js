import { User, FolderOpenDot, PhoneOutgoing, Home } from "lucide-react";
import Link from "next/link";

export default function NavBarMax() {
    return (
        <nav className="h-20 hidden lg:flex bg-black justify-between items-center border-b-2 border-orange-500">
            <div className="bg-orange-500 flex items-center justify-center text-2xl text-neutral-100 font-semibold h-3/4 w-32 rounded-full rounded-br-xl">
                <h1><span className="text-4xl ">H</span> F E S</h1>
            </div>
            <ul className="flex h-20 px-8 gap-6  items-center bg-orange-500">
                <li className="text-neutral-200 text-lg tracking-widest font-semibold hover:text-neutral-700 hover:shadow-white transition-all duration-300  shadow-md shadow-black p-1 px-2 rounded-lg">
                    <Link href="/home" className="flex items-center gap-2">Home<Home size={20}/></Link>
                </li>
                <li className="text-neutral-200 text-lg tracking-widest font-semibold hover:text-neutral-700 hover:shadow-white transition-all duration-300  shadow-md shadow-black p-1 px-2 rounded-lg">
                    <Link href="/about" className="flex items-center gap-2">About Me<User size={20} /></Link>
                </li>
                <li className="text-neutral-200 text-lg tracking-widest font-semibold hover:text-neutral-700 hover:shadow-white transition-all duration-300  shadow-md shadow-black p-1 px-2 rounded-lg">
                    <Link href="/projects" className="flex items-center gap-2">Projects <FolderOpenDot size={20} /></Link>
                </li>
                <li className="text-neutral-200 text-lg tracking-widest font-semibold hover:text-neutral-700 hover:shadow-white transition-all duration-300  shadow-md shadow-black p-1 px-2 rounded-lg">
                    <Link href="/contacts" className="flex items-center gap-2">Contacts <PhoneOutgoing size={20} /></Link>
                </li>
            </ul>
        </nav>
    )
}