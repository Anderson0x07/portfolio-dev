import { useTheme } from '../context/Context'

const Skills = () => {
  const { darkTheme } = useTheme()

  return (
    <section className={`${darkTheme ? 'bg-gray-800 text-white' : 'text-gray-900'} relative isolate overflow-hidden px-6 py-4 sm:py-8 lg:px-8`}>
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>

        <h2 className='text-center text-3xl font-bold tracking-tight mb-8 sm:text-4xl '>Habilidades</h2>

        <div className='sm:text-center text-lg sm:text-2xl flex flex-col gap-4'>
          <p>
            Tengo una excelente capacidad para trabajar en equipo y comunicarme eficazmente. Buscando una oportunidad desafiante para aplicar mis habilidades y experiencia en un entorno de trabajo colaborativo.
          </p>
          <p>
            Me gusta aprovechar todos los recursos en línea disponibles con afán de ser un desarrollador capaz de encontrar soluciones sofisticadas a problemas complejos y/o robustos
          </p>
        </div>

      </div>
    </section>
  )
}

export default Skills
