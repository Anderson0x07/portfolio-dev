import { GitHub, Public } from '@mui/icons-material';
import { Avatar, Box, Card, Stack, styled } from '@mui/material'
import React, { useState } from 'react'

const Contenedor = styled('div')({
    top: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'transform 0.3s ease',
    ':hover': {
        transform: 'scale(1.1)',
    },
});

const ImagenEstilo = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 1, // Ajusta la opacidad inicial de la imagen
    transition: 'opacity 0.3s ease', // Transición de la opacidad de la imagen
    [`${Contenedor}:hover &`]: { // Solo aplica la opacidad al hacer hover en el Contenedor
        opacity: 0.4,
    },

});

const Botones = styled('div')(({ mostrar }) => ({
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: mostrar ? 1 : 0,
    transition: 'opacity 0.3s ease',
    width: 250,
}));

function Project(props) {

    const [mostrarBoton, setMostrarBoton] = useState(false);

    const handleShowPage = (arr) => {

        if (arr.length > 1) {
            window.open(arr[0], '_blank')
            window.open(arr[1], '_blank')
        } else {
            window.open(arr[0], '_blank')
        }

    }


    return (
        <Card>
            <Box sx={{ pt: '100%', position: 'relative' }} onMouseEnter={() => setMostrarBoton(true)} onMouseLeave={() => setMostrarBoton(false)}>
                <Contenedor>
                    <ImagenEstilo src={`https://raw.githubusercontent.com/Anderson0x07/portfolio-dev/main/src/assets/${props.img}`} />

                    <Botones mostrar={mostrarBoton}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">

                            <button className="rounded-full text-white bg-violet-700 border-2 border-violet-700 hover:bg-violet-900 hover:border-violet-900  py-1 px-2 " onClick={() => handleShowPage(props.github)}>
                                <GitHub /> GitHub
                            </button>
                            <button className="rounded-full text-white bg-gray-700 border-2 border-gray-700  hover:bg-gray-900 hover:border-gray-900 hover:text-white py-1 px-2 " onClick={() => window.open(props.public, '_blank')}>
                                <Public /> Site Public
                            </button>
                        </Stack>
                    </Botones>
                </Contenedor>
            </Box>
            <Stack spacing={2} sx={{ p: 3 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <h2 className="text-xl font-bold">{props.nombre}</h2>
                    <div style={{ display: 'flex' }}>
                        <Avatar src={`https://raw.githubusercontent.com/Anderson0x07/portfolio-dev/main/src/assets/${props.tecs[0]}`} sx={{ width: 24, height: 24, mr: 1, bgcolor: "black" }} variant="square" />
                        <Avatar src={`https://raw.githubusercontent.com/Anderson0x07/portfolio-dev/main/src/assets/${props.tecs[1]}`} sx={{ width: 24, height: 24, bgcolor: "black" }} variant="square" />

                    </div>
                </Stack>
            </Stack>
        </Card>
    )
}

export default Project