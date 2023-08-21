import HomeMax from "./HomeMax";
import HomeMin from "./HomeMin";
import NavBar from "../navbar/NavBarAll";


export default function Home() {
    return (
        <div>
            <NavBar />
            <div className="bg-neutral-100">
                <HomeMax />
                <HomeMin />
            </div>
        </div>
    )

}