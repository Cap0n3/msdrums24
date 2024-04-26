import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Typography, Container, Slide, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';


const FeatureTitle = ({ title, subTitle }) => {
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
                                    {title}
                                </Typography>
                                <Typography variant="h6" align="center" mb={4} sx={{ color: theme.palette.text.secondary }}>
                                    {subTitle}
                                </Typography>
                            </Container>
                        </Slide>
                </Box>
            </Fade>
    );
};

export default FeatureTitle;