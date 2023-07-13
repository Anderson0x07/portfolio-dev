const About = ({darkTheme}) => {
    return (

        <>
            <div className={`${darkTheme ? 'bg-gray-800 text-white' : 'bg-white'} mt-24 py-28 sm:py-32`} id="about">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-lg font-bold tracking-tight  sm:text-lg mb-10">Hi, I'm Anderson Orozco 👋</h2>
                        <h2 className="text-6xl font-bold tracking-tight  sm:text-7xl mb-10">Junior Full Stack Web Developer</h2>

                        <p className="mt-6 text-lg leading-8 ">
                            I design and code beautiful, simple things, and I love what I do.
                        </p>
                        <p className="mt-6 text-lg leading-8 ">
                            I like to build robust and scalable products with great user experiences.
                        </p>
                        <div className="mx-auto max-w-2xl sm:text-center mt-20">
                            <img src="https://raw.githubusercontent.com/Anderson0x07/portfolio-dev/main/src/assets/hero-devices.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;
