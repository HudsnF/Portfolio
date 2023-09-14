import { FileCode2, Link } from "lucide-react";
import Image from "next/image";

export default function ProjectCard() {
    return (
        <div className="w-3/4 flex flex-wrap justify-center text-slate-800">
            <div className="w-96 bg-neutral-200 m-2 p-4  flex flex-col items-center justify-start gap-4 rounded-tl-3xl rounded-br-3xl shadow-md shadow-slate-800">
                <h1 className="font-bold text-slate-500 shadow-sm shadow-yellow-500 px-2 rounded-xl text-2xl">Coffee Time</h1>
                <div className="overflow-y-scroll h-44 scrollbar-thin scrollbar-track-orange-950 scrollbar-thumb-orange-500">
                    <Image src={"/img/coffeetime.jpeg"} width={500} height={100} alt="" />
                </div>
                <div className="flex gap-4">
                    <a href="https://hudsnf.github.io/Seven-Wonders-of-the-World/" target="_blank" className="bg-slate-900 px-4 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Site <Link size={16} /></a>
                    <a href="https://github.com/HudsnF/Seven-Wonders-of-the-World" target="_blank" className="bg-slate-900 px-3 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Code<FileCode2 size={16} /></a>
                </div>
                <div className="p-2 text-lg text-center">
                    <p>Um dos projetos mais recentes, simulando um site de cafeteria, no qual você pode escolher qual sua bebida, além de ser possível colocar e retirar do carrinho. Feito com <span className="font-semibold">React.js e uma lógica com Javascript.</span></p>
                </div>
            </div>

            <div className="w-96 bg-neutral-200 m-2 p-4  flex flex-col items-center justify-start gap-4 rounded-tl-3xl rounded-br-3xl shadow-md shadow-slate-800">
                <h1 className="font-bold text-slate-500 shadow-sm shadow-yellow-500 px-2 rounded-xl text-2xl">Amazon Clone</h1>
                <div className="overflow-y-scroll h-44 scrollbar-thin scrollbar-track-orange-950 scrollbar-thumb-orange-500">
                    <Image src={"/img/amazon-clone.jpeg"} width={500} height={100} alt="" />
                </div>
                <div className="flex gap-4">
                    <a href="https://amazon-clone-umber-eta.vercel.app/" target="_blank" className="bg-slate-900 px-4 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Site <Link size={16} /></a>
                    <a href="https://github.com/HudsnF/Amazon_clone" target="_blank" className="bg-slate-900 px-3 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Code<FileCode2 size={16} /></a>
                </div>
                <div className="p-2 text-lg text-center">
                    <p>Uma copia do layout e paginas do site da Amazon, utilizado o link do <span className="font-semibold">Next.Js</span> para a navegação das páginas principais do site. Customizado com <span className="font-semibold">TailwindCSS</span>.</p>
                </div>
            </div>

            <div className="w-96 bg-neutral-200 m-2 p-4  flex flex-col items-center justify-start gap-4 rounded-tl-3xl rounded-br-3xl shadow-md shadow-slate-800">
                <h1 className="font-bold text-slate-500 shadow-sm shadow-yellow-500 px-2 rounded-xl text-2xl">Spotify Clone</h1>
                <div>
                    <Image src={"/img/spotify.jpeg"} width={500} height={100} alt="" />
                </div>
                <div className="flex gap-4">
                    <a href="https://spotify-clone-hkg0j0krt-hudsnf.vercel.app/" target="_blank" className="bg-slate-900 px-4 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Site <Link size={16} /></a>
                    <a href=" https://github.com/HudsnF/spotify-clone" target="_blank" className="bg-slate-900 px-3 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Code<FileCode2 size={16} /></a>
                </div>
                <div className="p-2 text-lg text-center">
                    <p>Um clone do layout do Spotify Web feito com <span className="font-semibold">NextJs e TailwindCSS</span>.</p>
                </div>
            </div>

            <div className="w-96 bg-neutral-200 m-2 p-4  flex flex-col items-center justify-start gap-4 rounded-tl-3xl rounded-br-3xl shadow-md shadow-slate-800">
                <h1 className="font-bold text-slate-500 shadow-sm shadow-yellow-500 px-2 rounded-xl text-2xl">Seven Wonders</h1>
                <div className="overflow-y-scroll h-44 scrollbar-thin scrollbar-track-orange-950 scrollbar-thumb-orange-500">
                    <Image src={"/img/wonders.jpeg"} width={500} height={100} alt="" />
                </div>
                <div className="flex gap-4">
                    <a href="https://hudsnf.github.io/Seven-Wonders-of-the-World/" target="_blank" className="bg-slate-900 px-4 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Site <Link size={16} /></a>
                    <a href="https://github.com/HudsnF/Seven-Wonders-of-the-World" target="_blank" className="bg-slate-900 px-3 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Code<FileCode2 size={16} /></a>
                </div>
                <div className="p-2 text-lg text-center">
                    <p>Um dos projetos mais recentes, que demonstra um site informativo sobre os grandes pontos turísticos como "As sete maravilhas do mundo moderno". Feito com <span className="font-semibold">HTML, CSS e Javascript.</span></p>
                </div>
            </div>

            <div className="w-96 bg-neutral-200 m-2 p-4  flex flex-col items-center justify-start gap-4 rounded-tl-3xl rounded-br-3xl shadow-md shadow-slate-800">
                <h1 className="font-bold text-slate-500 shadow-sm shadow-yellow-500 px-2 rounded-xl text-2xl">Portfolio 1</h1>
                <div className="overflow-y-scroll h-44 scrollbar-thin scrollbar-track-orange-950 scrollbar-thumb-orange-500">
                    <Image src={"/img/portfolio1.jpeg"} width={500} height={100} alt="" />
                </div>
                <div className="flex gap-4">
                    <a href="https://hudsnf.github.io/Portifolio/" target="_blank" className="bg-slate-900 px-4 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Site <Link size={16} /></a>
                    <a href="https://github.com/HudsnF/Portifolio" target="_blank" className="bg-slate-900 px-3 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Code<FileCode2 size={16} /></a>
                </div>
                <div className="p-2 text-lg text-center">
                    <p>Meu primeiro portfolio, criado com <span className="font-semibold">HTML, CSS e Javascript</span></p>
                </div>
            </div>

            {/* <div className="w-96 bg-neutral-200 m-2 p-4  flex flex-col items-center justify-start gap-4 rounded-tl-3xl rounded-br-3xl shadow-md shadow-slate-800">
                <h1 className="font-bold text-slate-500 shadow-sm shadow-yellow-500 px-2 rounded-xl text-2xl">Coffee Shop</h1>
                <div>
                    <Image src={"/img/coffee.jpeg"} width={500} height={100} alt="" />
                </div>
                <div className="flex gap-4">
                    <a href="https://hudsnf.github.io/PersonalProject-CoffeShop/" target="_blank" className="bg-slate-900 px-4 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Site <Link size={16} /></a>
                    <a href="https://github.com/HudsnF/PersonalProject-CoffeShop" target="_blank" className="bg-slate-900 px-3 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Code<FileCode2 size={16} /></a>
                </div>
                <div className="p-2 text-lg text-center">
                    <p>Esse foi o primeiro projeto usando <span className="font-semibold">Javascript</span>. Uma pagina com foco mobile de uma loja de café, no qual, você escolhe o sabor, faz o pedido e escolhe entre reaver o pedido ou confirmar o mesmo.</p>
                </div>
            </div> */}

            <div className="w-96 bg-neutral-200 m-2 p-4  flex flex-col items-center justify-start gap-4 rounded-tl-3xl rounded-br-3xl shadow-md shadow-slate-800">
                <h1 className="font-bold text-slate-500 shadow-sm shadow-yellow-500 px-2 rounded-xl text-2xl">Clock Shop</h1>
                <div>
                    <Image src={"/img/clock.jpeg"} width={500} height={100} alt="" />
                </div>
                <div className="flex gap-4">
                    <a href="https://hudsnf.github.io/clockShop_personalProject/" target="_blank" className="bg-slate-900 px-4 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Site <Link size={16} /></a>
                    <a href="https://github.com/HudsnF/clockShop_personalProject" target="_blank" className="bg-slate-900 px-3 py-1 text-lg flex items-center rounded-xl gap-2 shadow-sm shadow-slate-800 border-2 border-black text-white font-semibold hover:bg-slate-700 transition-all duration-300">Code<FileCode2 size={16} /></a>
                </div>
                <div className="p-2 text-lg text-center">
                    <p>Uma landpage feita com <span className="font-semibold">HTML e CSS </span>de uma loja de relógios. Feita com um design simples, como uma primeira página ao entrar no site específico.</p>
                </div>
            </div>
        </div>
    )
}