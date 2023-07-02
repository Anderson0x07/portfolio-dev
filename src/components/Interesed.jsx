import { ChatOutlined } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Interesed() {

    const navigate = useNavigate();

    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">Interested in collaborating with me?</h2>

                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p className="mb-8">
                        I’m always open to discussing product design work or partnership opportunities.
                    </p>
                    <button className="rounded-full text-violet-700 hover:bg-violet-700 hover:text-white py-4 px-8 border-2 border-violet-700" onClick={()=>navigate("/contact")}>
                        <ChatOutlined/> Start a conversation
                    </button>
                </blockquote>


            </div>
        </section>
    )
}

export default Interesed