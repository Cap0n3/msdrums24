import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import mgr_layout from '../../theme/layout';

import { Fade } from '@mui/material';


const HeroHeader = () => {
    const [loaded, setLoaded] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const windowSize = useWindowSize();

    useEffect(() => {
        setLoaded(true);
        return () => {
            setLoaded(false);
        }
    }, []);

    return (
        <Fade in={loaded} timeout={3000}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: `${windowSize.innerHeight - mgr_layout.navHeight}px`,
                    minHeight: '500px',
                    backgroundColor: 'primary.dark',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: 'url(https://fastly.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s)', // replace with your image path
                    textAlign: 'center',
                    overflow: 'hidden'
                }}
            >
                <Slide direction="left" in={loaded} container={containerRef.current} style={{ transitionDelay: loaded ? '2000ms' : '0ms' }}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="secondary"
                            gutterBottom
                        >
                            Hero header title
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="secondary"
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
        </Fade>
    );
};

export default HeroHeader;
