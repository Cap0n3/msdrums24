import React from 'react';
import { useTheme } from '@emotion/react';
import { Container, Box, Typography, Paper } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import { useInView } from 'react-intersection-observer';


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
        threshold: 1, 
        delay: 1000
    });
    
    const [refFeatSlide, inViewFeat] = useInView({
        triggerOnce: true,
        threshold: 1, 
        delay: 1000
    });

    const featureLogo = (IconComponent, iconProps) => {
        return (
            <Box display="flex" justifyContent="center">
                <IconComponent {...iconProps} />
            </Box>
        );
    }

    return (
        <Box py={4} sx={{ backgroundColor: theme.palette.background.default, overflow: 'hidden' }}>
            <Slide direction="up" in={inViewTitle} timeout={1200}>
                <Container ref={refTitleSlide}>
                    <Typography variant="h4" align="center" fontWeight={400} sx={{ color: theme.palette.text.primary }} gutterBottom>
                        Say Hello to great features !
                    </Typography>
                    <Typography variant="h6" align="center" mb={4} sx={{ color: theme.palette.text.secondary }}>
                        Here are some of the features that you'll love.
                    </Typography>
                </Container>
            </Slide>
            
            <Slide direction="up" in={inViewFeat} timeout={1500}>
                <Box ref={refFeatSlide} my={4} sx={{ 
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap', 
                        gap: 2, 
                        maxWidth: 1200, 
                        margin: 'auto',
                    }}
                >
                    {features.map((feature, index) => (
                        <Paper 
                            key={index} 
                            elevation={1} 
                            square={false} 
                            sx={{ 
                                m: 2, 
                                p: 4, 
                                textAlign: 'center', 
                                maxWidth: 340,
                                backgroundColor: theme.palette.background.default
                            }}
                        >
                            {featureLogo(
                                feature.logo, 
                                { 
                                    fontSize:"large",
                                    sx: { color: theme.palette.primary.main }
                                })
                            }
                            <Typography variant="h6" mt={2} fontWeight={600} sx={{ color: theme.palette.text.primary }}>
                                {feature.title}
                            </Typography>
                            <Typography variant="subtitle1" mt={2} sx={{ color: theme.palette.text.secondary }}>
                                {feature.text}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Slide>
        </Box>
    );
};

export default Features;