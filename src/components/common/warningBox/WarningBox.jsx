import React, { useEffect, useState } from "react";
import { Alert, Slide, Fade, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

const WarningBox = ({ children }) => {
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
            <Box ref={ref} sx={{ mb: 4 }}>
                <Slide direction="up" in={isVisible} timeout={500}>
                    <Alert variant="outlined" severity="info">
                        {children}
                    </Alert>
                </Slide>
            </Box>
        </Fade>
    );
};

export default WarningBox;
