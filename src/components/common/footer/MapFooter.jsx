import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, TextField, Button, Box, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import NavLink from "./subcomponents/NavLink";
import NavLogo from "../NavLogo";
import FootMap from "./subcomponents/FootMap";

const MapFooter = ({
    description
}) => {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                flexGrow: 1,
                bgcolor: theme.palette.background.default,
                color: "white",
                //padding: 0,
                minHeight: "250px",
                border: "1px solid yellow",

            }}
        >
            <Grid
                container
                spacing={5}
                sx={{ 
                    border: "1px solid red",
                    margin: 0,
                    padding: 0,
                    minHeight: "250px",
                    //paddingTop: "1rem", 
                    //paddingBottom: "1rem" 
                }}
            >
                <Grid
                    xs={12}
                    md={8}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "0.2rem",
                            alignItems: "center",
                        }}
                    >
                        <NavLogo />
                    </Box>
                    <Stack
                        direction="row"
                        spacing={4}
                        sx={{ alignItems: "center" }}
                    >
                        <NavLink
                            name="About"
                            url="/#showcase"
                        />
                        <NavLink
                            name="Pricing"
                            url="/#pricing"
                        />
                        <NavLink
                            name="FAQ"
                            url="/#qna"
                        />
                    </Stack>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                        gutterBottom
                    >
                        {description}
                    </Typography>
                </Grid>
                <Grid xs={12} md={4} sx={{ minHeight: "250px", padding: 0 }}>
                    <FootMap />
                </Grid>
            </Grid>
            <Box sx={{ textAlign: "center" }}>
                <Typography
                    component="p"
                    variant="caption"
                    sx={{ color: theme.palette.text.secondary }}
                >
                    © Copyright 2024 My Company | Designed & Coded with love by
                    Alexandre Guillin | All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default MapFooter;
