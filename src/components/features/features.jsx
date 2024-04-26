import React, { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { Container, Box, Typography, Paper, Slide, Fade } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import { useInView } from 'react-intersection-observer';
import FeatBox from './featBox';

const features = [
    {
        logo: BusinessIcon,
        title: "Feature 1",
        text: "Feature talking about the first feature of the product. Your product is so cool that it has this feature."
    },
    {
        logo: WorkHistoryIcon,
        title: "Feature 2",
        text: "Think of how much time you'll save with this feature. It's so cool that you'll never want to go back."
    },
    {
        logo: PhotoCameraFrontIcon,
        title: "Feature 3",
        text: "Video chat with your friends and family. It's so easy to use that you'll never want to use anything else."
    }
];

const Features = () => {
    const theme = useTheme();

    const [refTitleSlide, inViewTitle] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200
    });

    return (
        <Box py={4} sx={{ backgroundColor: theme.palette.background.default, overflow: 'hidden' }}>
            <Slide direction="up" in={inViewTitle} timeout={1200}>
                <Container ref={refTitleSlide}>
                    <Typography variant="h4" align="center" fontWeight={400} sx={{ color: theme.palette.text.primary }} gutterBottom>
                        Say Hello to great features!
                    </Typography>
                    <Typography variant="h6" align="center" mb={4} sx={{ color: theme.palette.text.secondary }}>
                        Here are some of the features that you'll love.
                    </Typography>
                </Container>
            </Slide>
            
            <Box my={4} sx={{ 
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap', 
                    gap: 2, 
                    maxWidth: 1200, 
                    margin: 'auto',
                }}
            >
                {features.map((feature, index) => (
                    <FeatBox key={index} logo={feature.logo} title={feature.title} description={feature.text} transitionTime={500 + (index * 500)} />
                ))}
            </Box>
        </Box>
    );
};

export default Features;
