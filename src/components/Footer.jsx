import { Email, GitHub, LinkedIn, Public } from '@mui/icons-material';
import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const SocialButtons = () => {

        const socials = [
            { id: 'Email', logo: <Email />, url: 'mailto:andersonadrianorro@ufps.edu.co' },
            { id: 'Web', logo: <Public />, url: 'https://anderson-orozco.netlify.com' },
            { id: 'LinkedIn', logo: <LinkedIn />, url: 'https://www.linkedin.com/in/anderson-orozco/' },
            { id: 'GitHub', logo: <GitHub />, url: 'https://github.com/Anderson0x07' }
        ]

        return (
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
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
        <Container maxWidth='' sx={{ backgroundColor: '#6E07F3', color: 'white', pb: 5 }} >

            <Stack direction="column" justifyContent="center" alignItems="center" spacing={4}>
                <img loading="lazy" className="h-28 w-auto mt-10" src="https://raw.githubusercontent.com/Anderson0x07/portfolio-dev/main/src/assets/logo-footer.png" alt="" />

                <Typography my={10} variant='h6'>
                    Living, learning, & leveling up one day at a time.
                </Typography>

                <SocialButtons />

                <Typography my={10} variant='h8'>
                    &copy; {new Date().getFullYear()} Anderson Orozco. All rights reserved.
                </Typography>
            </Stack>
        </Container>
    )
}

export default Footer