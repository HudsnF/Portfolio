import Image from "next/image";


export default function AboutMax() {
    return (
        <div className="h-[calc(100vh-80px)] hidden lg:flex flex-col items-center justify-center">
            <div className='w-full pt-8 flex flex-col items-end justify-end gap-2'>
                <div className='w-1/4 h-1 shadow-md shadow-black bg-slate-900'></div>
                <div className='w-1/5 h-1 shadow-md shadow-black bg-yellow-400'></div>
            </div>

            <div className="py-5 flex flex-row-reverse items-center justify-center">
                <div className="shadow-lg shadow-slate-800 rounded-xl">
                    <Image src={"/img/about.jpg"} width={400} height={400} alt="Imagem Hudson F" className="rounded-xl hover:p-2 transition-all duration-300" />
                </div>
                <div className="w-3/6 mr-4 text-xl flex flex-col items-center py-8 text-center text-slate-800 gap-4 px-10 border-t-4 border-b-2 border-slate-800 rounded-full rounded-tl-xl shadow-lg shadow-slate-800">
                    <h1 className="flex flex-col text-3xl ">
                        <span>Olá!</span>
                        Eu sou
                        <span className="text-yellow-500 shadow-md px-2 rounded-md font-bold">Hudson Faria E. Santo</span>
                    </h1>
                    <p className="px-6">
                        Sou desenvolvedor Web Front-end, estudante de Análise e Desenvolvimento de Sistemas e procuro oportunidade de estágio ou desenvolvedor Front-end Jr. Possuo habilidades com <span className="font-bold">HTML, CSS, Javascript, React, NextJs e TailwindCss</span> e, estou em constante aprimoramento, sempre estudando novas tecnologias! Tenho disponibilidade e aptidão para aprender coisas novas sempre que necessário, além de alta capacidade de adaptação.
                    </p>
                </div>
            </div>
        </div>
    )
}