import About from "../components/About"
import Footer from "../components/Footer"
import Info from "../components/Info"
import Interesed from "../components/Interesed"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Tecnologias from "../components/Tecnologias"

function Home() {
    return (
        <>
            <Navbar />
            <About />
            <Skills />
            <Info />
            <Tecnologias />
            <Interesed />
            <Footer />
        </>
    )
}

export default Home