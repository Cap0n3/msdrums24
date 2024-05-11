import React, { useEffect, useState } from "react";
import { Box, Typography, Slide, Fade } from "@mui/material";
import { useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";

const ShowcaseText = ({ title, description }) => {
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
        <Fade in={inView} timeout={1000}>
            <Box ref={ref} sx={{ width: "100%" }}>
                <Slide direction="up" in={isVisible} timeout={500}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                        }}
                    >
                        <Typography
                            component="h3"
                            variant="h3"
                            mt={2}
                            sx={{ color: theme.palette.text.primary }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            component="p"
                            variant="body1"
                            mt={2}
                            sx={{ color: theme.palette.text.secondary }}
                        >
                            {description}
                        </Typography>
                    </Box>
                </Slide>
            </Box>
        </Fade>
    );
};

export default ShowcaseText;
