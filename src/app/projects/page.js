import ProjectCard from "./ProjectCard";
import NavBar from "../navbar/NavBarAll";

export default function Projects() {
    return (

        <div>
            <NavBar />
            <div className=" h-full bg-neutral-100 flex flex-col items-center gap-8">
                <div className='w-full pt-8 flex flex-col items-end justify-end gap-2'>
                    <div className='w-1/4 h-1 shadow-md shadow-black bg-slate-900'></div>
                    <div className='w-1/5 h-1 shadow-md shadow-black bg-yellow-400'></div>
                </div>
                <ProjectCard />
                <div className='w-full pb-8 flex flex-col items-start justify-end gap-2'>
                    <div className='w-1/5 h-1 shadow-md shadow-black bg-yellow-400'></div>
                    <div className='w-1/4 h-1 shadow-md shadow-black bg-slate-900'></div>

                </div>
            </div>
        </div>
    )
} 