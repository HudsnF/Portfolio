import ProjectCard from "./ProjectCard";
import NavBar from "../navbar/NavBarAll";

export default function Projects() {
    return (

        <div>
            <NavBar />
            <div className=" h-full bg-orange-200 flex flex-col items-center gap-8">
                <div className='w-full flex flex-col items-end justify-end gap-2 pt-10'>
                    <div className='w-3/4 h-1 shadow-md shadow-black bg-orange-500'></div>
                    <div className='w-2/4 h-1 shadow-md shadow-black bg-orange-700'></div>
                </div>
                <ProjectCard />
                <div className='w-full flex flex-col items-start gap-2 pb-20'>
                    <div className='w-2/4 h-1 shadow-md shadow-black bg-orange-700'></div>
                    <div className='w-3/4 h-1 shadow-md shadow-black bg-orange-500'></div>
                </div>
            </div>
        </div>
    )
} 