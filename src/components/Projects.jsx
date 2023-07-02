import { Box, Card, Container, Grid, Stack, Typography, styled } from "@mui/material";

const ImagenEstilo = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    ':hover': {
        transform: 'scale(1.1)',
    },
});

const Projects = () => {
    return (
        <Container fixed>
            <Grid container spacing={3} sx={{my: 5}}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <Box sx={{ pt: '100%', position: 'relative' }}>
                            <ImagenEstilo src={"/src/assets/bodyhealth.png"} onClick={() => console.log("Hola mundo")} />
                        </Box>
                        <Stack spacing={2} sx={{ p: 3 }}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography variant="h6" >
                                    Bodyhealth web
                                </Typography>
                            </Stack>
                        </Stack>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <Box sx={{ pt: '100%', position: 'relative' }}>
                            <ImagenEstilo src={"/src/assets/tasks-app.png"} onClick={() => console.log("Hola mundo")} />
                        </Box>
                        <Stack spacing={2} sx={{ p: 3 }}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography variant="h6">
                                    Tasks App
                                </Typography>
                                <Typography variant="caption">
                                    React, JS
                                </Typography>
                            </Stack>
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <Box sx={{ pt: '100%', position: 'relative' }}>
                            <ImagenEstilo src={"/src/assets/coinmarket-app.png"} onClick={() => console.log("Hola mundo")} />
                        </Box>
                        <Stack spacing={2} sx={{ p: 3 }}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography variant="h6">
                                    Coinmarket App
                                </Typography>
                                <Typography variant="caption">
                                    Angular, MUI
                                </Typography>
                            </Stack>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>


        </Container>
    );
};

export default Projects;