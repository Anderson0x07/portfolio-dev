import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { Container, Stack } from '@mui/material'

const urlImg = '/src/assets/'

const SocialButtons = () => {
  const socials = [
    {
      id: 'Email',
      logo: <Email />,
      url: 'mailto:anderson07rolon@gmail.com'
    },
    {
      id: 'LinkedIn',
      logo: <LinkedIn />,
      url: 'https://www.linkedin.com/in/anderson-orozco/'
    },
    {
      id: 'GitHub',
      logo: <GitHub />,
      url: 'https://github.com/Anderson0x07'
    }
  ]

  return (
    <div className='flex justify-center items-center gap-8 '>
      {socials.map((item) => {
        return (
          <button
            aria-label={item.id}
            className='rounded-full transition-colors ease-in-out duration-300 hover:bg-white hover:text-violet-700 p-2 border'
            key={item.id}
            onClick={() => window.open(item.url, '_blank')}
          >
            {item.logo}
          </button>
        )
      })}
    </div>
  )
}

const Footer = () => {
  return (
    <Container
      maxWidth=''
      sx={{ backgroundColor: '#6E07F3', color: 'white', pb: 5 }}
    >
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={4}
        className='text-center'
      >
        <img
          loading='lazy'
          className='h-28 w-auto mt-10'
          src={urlImg + 'logo-footer.webp'}
          alt='Footer img'
        />

        <h1 className='my-10 text-xl'>
          Viviendo, aprendiendo y subiendo de nivel día a día.
        </h1>

        <SocialButtons />

        <p className='my-10'>
          &copy; {new Date().getFullYear()} Anderson Orozco. Todos los derechos reservados.
        </p>
      </Stack>
    </Container>
  )
}

export default Footer
