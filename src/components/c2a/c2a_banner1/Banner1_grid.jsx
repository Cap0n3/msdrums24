import Grid from '@mui/material/Unstable_Grid2';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import Typography from '@mui/material/Typography';

const Banner1_grid = () => {
    return(
        <>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <EmojiObjectsOutlinedIcon sx={{ 
                            fontSize: 40, 
                            stroke: "red",
                            strokeWidth: 0.5, 
                        }} 
                    />
                    <Typography component="h3" variant="h6" color="secondary" align="center">
                        Expertise
                    </Typography>
                    <Typography variant="body2" color="secondary" fontWeight="fontWeightLight" align="center">
                        Cours de guitare donné par un professeur avec plus de 20 ans d'expérience de la scène, du studio et de l'enseignement.
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <MusicNoteOutlinedIcon sx={{ 
                            fontSize: 40, 
                            stroke: "red",
                            strokeWidth: 0.5,  
                        }} 
                    />
                    <Typography component="h3" variant="h6" color="secondary" align="center">
                        Expérience
                    </Typography>
                    <Typography variant="body2" color="secondary" fontWeight="fontWeightLight" align="center">
                        Expérience de la scène, du studio et de l'enseignement. MAO (Musique Assistée par Ordinateur) et enregistrement.
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <ContactSupportOutlinedIcon sx={{ 
                            fontSize: 40, 
                            stroke: "red",
                            strokeWidth: 0.5 
                        }} 
                    />
                    <Typography component="h3" variant="h6" color="secondary" align="center">
                        Support pédagogique
                    </Typography>
                    <Typography variant="body2" color="secondary" fontWeight="fontWeightLight" align="center">
                        Support pédagogique de qualité pour un apprentissage rapide et efficace.
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <CloudOutlinedIcon sx={{ 
                            fontSize: 40, 
                            stroke: "red",
                            strokeWidth: 0.5 
                        }} 
                    />
                    <Typography component="h3" variant="h6" color="secondary" align="center">
                        Cloud
                    </Typography>
                    <Typography variant="body2" color="secondary" fontWeight="fontWeightLight" align="center">
                        Cours et support pédagogique disponibles sur le cloud à tout moment.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default Banner1_grid;
