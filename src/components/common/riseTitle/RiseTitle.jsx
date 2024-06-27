import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { Box, Typography, Container, Slide, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";


/**
 * RiseTitle component is a reusable component that displays a section title and subtitle with a fade and slide animation
 *
 * @param {String} title - The title of the component
 * @param {String} subTitle - The subtitle of the component (optional)
 * @param {Number} marginBottom - The margin bottom of the component (optional, default is 0)
 */
const RiseTitle = ({ title, subTitle, marginBottom = 0 }) => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <Fade in={inView} timeout={2000}>
            <Box
                ref={ref}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: marginBottom,
                }}
            >
                <Slide direction="up" in={isVisible} timeout={500}>
                    <Container>
                        <Typography
                            variant="h2"
                            align="center"
                            sx={{ color: theme.palette.text.primary }}
                            gutterBottom
                        >
                            {title}
                        </Typography>
                        {subTitle && (
                            <Typography
                                component="p"
                                variant="subtitle2"
                                align="center"
                                mb={4}
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                {subTitle}
                            </Typography>
                        )}
                    </Container>
                </Slide>
            </Box>
        </Fade>
    );
};

export default RiseTitle;
