import { GitHub, InsertLink } from '@mui/icons-material';
import { Avatar, Grid, Stack, Tooltip, styled } from '@mui/material'

const ImagenEstilo = styled('img')({
    width: '32rem',
    height: '20rem',
    transition: 'transform 0.3s ease',
    ':hover': {
        transform: 'scale(1.1)',
    },
    borderRadius: '5%',

});

const handleShowPage = (arr) => {
    if (arr.length > 1) {
        window.open(arr[0], '_blank')
        window.open(arr[1], '_blank')
    } else {
        window.open(arr[0], '_blank')
    }
}

const Project = (props) => {

    return (

        <div className={`px-1 pt-14 mx-auto lg:px-8 ${props.darkTheme ? 'text-white' : ''}`}>

            <ImagenEstilo loading='lazy' src={`https://raw.githubusercontent.com/Anderson0x07/portfolio-dev/main/src/assets/${props.img}`} />

            <div className="flex justify-between items-center pt-4">

                <h2 className='text-2xl font-bold tracking-tight'>
                    {props.nombre}
                </h2>

                <div className='flex'>
                    {
                        props.tecs.map(item => {
                            return (
                                <Tooltip key={item.nombre} title={item.nombre} arrow>
                                    <img src={`https://raw.githubusercontent.com/Anderson0x07/portfolio-dev/main/src/assets/${item.icono}`} 
                                        className="max-h-8 object-contain mx-0.5" />
                                </Tooltip>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex items-center gap-8 pt-4">

                <button className={`px-6 py-2 border-2 rounded-lg  ${props.darkTheme ? 'text-white border-violet-700 hover:bg-white hover:text-violet-800 hover:border-white' : 'text-violet-800 border-violet-700 hover:bg-violet-800 hover:border-violet-900 hover:text-white'}`} onClick={() => handleShowPage(props.github)}>

                    <div className="flex items-center gap-2">
                        <GitHub />
                        <h2 className='text-lg'>GitHub</h2>
                    </div>
                </button>
                <button className={`px-6 py-2 border-2 rounded-lg  ${props.darkTheme ? 'border-white hover:border-white hover:bg-white hover:text-black' : 'border-gray-700 hover:bg-gray-800 hover:border-gray-900 hover:text-white'}`} onClick={() => window.open(props.public, '_blank')}>

                    <div className="flex items-center gap-2">
                        <InsertLink />
                        <h2 className='text-lg'>Live</h2>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Project;