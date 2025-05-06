import { useTheme } from '../context/Context'
const urlImg = '/src/assets/'

const About = () => {
  const { darkTheme } = useTheme()

  return (
    <div className={`${darkTheme ? 'bg-gray-800 text-white' : 'bg-white'} pt-28 sm:pt-48`} id='about'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 sm:text-center'>
        <div className='mx-auto max-w-2xl '>
          <h2 className='text-sm font-bold tracking-tight sm:text-lg mb-10'>Hola, soy Anderson Orozco 👋</h2>
          <h2 className='text-5xl font-bold tracking-tight sm:text-7xl mb-10'>Desarrollador Web Full Stack</h2>

        </div>
        <div className='mx-auto flex flex-col items-center gap-4 mt-6 text-normal sm:text-lg w-full'>
          <p>
            Soy un desarrollador de software altamente motivado y apasionado con habilidades en el análisis, diseño, implementación y pruebas de soluciones
            de software escalables, fiables y eficientes.
          </p>
          <p>
            Tengo experiencia en la implementación de buenas prácticas de desarrollo, como la escritura de código limpio y eficiente, la aplicación de pruebas unitarias y la adopción de metodologías ágiles.
          </p>
        </div>
        <div className='mx-auto max-w-2xl mt-20'>
          <img src={urlImg + 'hero-devices.svg'} alt='About img' />
        </div>
      </div>
    </div>
  )
}

export default About
