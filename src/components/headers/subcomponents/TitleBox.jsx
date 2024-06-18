import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material";
import { Box, Typography, Button, Slide } from "@mui/material";
import { Link } from "react-router-dom";


const TitleBox = ({ title, description, call2Action }) => {
    const theme = useTheme();
    const [loaded, setLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setLoaded(true);
        return () => {
            setLoaded(false);
        };
    }, []);

    return (
        <Slide
            direction="left"
            in={loaded}
            container={containerRef.current}
            timeout={500}
            style={{ transitionDelay: loaded ? "1500ms" : "0ms" }}
        >
            <Box
                maxWidth="sm"
                sx={{
                    //marginLeft: { xs: "none", lg: "8%" },
                    px: { xs: 4, lg: 0 },
                    py: { xs: 8, lg: 0 },
                }}
                ref={containerRef}
            >
                <Typography
                    component="h1"
                    variant="h1"
                    sx={{
                        textAlign: "center",
                        color: theme.palette.text.msDrumsBeige,
                        textTransform: "uppercase",
                        //border: "1px solid red"
                    }}
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography
                    component="h2"
                    variant="h2"
                    sx={{
                        textAlign: "center",
                        textTransform: "uppercase",
                        color: theme.palette.text.msDrumsBeige,
                        //border: "1px solid green"
                    }}
                >
                    {description}
                </Typography>
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Button
                        component={Link}
                        to="/#features"
                        color="primary"
                        variant="outlined"
                        size="large"
                        //sx={{ mt: 2 }}
                    >
                        {call2Action}
                    </Button>
                </Box>
            </Box>
        </Slide>
    );
};

export default TitleBox;
