import { Container, Grid } from '@mui/material'
import Project from './Project'
import { useTheme } from '../context/Context'

const Projects = () => {
  const { darkTheme } = useTheme()

  return (
    <div className={`${darkTheme ? 'bg-gray-800' : ''} pt-28 pb-10 sm:pb-20`} id='projects'>
      <div className='mx-auto max-w-8xl px-4 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className={`text-3xl font-bold tracking-tight ${darkTheme ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>Some projects that I have supported and developed</h2>
        </div>
        <Container>
          <Grid container spacing={3} sx={{ py: 5 }}>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Bodyhealth Web'
                github={['https://github.com/Anderson0x07/bodyhealth-backend/tree/development', 'https://github.com/Anderson0x07/bodyhealth-frontend/tree/development']}
                live='https://bodyhealth-web.netlify.app/'
                img='bodyhealth.webp'
                tech={
                    [
                      { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
                      { nombre: 'Springboot', icono: 'spring-boot.webp' },
                      { nombre: 'Material UI', icono: 'mui.webp' }
                    ]
                }
                darkTheme={darkTheme}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Tasks App MERN'
                github={['https://github.com/Anderson0x07/tasks-auth']}
                live='https://tasks-app-express.netlify.app/'
                img='tasks-auth.webp'
                tech={
                    [
                      { nombre: 'React JS', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
                      { nombre: 'Node JS', icono: 'node.webp' },
                      { nombre: 'MongoDB', icono: 'mongo.webp' }
                    ]
                }
                darkTheme={darkTheme}
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Expense-Income Manager'
                github={['https://github.com/Anderson0x07/expense-manager']}
                live='https://expense-income-manager.netlify.app/'
                img='expense-manager.webp'
                tech={
                    [
                      { nombre: 'React JS', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
                      { nombre: 'Node JS', icono: 'node.webp' },
                      { nombre: 'Tailwind', icono: 'tailwind.webp' }
                    ]
                }
                darkTheme={darkTheme}
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Coinmarket App'
                github={['https://github.com/Anderson0x07/coinmarket-app-angular']}
                live='https://coinmarket-app.netlify.app/'
                img='coinmarket-app.webp'
                tech={
                    [
                      { nombre: 'Angular', icono: 'angular.webp' },
                      { nombre: 'TypeScript', icono: 'typescript.svg' },
                      { nombre: 'Material UI', icono: 'mui.webp' }
                    ]
                }
                darkTheme={darkTheme}
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Tasks App'
                github={['https://github.com/Anderson0x07/task-app-react']}
                live='https://anderson0x07.github.io/task-app-react/'
                img='tasks-app.webp'
                tech={
                    [
                      { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
                      { nombre: 'JavaScript', icono: 'js.webp' },
                      { nombre: 'Tailwind', icono: 'tailwind.webp' }
                    ]
                }
                darkTheme={darkTheme}
              />

            </Grid>

          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Projects
