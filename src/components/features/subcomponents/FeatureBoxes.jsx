import React, { useEffect, useState } from "react";
import { Slide, Fade, Paper, Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@emotion/react";

const FeatBox = ({ inView, logo, title, description, transitionTime }) => {
    const theme = useTheme();

    const featureLogo = (IconComponent, iconProps) => (
        <Box display="flex" justifyContent="center">
            <IconComponent {...iconProps} />
        </Box>
    );

    useEffect(() => {
        console.log("Feature with ID: ", inView);
    }, [inView]);

    return (
        <Slide direction="up" in={inView} timeout={transitionTime}>
            <Paper
                elevation={1}
                square={false}
                sx={{
                    m: 2,
                    p: 4,
                    textAlign: "center",
                    maxWidth: 340,
                    backgroundColor: theme.palette.background.default,
                }}
            >
                {featureLogo(logo, {
                    fontSize: "large",
                    sx: { color: theme.palette.primary.main },
                })}
                <Typography
                    variant="h6"
                    mt={2}
                    fontWeight={600}
                    sx={{ color: theme.palette.text.primary }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    mt={2}
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
                    gap: 2,
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
