import { Tooltip } from '@mui/material'
import { useTheme } from '../context/Context'

const urlImg = '/src/assets/'

const Technologies = () => {
  const { darkTheme } = useTheme()

  const technologies = [
    { url: 'angular.webp', alt: 'Angular' },
    { url: 'primeng.webp', alt: 'PrimeNG' },
    { url: `${darkTheme ? 'java-dark.webp' : 'java.webp'}`, alt: 'Java' },
    { url: 'spring-boot.webp', alt: 'Springboot' },
    { url: `${darkTheme ? 'react-dark.webp' : 'react.webp'}`, alt: 'React.js' },
    { url: `${darkTheme ? 'next-dark.webp' : 'next.webp'}`, alt: 'Next.js' },
    { url: 'js.webp', alt: 'Javascript' },
    { url: 'typescript.webp', alt: 'Typescript' },
    { url: 'tailwind.webp', alt: 'Tailwind' },
    { url: 'primeflex.webp', alt: 'Primeflex' },
    { url: 'flowbite.webp', alt: 'Flowbite' },
    { url: 'mui.webp', alt: 'Material UI' },
    { url: 'node.webp', alt: 'Node.js' },
    { url: 'html.webp', alt: 'HTML' },
    { url: 'css.svg', alt: 'CSS' },
    { url: `${darkTheme ? 'github-dark.webp' : 'github.webp'}`, alt: 'Github' },
    { url: 'bootstrap.webp', alt: 'Bootstrap' }
  ]

  return (
    <div
      className={`${
        darkTheme ? 'bg-gray-800 text-white' : 'text-gray-900'
      } py-20 sm:py-28`}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-3xl font-bold tracking-tight sm:text-4xl'>
          Tecnologías
        </h2>
        <div className='mx-auto mt-10 w-full flex flex-wrap justify-center items-center gap-12 '>
          {technologies.map((technology) => {
            return (
              <Tooltip key={technology.alt} title={technology.alt} arrow>
                <img
                  loading='lazy'
                  key={technology.alt}
                  className='max-h-12 object-contain'
                  src={urlImg + technology.url}
                  alt={technology.alt}
                />
              </Tooltip>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Technologies
