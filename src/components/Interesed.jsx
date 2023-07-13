import { Send } from '@mui/icons-material'

const Interesed = ({ darkTheme }) => {

    const email = 'anderson07rolon@gmail.com';

    const sendEmail = () => {

        const mailtoUrl = `mailto:${email}`

        window.open(mailtoUrl);
    };

    return (
        <section id='contact' className={`${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} relative isolate overflow-hidden px-6 py-12 sm:py-32 lg:px-8`}>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <h2 className="text-center text-2xl font-bold tracking-tight  sm:text-3xl mb-8">Interested in collaborating with me?</h2>

                <blockquote className="text-center text-xl font-semibold leading-8  sm:text-2xl sm:leading-9">
                    <p className="mb-8">
                        I’m always open to discussing product design work or partnership opportunities.
                    </p>
                    <div className="flex gap-2">
                        <input type="text" readOnly className={`${darkTheme ? 'bg-slate-600 text-white border-white' : 'text-slate-600'} bg-black/5 w-full py-1.5 px-3 rounded-lg grid place-items-center  `} value={email}></input>

                        <button className={`rounded-3xl border-2 py-2 px-4 mx-2 ${darkTheme ? 'text-white bg-violet-900 hover:bg-violet-700 hover:text-white border-violet-900' : 'text-violet-700 hover:bg-violet-700 hover:text-white border-violet-700'}`} onClick={() => sendEmail()}>
                            <Send sx={{ fontSize: '2 rem' }} />
                        </button>

                    </div>
                </blockquote>
            </div>
        </section>
    )
}

export default Interesed