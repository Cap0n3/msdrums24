import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, TextField, Button, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Stack from "@mui/material/Stack";
import NavLink from "./subcomponents/NavLink";
import NavLogo from "../NavLogo";

const Footer = ({
    description,
    newsletter_description,
    newsletter_placeholder,
    newsletter_button,
    footer_links_col1,
    footer_links_col2,
}) => {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                bgcolor: theme.palette.background.default,
                color: "white",
                minHeight: "250px",
                pt: 8,
                px: { xs: 2, md: 4 },
                //border: "1px solid yellow",
            }}
        >
            <Grid
                container
                sx={{
                    mb: 4,
                    //border: "1px solid blue",
                }}
            >
                <Grid
                    xs={12}
                    md={4}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        pb: { xs: 4, md: 0 },
                        //border: "1px solid red",
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
                <Grid
                    xs={6}
                    md={2}
                    sx={{
                        pl: { xs: 0, md: 4 },
                        //border: "1px solid green"
                    }}
                >
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={{ color: theme.palette.text.primary }}
                        gutterBottom
                    >
                        À propos
                    </Typography>
                    <Stack spacing={0.5}>
                        {footer_links_col1.map((page) => (
                            <NavLink
                                key={page.id}
                                url={page.link}
                                name={page.name}
                            />
                        ))}
                    </Stack>
                </Grid>
                <Grid xs={6} md={2} sx={{ pl: { xs: 0, md: 4 } }}>
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={{ color: theme.palette.text.primary }}
                        gutterBottom
                    >
                        Support
                    </Typography>
                    <Stack spacing={0.5}>
                        {footer_links_col2.map((page) => (
                            <NavLink
                                key={page.id}
                                url={page.link}
                                name={page.name}
                            />
                        ))}
                    </Stack>
                </Grid>
                <Grid xs={12} md={4} sx={{ pt: { xs: 2, md: 0 } }}>
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
                            color="primary"
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
                    sx={{
                        color: theme.palette.text.secondary,
                        px: { xs: 1, md: 0 },
                    }}
                >
                    © Copyright 2024 MS Drums | Designed & Coded with love by
                    Alexandre Guillin | All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
