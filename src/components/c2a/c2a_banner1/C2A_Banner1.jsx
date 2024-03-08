import { useEffect, useState, useRef } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Al_Detour from "../../../assets/img/Al1_Website24_detour.png";
import styled from 'styled-components';
import Banner1_grid from './Banner1_grid';
import Slide from '@mui/material/Slide';


const Al_Image = styled('img')(
    ({theme}) => `
        width: 100%;
        height: auto;
        max-width: 100%;
        display: block;
    ` 
);

const C2A_Banner1 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const leftCell_container  = useRef(null);
    const middleCell_container  = useRef(null);
    const rightCell_container  = useRef(null);

    useEffect(() => {
        setIsVisible(true);

        return () => {
            setIsVisible(false);
        }
    }
    , []);

    return (
        <Box sx={{
            flexGrow: 1,
            pt: '2rem',
            pl: '2rem',
            pr: '2rem',
        }}>
            <Grid container spacing={2}>
                <Grid 
                    xs={12} 
                    md={4} 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '1rem',
                        overflow: 'hidden',
                    }}
                    ref={leftCell_container}
                >
                    <Slide direction="down" in={isVisible} container={leftCell_container.current} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
                        <Box>
                            <Typography component="h2" variant="h5" color="secondary" gutterBottom>
                                Cours de guitare depuis 2010.
                            </Typography>
                            <Typography variant="body2" color="secondary" fontWeight="fontWeightLight">
                                Cours de guitare donné par un Alex, un musicien professionnel avec plus de 20 ans d'expérience de la scène et du studio et de l'enseignement.
                            </Typography>
                        </Box>
                    </Slide>
                </Grid>
                <Grid xs={6} md={4} ref={middleCell_container} sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        overflow: 'hidden',
                    }}
                >
                    <Slide direction="up" in={isVisible} container={middleCell_container.current} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
                        <Al_Image src={Al_Detour} alt="Alex" />
                    </Slide>
                </Grid>
                <Grid 
                    xs={6} 
                    md={4} 
                    ref={rightCell_container}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        overflow: 'hidden',
                    }} 
                >
                    <Slide direction="down" in={isVisible} container={rightCell_container.current} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
                        <Box>
                            <Banner1_grid />
                        </Box>
                    </Slide>
                </Grid>
            </Grid>
        </Box>
    );
}

export default C2A_Banner1;