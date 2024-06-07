import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { Box, Fade, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";

/**
 * Responsive image component, automatically fades and slides in when in view.
 *
 * @param {*} image - Image URL
 * @param {*} alt - Image alt text
 * @param {*} title - Image title
 * @param {*} percentageWidth - Percentage width of the image (default: 100)
 */
const RespImage = ({ image, alt, title, percentageWidth = 100 }) => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

    /**
     * Get image dimensions when image is loaded, then set the dimensions html attribute for image (seo friendly)
     */
    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setDimensions({ width: img.width, height: img.height });
        };
    }, [image]);

    return (
        <Fade in={inView} timeout={2000}>
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
                            borderRadius: theme.shape.borderRadius,
                        }}
                    >
                        <img
                            src={image}
                            loading="lazy"
                            title={title}
                            alt={alt}
                            width={dimensions.width}
                            height={dimensions.height}
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
