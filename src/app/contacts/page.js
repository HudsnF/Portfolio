import { Github, Linkedin } from 'lucide-react';
import NavBar from "../navbar/NavBarAll";

export default function Contacts() {
    return (
        <>
        <NavBar/>
            <div className="bg-neutral-100 h-[calc(100vh-80px)] flex flex-col items-center justify-around">
                <div className='w-full flex flex-col items-end gap-2'>
                    <div className='w-1/4 h-1 shadow-md shadow-black bg-slate-900'></div>
                    <div className='w-1/5 h-1 shadow-md shadow-black bg-yellow-400'></div>
                </div>
                <div className='p-10 flex flex-col items-center justify-center text-4xl font-semibold gap-3 border-4 border-slate-900 rounded-full rounded-tr-xl shadow-md shadow-black'>
                    <a href="https://www.linkedin.com/in/hudsonsanto/" target="_blank" className='flex gap-5 items-center bg-slate-300 p-2 rounded-md shadow-md shadow-black hover:bg-blue-500 hover:text-neutral-300 transition-all duration-300'><Linkedin size={35} />Linkedin</a>
                    <a href="https://github.com/HudsnF" target="_blank" className='flex gap-5 items-center bg-slate-300 p-2 rounded-md shadow-md shadow-black hover:bg-black hover:text-white transition-all duration-300'><Github size={35} />Github</a> 
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                    <div className='w-1/4 h-1 shadow-md shadow-black bg-slate-900'></div>
                    <div className='w-1/5 h-1 shadow-md shadow-black bg-yellow-400'></div>
                </div>
            </div>
        </>

    )
} 