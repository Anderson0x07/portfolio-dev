import { useState } from "react"
import About from "../components/About"
import Footer from "../components/Footer"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import Tecnologias from "../components/Tecnologias"
import { ArrowUpward } from "@mui/icons-material"
import Projects from "../components/Projects"

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
            <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <About darkTheme={darkTheme} />
            <Projects darkTheme={darkTheme} />
            <Skills darkTheme={darkTheme} />
            <Tecnologias darkTheme={darkTheme} />
            <Contact darkTheme={darkTheme} />
            <Footer />

            <button id="arrowUp" className="scroll-to-top" onClick={scrollToTop}>
                <ArrowUpward className="scroll-to-top-icon" />
            </button>
        </> 
    )
}

export default Home