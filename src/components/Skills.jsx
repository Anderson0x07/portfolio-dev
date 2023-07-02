import Projects from "./Projects";

export default function Skills() {
    return (
        <>
            <div className="bg-white py-24 sm:pb-20" id="projects">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Some projects that I have supported and developed</h2>
                    </div>
                    <Projects/>
                </div>
            </div>
        </>
    )
}
