
import NavBar from "../navbar/NavBarAll";
import AboutMax from "./AboutMax";
import AboutMin from "./AboutMin";

export default function About() {
    return (
        <>
            <NavBar />
            <div className="bg-neutral-100 h-[calc(100vh-80px)]">
                <AboutMax />
                <AboutMin />
            </div>
        </>
    )
} 