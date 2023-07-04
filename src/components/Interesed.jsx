import { Send } from '@mui/icons-material'

const Interesed = ({ darkTheme }) => {

    const email = 'andersonadrianorro@ufps.edu.co';

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
                    <div class="flex gap-2">
                        <input type="text" disabled="" class="bg-black/5 dark:bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300" value={email}></input>

                        <button className={`rounded-3xl border-2 py-2 px-8 mx-4 ${darkTheme ? 'text-white bg-violet-900 hover:bg-violet-700 hover:text-white border-violet-900' : 'text-violet-700 hover:bg-violet-700 hover:text-white border-violet-700'}`} onClick={() => sendEmail()}>
                            <Send sx={{ fontSize: '2.5rem' }} />
                        </button>

                    </div>
                </blockquote>
            </div>
        </section>
    )
}

export default Interesed