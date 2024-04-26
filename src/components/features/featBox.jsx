import React, { useEffect, useState } from 'react';
import { Slide, Fade, Paper, Typography, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@emotion/react';

const FeatBox = ({ inView, logo, title, description, transitionTime }) => {
    const theme = useTheme();

    const featureLogo = (IconComponent, iconProps) => (
        <Box display="flex" justifyContent="center">
            <IconComponent {...iconProps} />
        </Box>
    );

    useEffect(() => {
        console.log("Feature with ID: ", inView);
    }
    , [inView]);

    return (
        <Slide direction="up" in={inView} timeout={transitionTime}>
            <Paper
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
                {featureLogo(logo, { fontSize: "large", sx: { color: theme.palette.primary.main }})}
                <Typography variant="h6" mt={2} fontWeight={600} sx={{ color: theme.palette.text.primary }}>
                    {title}
                </Typography>
                <Typography variant="subtitle1" mt={2} sx={{ color: theme.palette.text.secondary }}>
                    {description}
                </Typography>
            </Paper>
        </Slide>
    );
};

export default FeatBox;