import { Container, Grid } from '@mui/material'
import Project from './Project'
import { useTheme } from '../context/Context'
import { useState } from 'react'

const Projects = () => {
  const { darkTheme } = useTheme()

  const [projectsEnum] = useState([
    {
      title: 'Bodyhealth Web',
      github: [
        'https://github.com/Anderson0x07/bodyhealth-backend/tree/development',
        'https://github.com/Anderson0x07/bodyhealth-frontend/tree/development'
      ],
      live: 'https://bodyhealth-web.netlify.app/',
      img: 'bodyhealth.webp',
      tech: [
        { nombre: 'React.js', icono: darkTheme ? 'react-dark.webp' : 'react.webp' },
        { nombre: 'Springboot', icono: 'spring-boot.webp' },
        { nombre: 'Material UI', icono: 'mui.webp' }
      ],
      descripcion: 'Aplicación web para la gestión de procesos del gimnasio bodyhealth de la ciudad de Cúcuta, gestión de inventarios, ventas, clientes, empleados y más. Creada con React.js y Springboot.'
    },
    {

      title: 'Tasks App MERN',
      github: ['https://github.com/Anderson0x07/tasks-auth'],
      live: 'https://tasks-app-express.netlify.app/',
      img: 'tasks-auth.webp',
      tech: [
        { nombre: 'React.js', icono: darkTheme ? 'react-dark.webp' : 'react.webp' },
        { nombre: 'Node.js', icono: 'node.webp' },
        { nombre: 'MongoDB', icono: 'mongo.webp' }
      ],
      descripcion: 'Web de gestión de tareas, que permite a los usuarios registrarse, iniciar sesión, crear, editar y eliminar tareas. Creada con React.js, Node.js y MongoDB.'
    },
    {
      title: 'Restaurante App',
      img: 'restaurante-1.png',
      tech: [
        { nombre: 'Angular', icono: 'angular.webp' },
        { nombre: 'SpringBoot', icono: 'spring-boot.webp' },
        { nombre: 'MySQL', icono: 'mysql.webp' }
      ],
      descripcion: 'Aplicación web para la gestión de procesos y ventas del restaurante Caldero Chorreante, que permite a meseros y administradores realizar diferentes actividades de forma sencilla y rápida.',
      imagenes: ['restaurante-5.png', 'restaurante-2.png', 'restaurante-3.png', 'restaurante-4.png']
    },
    {
      title: 'Droguería App',
      github: ['https://github.com/Anderson0x07/medicamentos'],
      live: 'https://medicamentos-micro.netlify.app/',
      img: 'drogueria.png',
      tech: [
        { nombre: 'Angular', icono: 'angular.webp' },
        { nombre: 'PrimeNG', icono: 'primeng.webp' },
        { nombre: 'MongoDB', icono: 'mongo.webp' }
      ],
      descripcion: 'Aplicación web para la gestión de inventarios de una droguería, que permite a los empleados realizar diferentes actividades de forma sencilla y rápida.'
    },
    {
      title: 'Expense Manager',
      github: ['https://github.com/Anderson0x07/expense-manager'],
      live: 'https://expense-income-manager.netlify.app/',
      img: 'expense-manager.webp',
      tech: [
        { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
        { nombre: 'Node.js', icono: 'node.webp' },
        { nombre: 'Tailwind', icono: 'tailwind.webp' }
      ],
      descripcion: 'Sitio web que permite a los usuarios llevar un control de sus gastos e ingresos, que permite añadirlos, editarlos y eliminarlos. Creada con React.js y Node.js.'
    },
    {
      title: 'Coinmarket App',
      github: ['https://github.com/Anderson0x07/coinmarket-app-angular'],
      live: 'https://coinmarket-app.netlify.app/',
      img: 'coinmarket-app.webp',
      tech: [
        { nombre: 'Angular', icono: 'angular.webp' },
        { nombre: 'TypeScript', icono: 'typescript.svg' },
        { nombre: 'Material UI', icono: 'mui.webp' }
      ],
      descripcion: 'Sitio web que permite a los usuarios ver el precio de las criptodivisas en tiempo real, que permite a los usuarios ver el precio de las criptodivisas más importantes del mercado.'
    },
    {
      title: 'Tasks App',
      github: ['https://github.com/Anderson0x07/task-app-react'],
      live: 'https://anderson0x07.github.io/task-app-react/',
      img: 'tasks-app.webp',
      tech: [
        { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
        { nombre: 'JavaScript', icono: 'js.webp' },
        { nombre: 'Tailwind', icono: 'tailwind.webp' }
      ],
      descripcion: 'Sitio web de gestión de tareas, que permite a los usuarios crear, editar y eliminar tareas. Creado con React.js'
    }

  ])

  return (
    <div className={`${darkTheme ? 'bg-gray-800' : ''} pt-28 pb-10 sm:pb-20`} id='projects'>
      <div className='mx-auto max-w-8xl px-4 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className={`text-3xl font-bold tracking-tight ${darkTheme ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>Algunos proyectos que he apoyado y desarrollado</h2>
        </div>
        <Container>
          <Grid container spacing={3} sx={{ py: 5 }}>

            { 
              projectsEnum.map((project, index) => (
                <Grid key={index} item xs={12} sm={project.title !== 'Restaurante App' ? 6 : 12} md={project.title !== 'Restaurante App' ? 6 : 12}>
                  <Project
                    title={project.title}
                    github={project.github}
                    live={project.live}
                    img={project.img}
                    tech={project.tech}
                    darkTheme={darkTheme}
                    descripcion={project.descripcion}
                    imagenes={project.imagenes}
                  />
                </Grid>
              ))
            }
        
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Projects
