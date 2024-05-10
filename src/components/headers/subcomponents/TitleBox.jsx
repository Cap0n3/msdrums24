import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@emotion/react";
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
                sx={{ marginLeft: "8%", p: { xs: 4, md: 0 } }}
                ref={containerRef}
            >
                <Typography
                    component="h1"
                    variant="h1"
                    align="left"
                    sx={{ color: theme.palette.text.primary }}
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography
                    component="h2"
                    variant="subtitle1"
                    align="left"
                    sx={{ color: theme.palette.text.primary }}
                >
                    {description}
                </Typography>
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                    }}
                >
                    <Button
                        component={Link}
                        //to="/method"
                        color="primary"
                        variant="outlined"
                        size="large"
                        sx={{ mt: 2 }}
                        onClick={() => { console.log("Call to action clicked"); }}   
                    >
                        {call2Action}
                    </Button>
                </Box>
            </Box>
        </Slide>
    );
};

export default TitleBox;
