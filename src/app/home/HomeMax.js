import Image from "next/image";
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoTailwindCss, BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

export default function HomeMax() {
    return (
        <div className="h-[calc(100vh-80px)] pl-24 text-neutral-600 hidden lg:flex items-center justify-between">
            <div className="flex justify-center items-center ">
                <Image src={"/img/avatar.jpg"} width={400} height={400} alt="Imagem de perfil" className="rounded-full  mr-4 border-black hover:p-2 hover:border-orange-700 transition-all duration-300 shadow-lg shadow-black" />
                <div className="w-30 mr-2 flex items-center gap-2">
                    <div className="w-6 h-6 bg-neutral-500 rounded-full hover:bg-orange-300 transition-all duration-300 shadow-md shadow-black" ></div>
                    <div className="w-5 h-5 rounded-full bg-neutral-500 hover:bg-orange-300 transition-all duration-300  shadow-md shadow-black"></div>
                    <div className="w-4 h-4 rounded-full bg-neutral-500 hover:bg-orange-300 transition-all duration-300  shadow-md shadow-black"></div>
                    <div className="w-3 h-3 rounded-full bg-neutral-500 hover:bg-orange-300 transition-all duration-300  shadow-md shadow-black"></div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-3/5 w-3/5 text-xl bg-orange-200 rounded-l-xl border-4 border-r-0 border-orange-700 shadow-lg shadow-black">
                <h1 className="font-extrabold text-4xl text-black   ">Hudson Faria E. Santo</h1>
                <h2 className="font-bold hover:text-orange-500 transition-all duration-300">Desenvolvedor Front-end</h2>
                <div className="w-3/5 h-1 b border-t border-black">
                </div>
                <div className="flex gap-5 my-5">
                    <a href="https://www.linkedin.com/in/hudsonsanto/" target="_blank" className="flex items-center gap-1 text-lg p-1 px-2.5 bg-blue-400 rounded-3xl hover:bg-blue-600 hover:text-black transition-all duration-300  shadow-md shadow-black">Linkedin<BiLogoLinkedinSquare /></a>
                    <a href="https://github.com/HudsnF" target="_blank" className="flex items-center gap-1 text-lg  p-1 px-2 bg-neutral-400 rounded-3xl hover:bg-black hover:text-white transition-all duration-300  shadow-md shadow-black">Github<BiLogoGithub /></a>
                </div>
                <div className="flex justify-center text-3xl gap-2 pb-4 w-2/5 border-b-2 border-black border-dotted">
                    <BiLogoHtml5 className="text-orange-500" />
                    <BiLogoCss3 className="text-blue-600" />
                    <BiLogoJavascript className="text-yellow-500" />
                    <BiLogoReact className="text-blue-700" />
                    <TbBrandNextjs className="text-black" />
                    <BiLogoTailwindCss className="text-blue-400" />
                </div>
            </div>
        </div>
    )
}