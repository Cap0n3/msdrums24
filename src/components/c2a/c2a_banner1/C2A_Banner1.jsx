import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Al_Detour from "../../../assets/img/Al1_Website24_detour.png";
import styled from 'styled-components';
import Banner1_grid from './Banner1_grid';

const Al_Image = styled('img')(
    ({theme}) => `
        width: 100%;
        height: auto;
        max-width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    ` 
);

const C2A_Banner1 = () => {
    return (
        <Box sx={{
            flexGrow: 1,
            pt: '2rem',
            pl: '2rem',
            pr: '2rem',
            border: '1px solid red',
        }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={4} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '1rem',
                    }}
                >
                    <Typography component="h2" variant="h5" color="secondary" sx={{
                                      
                        }} 
                    gutterBottom>
                        Cours de guitare depuis 2010.
                    </Typography>
                    <Typography variant="body2" color="secondary" fontWeight="fontWeightLight">
                        Cours de guitare donné par un Alex, un musicien professionnel avec plus de 20 ans d'expérience de la scène et du studio et de l'enseignement.

                    </Typography>
                </Grid>
                <Grid xs={6} md={4}>
                    <Al_Image src={Al_Detour} alt="Alex" />
                </Grid>
                <Grid xs={6} md={4}>
                    <Banner1_grid />
                </Grid>
            </Grid>
        </Box>
    );
}

export default C2A_Banner1;