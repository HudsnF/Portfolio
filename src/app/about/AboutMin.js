export default function AboutMin() {
    return (
        <div className="lg:hidden h-full flex flex-col gap-10 items-center justify-start py-20">
            <div className='w-full flex flex-col items-end justify-end gap-2'>
                <div className='w-3/4 h-1 shadow-md shadow-black bg-orange-500'></div>
                <div className='w-2/4 h-1 shadow-md shadow-black bg-orange-700'></div>
            </div>
            <div className="w-3/4 flex flex-col items-center text-center border-2 border-orange-950 rounded-xl bg-orange-300 shadow-lg shadow-black overflow-y-scroll scrollbar-none">
                <h1 className="flex flex-col my-2">
                    <span className="text-xl font-semibold">Olá!</span>
                    Eu sou
                    <span className="text-orange-800 font-bold text-xl">Hudson Faria E. Santo</span>
                </h1>
                <p className="px-6">
                    Sou desenvolvedor Web Front-end, estudante de Análise e Desenvolvimento de Sistemas e procuro oportunidade de estágio ou desenvolvedor Frontiend Jr. Possuo habilidades com <span className="font-bold">HTML, CSS, Javascript, React, NextJs e TailwindCss</span> e, estou em constante aprimoramento, sempre estudando novas tecnologias! Tenho disponibilidade e aptidão para aprender coisas novas sempre que necessário, além de alta capacidade de adaptação.
                </p>
            </div>
            <div className='w-full flex flex-col items-start gap-2 pb-20'>
                <div className='w-2/4 h-1 shadow-md shadow-black bg-orange-700'></div>
                <div className='w-3/4 h-1 shadow-md shadow-black bg-orange-500'></div>
            </div>
        </div>
    )
}