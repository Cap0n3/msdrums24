import Grid from '@mui/material/Unstable_Grid2';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Typography from '@mui/material/Typography';

const Banner1_grid = () => {
    return(
        <>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <EmojiObjectsOutlinedIcon sx={{ 
                            fontSize: 40, 
                            stroke: "red",
                            strokeWidth: 0.5 
                        }} 
                    />
                    <Typography component="h3" variant="h6" color="secondary">
                        Expertise
                    </Typography>
                    <Typography variant="body2" color="secondary" fontWeight="fontWeightLight">
                        Cours de guitare donné par un musicien professionnel avec plus de 20 ans d'expérience de la scène et du studio et de l'enseignement.
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <EmojiObjectsOutlinedIcon sx={{ 
                            fontSize: 40, 
                            stroke: "red",
                            strokeWidth: 0.5 
                        }} 
                    />
                    <Typography component="h3" variant="h6" color="secondary">
                        Expertise
                    </Typography>
                    <Typography variant="body2" color="secondary" fontWeight="fontWeightLight">
                        Cours de guitare donné par un musicien professionnel avec plus de 20 ans d'expérience de la scène et du studio et de l'enseignement.
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <EmojiObjectsOutlinedIcon sx={{ 
                            fontSize: 40, 
                            stroke: "red",
                            strokeWidth: 0.5 
                        }} 
                    />
                    <Typography component="h3" variant="h6" color="secondary">
                        Expertise
                    </Typography>
                    <Typography variant="body2" color="secondary" fontWeight="fontWeightLight">
                        Cours de guitare donné par un musicien professionnel avec plus de 20 ans d'expérience de la scène et du studio et de l'enseignement.
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <EmojiObjectsOutlinedIcon sx={{ 
                            fontSize: 40, 
                            stroke: "red",
                            strokeWidth: 0.5 
                        }} 
                    />
                    <Typography component="h3" variant="h6" color="secondary">
                        Expertise
                    </Typography>
                    <Typography variant="body2" color="secondary" fontWeight="fontWeightLight">
                        Cours de guitare donné par un musicien professionnel avec plus de 20 ans d'expérience de la scène et du studio et de l'enseignement.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default Banner1_grid;
