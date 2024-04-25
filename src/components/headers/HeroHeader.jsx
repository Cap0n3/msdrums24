import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import website_layout from '../../theme/layout';
import banner from "../../assets/img/template_banner.png";
import { Fade } from '@mui/material';


const HeroHeader = ({title, description, call2Action}) => {
    const theme = useTheme();
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
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'center',
                    height: `${windowSize.innerHeight - website_layout.navHeight}px`,
                    minHeight: '500px',
                    backgroundColor: theme.palette.background.default,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${banner})`, 
                    overflow: 'hidden'
                }}
            >
                <Slide direction="left" in={loaded} container={containerRef.current} style={{ transitionDelay: loaded ? '2000ms' : '0ms' }}>
                    <Box maxWidth="sm" sx={{ marginLeft: "8%" }}>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="left"
                            sx={{ color: theme.palette.text.primary }}
                            gutterBottom
                        >
                            {title}
                        </Typography>
                        <Typography
                            component="h2"
                            variant="p"
                            align="left"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            {description}
                        </Typography>
                        <Box
                            sx={{
                                mt: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'start',
                            }}
                        >
                            <Button component={Link} to="/method" color="primary" variant="outlined" size="large" sx={{ mt: 2 }}>
                                {call2Action}
                            </Button>
                        </Box>
                    </Box>
                </Slide>
            </Box>
        </Fade>
    );
};

export default HeroHeader;
