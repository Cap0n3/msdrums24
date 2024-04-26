import React, { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { darken } from 'polished';
import { Container, Box, Typography, Slide, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import FeatBox from './featBox';
import { features } from '../../data/home/features';


const FeatureTitle = () => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }
    , [inView]);

    return (
        <Fade in={inView} timeout={2000}>
                <Box ref={ref} sx={{ 
                        display: 'flex', 
                        justifyContent: 'center',
                        minHeight: 120, 
                    }}
                >
                        <Slide direction="up" in={isVisible} timeout={500}>
                            <Container>
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
    );
};

const FeatureBoxes = () => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }
    , [inView]);

    return (
        <Fade in={inView} timeout={2000}>
                <Box    
                        ref={ref}
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
                            inView={isVisible} 
                            logo={feature.logo} 
                            title={feature.title} 
                            description={feature.text} 
                            transitionTime={500 + (index * 500)} 
                        />
                    ))}
                </Box>
            </Fade>
    );
}


const Features = () => {
    const theme = useTheme();

    return (
        <Box py={4} sx={{ flexGrow: 1, backgroundColor: darken(0.008, theme.palette.background.default) }}>
            <FeatureTitle />
            <FeatureBoxes />
        </Box>
    );
};

export default Features;
