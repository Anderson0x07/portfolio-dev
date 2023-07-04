import { Container, Grid, } from "@mui/material";
import Project from "./Project";




const Projects = () => {

    return (
        <Container>
            <Grid container spacing={3} sx={{ my: 5 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Project
                        nombre="Bodyhealth Web"
                        github={['https://github.com/Anderson0x07/bodyhealth-backend/tree/development', 'https://github.com/Anderson0x07/bodyhealth-frontend/tree/development']}
                        public="https://bodyhealth-web.netlify.app/"
                        img="bodyhealth.png"
                        tecs={['react-w.png', 'spring-boot.png']}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Project
                        nombre="Tasks App"
                        github={["https://github.com/Anderson0x07/task-app-react"]}
                        public="https://anderson0x07.github.io/task-app-react/"
                        img="tasks-app.png"
                        tecs={['react-w.png', 'js.png']}
                    />

                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Project
                        nombre="Coinmarket App"
                        github={["https://github.com/Anderson0x07/coinmarket-app-angular"]}
                        public="https://coinmarket-app.netlify.app/"
                        img="coinmarket-app.png"
                        tecs={['angular.png', 'mui.png']}
                    />

                </Grid>
            </Grid>
        </Container>
    );
};

export default Projects;