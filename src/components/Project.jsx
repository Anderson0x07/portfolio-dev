import { GitHub, InsertLink } from '@mui/icons-material'
import { styled } from '@mui/material'

const urlImg = 'https://raw.githubusercontent.com/Anderson0x07/portfolio-dev/main/src/assets/'

const ImagenEstilo = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.1)'
  },
  borderRadius: '5%'

})

const handleShowPage = (arr) => {
  if (arr.length > 1) {
    window.open(arr[0], '_blank')
    window.open(arr[1], '_blank')
  } else {
    window.open(arr[0], '_blank')
  }
}

const Project = ({ title, img, tech, github, live, darkTheme, descripcion, imagenes }) => {
  return (

    <div className={`px-1 pt-14 mx-auto lg:px-8 ${darkTheme ? 'text-white' : ''}`}>

      <ImagenEstilo loading='lazy' src={urlImg + img} alt={title} />

      <div className='flex justify-between items-center gap-2 pt-4'>

        <h2 className='text-2xl font-bold tracking-tight'>
          {title}
        </h2>

        <div className='flex flex-wrap lg:flex-nowrap justify-end gap-1'>
          {
            tech.map((item, index) => {
              const isEven = index % 2 === 0;

              const bgColor = isEven ? 'bg-[#f3e8ff]' : 'bg-[#e0f2fe]'
              const textColor = isEven ? 'text-[#9333ea]' : 'text-[#0284c7]'
              return (

                <span key={index}
                  className={`rounded-full px-2.5 py-0.5 text-sm font-semibold whitespace-nowrap ${bgColor} ${textColor}`}
                >
                  {item.nombre}
                </span>
              )
            })
          }
        </div>
      </div>

      {descripcion ? <div className='mt-4 text-justify'> {descripcion} </div> : null}

      {github && live ? 
        <div className='flex items-center gap-8 pt-4'>
          <button
            className={`swing px-6 py-2 border-2 rounded-lg ${darkTheme ? 'text-white border-violet-700 hover:bg-white hover:text-violet-800 hover:border-white' : 'text-violet-800 border-violet-700 hover:bg-violet-800 hover:border-violet-900 hover:text-white'}`}
            onClick={() => handleShowPage(github)}
          >

            <div className='flex items-center gap-2'>
              <GitHub />
              <h2 className='text-lg'>GitHub</h2>
            </div>
          </button>

          <button
            className={`shakeFix px-6 py-2 border-2 rounded-lg ${darkTheme ? 'border-white hover:border-white hover:bg-white hover:text-black' : 'border-gray-700 hover:bg-gray-800 hover:border-gray-900 hover:text-white'}`}
            onClick={() => window.open(live, '_blank')}
          >

            <div className='flex items-center gap-2'>
              <InsertLink />
              <h2 className='text-lg'>Live</h2>
            </div>
          </button>
        </div>

        : null
      }

      {imagenes ? 
        <>
          <div className='mt-4 grid xl:grid-cols-2 md:grid-cols-2 justify-between gap-8'>
            {
              imagenes.map((item, index) => {
                return (
                  <ImagenEstilo key={index} loading='lazy' src={urlImg + item} alt={title} />
                )
              })
            }

          </div>
          <hr class='border border-solid mt-8' />
        </>
        : null
      }

    </div>
  )
}

export default Project
