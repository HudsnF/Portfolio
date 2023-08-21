import { User, FolderOpenDot, PhoneOutgoing, Home } from "lucide-react";
import Link from "next/link";

export default function NavBarMin() {
    return (
        <nav className="lg:hidden h-80 gap-2 bg-slate-900 flex items-center flex-col border-b-2 border-yellow-500">
            <div className="bg-yellow-400 flex items-center justify-center text-lg text-slate-800 font-semibold w-80 rounded-b-xl">
                <h1><span className="text-4xl ">H</span> F E S</h1>
            </div>
            <ul className="flex flex-col h-full w-full p-4 gap-4 items-center bg-yellow-400">
                <li className="flex justify-center w-full p-2 rounded-xl text-slate-200 text-lg bg-slate-900 tracking-widest font-semibold shadow-md border-b-2">
                    <Link href="/home" className="flex items-center justify-center gap-2 w-full">Home <Home size={20} /></Link>
                </li>
                <li className="flex justify-center w-full p-2 rounded-xl text-slate-200 text-lg bg-slate-900 tracking-widest font-semibold shadow-md border-b-2 shaslate-900">
                    <Link href="/about" className="flex items-center justify-center gap-2 w-full">About Me<User size={20} /></Link>
                </li>
                <li className="flex justify-center w-full p-2 rounded-xl text-slate-200 text-lg bg-slate-900 tracking-widest font-semibold shadow-md border-b-2">
                    <Link href="/projects" className="flex items-center justify-center gap-2 w-full">Projects <FolderOpenDot size={20} /></Link>
                </li>
                <li className="flex justify-center w-full p-2 rounded-xl text-slate-200 text-lg bg-slate-900 tracking-widest font-semibold shadow-md border-b-2 ">
                    <Link href="/contacts" className="flex items-center justify-center gap-2 w-full">Contacts <PhoneOutgoing size={20} /></Link>
                </li>
            </ul>
        </nav>
    )
}