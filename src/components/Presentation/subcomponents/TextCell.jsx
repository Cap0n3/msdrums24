import React, { useEffect, useState } from 'react';
import { Box, Typography, Slide, Fade } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useInView } from 'react-intersection-observer';


const TextCell = ({ title, description }) => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200
    });

    useEffect(() => {
        // console.log("TextCell in view: ", inView);
        if (inView) {
            setIsVisible(true);
        }
    }
    , [inView]);

    return (
        <Fade in={inView} timeout={1000}>
            <Box ref={ref} sx={{ width: '100%' }}>
                <Slide direction="up" in={isVisible} timeout={500}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: '100%', height: 400 }}>
                        <Typography variant="h6" mt={2} fontWeight={600} sx={{ color: theme.palette.text.primary }}>
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" mt={2} sx={{ color: theme.palette.text.secondary }}>
                            {description}
                        </Typography>
                    </Box>
                </Slide>
            </Box>
        </Fade>
    );
}

export default TextCell;