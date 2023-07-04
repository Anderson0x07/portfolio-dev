import { useState } from "react"
import About from "../components/About"
import Footer from "../components/Footer"
import Info from "../components/Info"
import Interesed from "../components/Interesed"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Tecnologias from "../components/Tecnologias"
import { ArrowUpward } from "@mui/icons-material"

function Home() {

    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>

            <Navbar className='navbar' darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <About darkTheme={darkTheme} />
            <Skills darkTheme={darkTheme} />
            <Info darkTheme={darkTheme} />
            <Tecnologias darkTheme={darkTheme} />
            <Interesed darkTheme={darkTheme} />
            <Footer />

            <button id="arrowUp" className="scroll-to-top" onClick={scrollToTop}>
                <ArrowUpward className="scroll-to-top-icon" />
            </button>
        </>
    )
}

export default Home