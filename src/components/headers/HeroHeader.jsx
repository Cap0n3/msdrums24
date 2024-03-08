import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';


const HeroHeader = () => {
    const [loaded, setLoaded] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setLoaded(true);
        return () => {
            setLoaded(false);
        }
    }, []);

    return (
        <Box
            sx={{
                pt: 30,
                pb: 30,
                mb: 4,
                backgroundColor: 'primary.dark',
                color: 'common.white',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://fastly.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s)', // replace with your image path
                textAlign: 'center',
                overflow: 'hidden'
            }}
        >
            <Slide direction="right" in={loaded} container={containerRef.current} style={{ transitionDelay: loaded ? '500ms' : '0ms' }}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="inherit"
                        gutterBottom
                    >
                        Hero header title
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="inherit"
                        paragraph
                    >
                        Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short.
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Button component={Link} to="/method" color="secondary" variant="outlined" size="large" sx={{ mt: 2 }}>
                            Secondary action
                        </Button>
                    </Box>
                </Container>
            </Slide>
        </Box>
    );
};

export default HeroHeader;
