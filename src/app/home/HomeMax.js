import Image from "next/image";
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoTailwindCss, BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

export default function HomeMax() {
    return (
        <div>
            <div className='w-full pt-8 flex flex-col items-end justify-end gap-2'>
                <div className='w-3/4 h-1 shadow-md shadow-black bg-orange-500'></div>
                <div className='w-2/4 h-1 shadow-md shadow-black bg-orange-700'></div>
            </div>

            <div className="h-[calc(100vh-80px)] pl-24 text-neutral-600 hidden lg:flex items-center justify-center gap-8">
                <div className="flex justify-center items-center">
                    <Image src={"/img/avatar.jpg"} width={350} height={400} alt="Imagem de perfil" className="rounded-full p-4 mr-4 border-2 border-dashed border-black hover:p-2 hover:border-orange-700 transition-all duration-300 shadow-lg shadow-black" />
                </div>

                <div className="mr-2 flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-orange-300 hover:bg-orange-400 transition-all duration-300 shadow-md shadow-black" ></div>
                    <div className="w-10 h-10 rounded-full bg-orange-300 hover:bg-orange-400 transition-all duration-300  shadow-md shadow-black"></div>
                    <div className="w-8 h-8 rounded-full bg-orange-300 hover:bg-orange-400 transition-all duration-300  shadow-md shadow-black"></div>
                    <div className="w-6 h-6 rounded-full bg-orange-300 hover:bg-orange-400 transition-all duration-300  shadow-md shadow-black"></div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 py-20 px-20 text-xl bg-orange-300 rounded-2xl border-4 border-r-0 border-b-0 border-orange-700 shadow-lg shadow-black text-center">
                    <h1 className="font-extrabold text-4xl text-black   ">Hudson Faria E. Santo</h1>
                    <h2 className="font-bold hover:text-orange-500 transition-all duration-300">Desenvolvedor Front-end</h2>
                    <div className="w-3/5 h-1 b border-t border-black">
                    </div>
                    <div className="flex gap-5 my-5">
                        <a href="https://www.linkedin.com/in/hudsonsanto/" target="_blank" className="flex items-center gap-1 text-lg p-1 px-2.5 bg-blue-400 rounded-3xl hover:bg-blue-600 hover:text-black transition-all duration-300  shadow-md shadow-black">Linkedin<BiLogoLinkedinSquare /></a>
                        <a href="https://github.com/HudsnF" target="_blank" className="flex items-center gap-1 text-lg  p-1 px-2 bg-neutral-400 rounded-3xl hover:bg-black hover:text-white transition-all duration-300  shadow-md shadow-black">Github<BiLogoGithub /></a>
                    </div>
                    <div className="flex justify-center text-3xl gap-2 pb-4 border-b-2 border-black border-dotted">
                        <BiLogoHtml5 className="text-orange-500" />
                        <BiLogoCss3 className="text-blue-600" />
                        <BiLogoJavascript className="text-yellow-500" />
                        <BiLogoReact className="text-blue-700" />
                        <TbBrandNextjs className="text-black" />
                        <BiLogoTailwindCss className="text-blue-400" />
                    </div>
                </div>
            </div>
        </div>

    )
}