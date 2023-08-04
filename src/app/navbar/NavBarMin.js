import { User, FolderOpenDot, PhoneOutgoing, Home } from "lucide-react";
import Link from "next/link";

export default function NavBarMin() {
    return (
        <nav className="lg:hidden h-80 gap-2 bg-black flex items-center flex-col border-b-2 border-orange-500">
            <div className="bg-orange-500 flex items-center justify-center text-lg text-neutral-200 font-semibold w-80 rounded-b-xl">
                <h1><span className="text-4xl ">H</span> F E S</h1>
            </div>
            <ul className="flex flex-col h-full w-full p-4 gap-4 items-center bg-orange-500">
                <li className="flex justify-center bg-orange-300 w-full p-2 rounded-xl text-neutral-950 text-lg tracking-widest font-semibold hover:text-neutral-700 transition-all duration-300 shadow-md shadow-black">
                    <Link href="/home" className="flex items-center justify-center gap-2 w-full">Home <Home size={20} /></Link>
                </li>
                <li className="flex justify-center bg-orange-300 w-full p-2 rounded-xl text-neutral-950 text-lg tracking-widest font-semibold hover:text-neutral-700 transition-all duration-300 shadow-md shadow-black">
                    <Link href="/about" className="flex items-center justify-center gap-2 w-full">About Me<User size={20} /></Link>
                </li>
                <li className="flex justify-center bg-orange-300 w-full p-2 rounded-xl text-neutral-950 text-lg tracking-widest font-semibold hover:text-neutral-700 transition-all duration-300 shadow-md shadow-black">
                    <Link href="/projects" className="flex items-center justify-center gap-2 w-full">Projects <FolderOpenDot size={20} /></Link>
                </li>
                <li className="flex justify-center bg-orange-300 w-full p-2 rounded-xl text-neutral-950 text-lg tracking-widest font-semibold hover:text-neutral-700 transition-all duration-300 shadow-md shadow-black">
                    <Link href="/contacts" className="flex items-center justify-center gap-2 w-full">Contacts <PhoneOutgoing size={20} /></Link>
                </li>
            </ul>
        </nav>
    )
}