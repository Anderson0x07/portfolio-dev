import { Email, GitHub, LinkedIn, Public } from '@mui/icons-material';
import { Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    const SocialButtons = () => {

        const socials = [
            { id: 1, logo: <Email />, url: 'mailto:andersonadrianorro@ufps.edu.co' },
            { id: 2, logo: <Public />, url: 'https://anderson-orozco.netlify.com' },
            { id: 3, logo: <LinkedIn />, url: 'https://www.linkedin.com/in/anderson-orozco/' },
            { id: 4, logo: <GitHub />, url: 'https://github.com/Anderson0x07' }
        ]

        return (
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {
                    socials.map((item) => {
                        return (
                            <button className="rounded-full  hover:bg-white hover:text-violet-700 p-2 border" key={item.id} onClick={() => window.open(item.url, '_blank')}>
                                {item.logo}
                            </button>
                        )
                    })
                }

            </Stack>
        );
    };



    return (

        <>
            <Container maxWidth sx={{ backgroundColor: '#6E07F3', color: 'white', pb: 5 }} >

                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                >
                    <img className="h-28 w-auto mt-10" src="/src/assets/logo-footer.png" alt="" />

                    <Typography my={10} variant='h6'>
                        Living, learning, & leveling up one day at a time.
                    </Typography>


                    <SocialButtons />

                    <Typography my={10} variant='h8'>
                        &copy; {new Date().getFullYear()} Anderson Orozco. All rights reserved.
                    </Typography>
                </Stack>



            </Container>

        </>
    )
}

export default Footer