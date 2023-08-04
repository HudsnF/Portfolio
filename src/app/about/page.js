
import NavBar from "../navbar/NavBarAll";
import AboutMax from "./AboutMax";
import AboutMin from "./AboutMin";

export default function About() {
    return (
        <>
            <NavBar />
            <div className="bg-orange-200 h-[calc(100vh-80px)]">
                <AboutMax />
                <AboutMin />
            </div>
        </>
    )
} 