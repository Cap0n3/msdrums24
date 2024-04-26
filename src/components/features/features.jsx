import React from 'react';
import { useTheme } from '@emotion/react';
import { darken } from 'polished';
import { Container, Box, Typography, Slide, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import FeatBox from './featBox';
import { features } from '../../data/home/features';

const Features = () => {
    const theme = useTheme();

    const [refTitleFade, inViewTitleFade] = useInView({
        triggerOnce: true,
        threshold: 0.8 ,
        delay: 200
    });

    const [refTitleSlide, inViewTitle] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200 // For timer when re-rendering (see App.jsx)
    });

    const [refFeatBox, inViewFeatBox] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200,
    });

    return (
        <Box py={4} sx={{ flexGrow: 1, backgroundColor: darken(0.008, theme.palette.background.default) }}>
            <Fade in={inViewTitleFade} timeout={2000}>
                <Box ref={refTitleFade} sx={{ 
                        display: 'flex', 
                        justifyContent: 'center',
                        minHeight: 120, 
                    }}
                >
                        <Slide direction="up" in={inViewTitle} timeout={500}>
                            <Container ref={refTitleSlide}>
                                <Typography variant="h4" align="center" fontWeight={400} sx={{ color: theme.palette.text.primary }} gutterBottom>
                                    Say Hello to great features!
                                </Typography>
                                <Typography variant="h6" align="center" mb={4} sx={{ color: theme.palette.text.secondary }}>
                                    Here are some of the features that you'll love.
                                </Typography>
                            </Container>
                        </Slide>
                </Box>
            </Fade>
            
            <Fade in={inViewFeatBox} timeout={2000}>
                <Box    
                        ref={refFeatBox}
                        my={4} sx={{ 
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap', 
                        gap: 2, 
                        maxWidth: 1200,
                        minHeight: 320,
                        margin: 'auto',
                    }}
                >
                    {features.map((feature, index) => (
                        <FeatBox 
                            key={index}
                            inView={inViewFeatBox} 
                            logo={feature.logo} 
                            title={feature.title} 
                            description={feature.text} 
                            transitionTime={500 + (index * 500)} 
                        />
                    ))}
                </Box>
            </Fade>
        </Box>
    );
};

export default Features;
