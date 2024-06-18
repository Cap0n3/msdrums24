import React, { useEffect, useState } from "react";
import { Slide, Fade, Paper, Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@mui/material";

/**
 * Subcomponents for FeatureBoxes
 */
const FeatBox = ({ inView, logo, title, description, transitionTime }) => {
    const theme = useTheme();

    const featureLogo = (IconComponent, iconProps) => (
        <Box
            display="flex"
            justifyContent="center"
        >
            <IconComponent {...iconProps} />
        </Box>
    );

    return (
        <Slide direction="up" in={inView} timeout={transitionTime}>
            <Paper
                elevation={1}
                square={false}
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 2,
                    maxWidth: 340,
                    backgroundColor: theme.palette.background.default,
                    borderRadius: theme.shape.borderRadius,
                }}
            >
                {featureLogo(logo, {
                    width: 50,
                    height: 50,
                    color: theme.palette.primary.main,
                })}
                <Typography
                    component="h3"
                    variant="h3"
                    //mt={2}
                    textAlign="center"
                    sx={{ color: theme.palette.text.primary }}
                >
                    {title}
                </Typography>
                <Typography
                    component="p"
                    variant="body1"
                    textAlign="center"
                    //mt={2}
                    sx={{ color: theme.palette.text.secondary }}
                >
                    {description}
                </Typography>
            </Paper>
        </Slide>
    );
};

const FeatureBoxes = ({ data }) => {
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
                my={4}
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    gap: 4,
                    maxWidth: 1200,
                    minHeight: 320,
                    margin: "auto",
                }}
            >
                {data.map((feature, index) => (
                    <FeatBox
                        key={index}
                        inView={isVisible}
                        logo={feature.logo}
                        title={feature.title}
                        description={feature.text}
                        transitionTime={500 + index * 500}
                    />
                ))}
            </Box>
        </Fade>
    );
};

export default FeatureBoxes;
