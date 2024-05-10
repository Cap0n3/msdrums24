import React, { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Box, Fade, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";

/**
 * Responsive image component, automatically fades and slides in when in view.
 *
 * @param {*} image - Image URL
 * @param {*} alt - Image alt text
 * @param {*} percentageWidth - Percentage width of the image (default: 100)
 */
const RespImage = ({ image, alt, percentageWidth = 100 }) => {
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
            <Box
                ref={ref}
                sx={{
                    width: `${percentageWidth}%`,
                    paddingTop: `${percentageWidth}%`,
                    position: "relative",
                }}
            >
                <Slide direction="up" in={isVisible} timeout={500}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            overflow: "hidden",
                            borderRadius: 2,
                        }}
                    >
                        <img
                            src={image}
                            alt={alt}
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </Box>
                </Slide>
            </Box>
        </Fade>
    );
};

export default RespImage;
