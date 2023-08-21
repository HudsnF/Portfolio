import { User, FolderOpenDot, PhoneOutgoing, Home } from "lucide-react";
import Link from "next/link";

export default function NavBarMax() {
    return (
        <nav className="h-20 hidden lg:flex bg-slate-900 justify-between items-center border-b-2 border-yellow-500">
            <div className="bg-yellow-400 flex items-center justify-center text-2xl text-slate-900 font-semibold h-3/4 w-32 ml-2 rounded-full rounded-br-xl">
                <h1><span className="text-4xl ">H</span> F E S</h1>
            </div>
            <ul className="flex h-20 px-8 gap-6  items-center bg-yellow-400">
                <li className="text-slate-900 text-xl tracking-widest font-semibold hover:text-slate-700 hover:shadow-slate-900 transition-all duration-300 p-1 px-2 rounded-lg shadow-md">
                    <Link href="/home" className="flex items-center gap-2">Home<Home size={20}/></Link>
                </li>
                <li className="text-slate-900 text-xl tracking-widest font-semibold hover:text-slate-700 hover:shadow-slate-900 transition-all duration-300 p-1 px-2 rounded-lg shadow-md">
                    <Link href="/about" className="flex items-center gap-2">About Me<User size={20} /></Link>
                </li>
                <li className="text-slate-900 text-xl tracking-widest font-semibold hover:text-slate-700 hover:shadow-slate-900 transition-all duration-300 p-1 px-2 rounded-lg shadow-md">
                    <Link href="/projects" className="flex items-center gap-2">Projects <FolderOpenDot size={20} /></Link>
                </li>
                <li className="text-slate-900 text-xl tracking-widest font-semibold hover:text-slate-700 hover:shadow-slate-900 transition-all duration-300 p-1 px-2 rounded-lg shadow-md">
                    <Link href="/contacts" className="flex items-center gap-2">Contacts <PhoneOutgoing size={20} /></Link>
                </li>
            </ul>
        </nav>
    )
}