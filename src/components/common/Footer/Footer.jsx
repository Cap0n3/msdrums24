import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, TextField, Button, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Stack from "@mui/material/Stack";
import NavLink from "./NavLink";
import {
    footer_pages_col1,
    footer_pages_col2,
} from "../../../routes/menu-urls";
import NavLogo from "../NavLogo";

const Footer = ({
    description,
    newsletter_description,
    newsletter_placeholder,
    newsletter_button,
}) => {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                flexGrow: 1,
                bgcolor: theme.palette.background.default,
                color: "white",
                padding: "2rem",
                minHeight: "250px",
            }}
        >
            <Grid
                container
                spacing={5}
                sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            >
                <Grid
                    xs={12}
                    md={4}
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
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                        gutterBottom
                    >
                        {description}
                    </Typography>
                </Grid>
                <Grid xs={6} md={2}>
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={{ color: theme.palette.text.primary }}
                        gutterBottom
                    >
                        À propos
                    </Typography>
                    <Stack spacing={0.5}>
                        {footer_pages_col1.map((page) => (
                            <NavLink
                                key={page.id}
                                url={page.link}
                                name={page.name}
                            />
                        ))}
                    </Stack>
                </Grid>
                <Grid xs={6} md={2}>
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={{ color: theme.palette.text.primary }}
                        gutterBottom
                    >
                        Support
                    </Typography>
                    <Stack spacing={0.5}>
                        {footer_pages_col2.map((page) => (
                            <NavLink
                                key={page.id}
                                url={page.link}
                                name={page.name}
                            />
                        ))}
                    </Stack>
                </Grid>
                <Grid xs={12} md={4}>
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={{ color: theme.palette.text.primary }}
                        gutterBottom
                    >
                        Newsletter
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                    >
                        {newsletter_description}
                    </Typography>
                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            id="newsletter-input"
                            label={newsletter_placeholder}
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{ mt: 1, width: "100%" }}
                        >
                            {newsletter_button}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ textAlign: "center" }}>
                <Typography
                    component="p"
                    variant="caption"
                    sx={{ color: theme.palette.text.secondary }}
                >
                    © Copyright 2024 My Company | Designed & Coded with love by Alexandre Guillin | All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
