import Image from "next/image";
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoTailwindCss, BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

export default function HomeMin() {
    return (
        <div className="text-neutral-600 lg:hidden flex flex-col items-center pt-8 gap-2 justify-center">
            <div className="flex flex-col justify-center items-center h-full">
                <Image src={"/img/Avatar.jpg"} width={200} height={200} alt="Imagem de perfil" className="rounded-full p-3 mt-2 hover:p-2 transition-all duration-300 shadow-lg shadow-black" />
                <div className="w-30 mt-8 py-2 flex flex-col items-center justify-center gap-4">
                    <div className="w-6 h-6 bg-neutral-500 rounded-full hover:bg-orange-300 transition-all duration-300 shadow-lg shadow-black" ></div>
                    <div className="w-5 h-5 rounded-full bg-neutral-500 hover:bg-orange-300 transition-all duration-300 shadow-lg shadow-black"></div>
                    <div className="w-4 h-4 rounded-full bg-neutral-500 hover:bg-orange-300 transition-all duration-300 shadow-lg shadow-black"></div>
                    <div className="w-3 h-3 rounded-full bg-neutral-500 hover:bg-orange-300 transition-all duration-300 shadow-lg shadow-black"></div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 py-10 px-1 w-4/5 mb-2 bg-orange-100 rounded-xl border-4 border-orange-700 shadow-lg shadow-black">
                <h1 className="font-extrabold text-3xl text-black text-center">Hudson Faria E. Santo</h1>
                <h2 className="font-bold hover:text-orange-500 transition-all duration-300 text-center text-2xl">Desenvolvedor Front-end</h2>
                <div className="w-3/5 h-1 b border-t border-black">
                </div>
                <div className="flex gap-5 mb-4">
                    <a href="https://www.linkedin.com/in/hudsonsanto/" target="_blank" className="flex items-center gap-1 text-xl p-1 px-2.5 bg-blue-400 rounded-3xl hover:bg-blue-600 hover:text-black transition-all duration-300  shadow-md shadow-black">Linkedin<BiLogoLinkedinSquare /></a>
                    <a href="https://github.com/HudsnF" target="_blank" className="flex items-center gap-1 text-xl p-1 px-2 bg-neutral-400 rounded-3xl hover:bg-black hover:text-white transition-all duration-300  shadow-md shadow-black">Github<BiLogoGithub /></a>
                </div>
                <div className="flex justify-center gap-2 pb-4  border-b-2 border-black border-dotted">
                    <BiLogoHtml5 size={30} className="text-orange-500" />
                    <BiLogoCss3 size={30} className="text-blue-600" />
                    <BiLogoJavascript size={30} className="text-yellow-500" />
                    <BiLogoReact size={30} className="text-blue-700" />
                    <TbBrandNextjs size={30} className="text-black" />
                    <BiLogoTailwindCss size={30} className="text-blue-400" />
                </div>
            </div>
        </div>
    )
}