import Image from "next/image";


export default function AboutMax() {
    return (
        <div className="h-full hidden lg:flex flex-row-reverse items-center justify-center">
            <div className="shadow-lg shadow-black rounded-xl">
                <Image src={"/img/about.jpg"} width={400} height={400} alt="Imagem Hudson F" className="rounded-xl hover:p-2 transition-all duration-300" />
            </div>
            <div className="w-3/5 h-3/4 mr-4 text-xl flex flex-col items-center py-8 text-center gap-4 px-10 border-t-4 border-b-2 border-black rounded-full  rounded-tl-xl hover:border-orange-500 transition-all duration-300 shadow-lg shadow-black">
                <h1 className="flex flex-col text-3xl ">
                    <span>Olá!</span>
                    Eu sou
                    <span className="text-orange-800 font-bold">Hudson Faria E. Santo</span>
                </h1>
                <p>
                    Sou desenvolvedor Web Front-end, estudante de Análise e Desenvolvimento de Sistemas e procuro oportunidade de estágio ou desenvolvedor Front-end Jr. Possuo habilidades com <span className="font-bold">HTML, CSS, Javascript, React, NextJs e TailwindCss</span> e, estou em constante aprimoramento, sempre estudando novas tecnologias! Tenho disponibilidade e aptidão para aprender coisas novas sempre que necessário, além de alta capacidade de adaptação.
                </p>
            </div>
        </div>
    )
}