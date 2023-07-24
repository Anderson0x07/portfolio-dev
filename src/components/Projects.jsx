import { Container, Grid } from "@mui/material";
import Project from "./Project";

const Projects = ({ darkTheme }) => {
    return (
        <div className={`${darkTheme ? 'bg-gray-800' : ''} pt-28 pb-10 sm:pb-20`} id="projects">
            <div className="mx-auto max-w-8xl px-4 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className={`text-3xl font-bold tracking-tight ${darkTheme ? 'text-white' : 'text-gray-900'} sm:text-4xl`} >Some projects that I have supported and developed</h2>
                </div>
                <Container  >
                    <Grid container spacing={3} sx={{ py: 5 }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Project
                                nombre="Bodyhealth Web"
                                github={['https://github.com/Anderson0x07/bodyhealth-backend/tree/development', 'https://github.com/Anderson0x07/bodyhealth-frontend/tree/development']}
                                public="https://bodyhealth-web.netlify.app/"
                                img="bodyhealth.png"
                                tecs={
                                    [
                                        { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.png'}` },
                                        { nombre: 'Springboot', icono: 'spring-boot.png' },
                                        { nombre: 'Material UI', icono: 'mui.png' },
                                    ]
                                }
                                darkTheme={darkTheme}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Project
                                nombre="Tasks App MERN"
                                github={["https://github.com/Anderson0x07/tasks-auth"]}
                                public="https://tasks-app-express.netlify.app/"
                                img="tasks-auth.png"
                                tecs={
                                    [
                                        { nombre: 'React JS', icono: `${darkTheme ? 'react-dark.webp' : 'react.png'}` },
                                        { nombre: 'Node JS', icono: 'node.png' },
                                        { nombre: 'MongoDB', icono: 'mongo.png' },
                                    ]
                                }
                                darkTheme={darkTheme}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Project
                                nombre="Expense-Income Manager"
                                github={["https://github.com/Anderson0x07/expense-manager"]}
                                public="https://expense-income-manager.netlify.app/"
                                img="expense-manager.png"
                                tecs={
                                    [
                                        { nombre: 'React JS', icono: `${darkTheme ? 'react-dark.webp' : 'react.png'}` },
                                        { nombre: 'Node JS', icono: 'node.png' },
                                        { nombre: 'Tailwind', icono: 'tailwind.png' },
                                    ]
                                }
                                darkTheme={darkTheme}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Project
                                nombre="Coinmarket App"
                                github={["https://github.com/Anderson0x07/coinmarket-app-angular"]}
                                public="https://coinmarket-app.netlify.app/"
                                img="coinmarket-app.png"
                                tecs={
                                    [
                                        { nombre: 'Angular', icono: 'angular.png' },
                                        { nombre: 'TypeScript', icono: 'typescript.svg' },
                                        { nombre: 'Material UI', icono: 'mui.png' },
                                    ]
                                }
                                darkTheme={darkTheme}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Project
                                nombre="Tasks App"
                                github={["https://github.com/Anderson0x07/task-app-react"]}
                                public="https://anderson0x07.github.io/task-app-react/"
                                img="tasks-app.png"
                                tecs={
                                    [
                                        { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.png'}` },
                                        { nombre: 'JavaScript', icono: 'js.png' },
                                        { nombre: 'Tailwind', icono: 'tailwind.png' },
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

export default Projects;