import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2,
                alignItems: "center",
                height: "100vh",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                    color: theme.palette.text.primary,
                    textAlign: "center",
                }}
            >
                Error or 404
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: theme.palette.text.secondary,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                Humm, this page doesn't seem to exist...{" "}
                <SentimentVeryDissatisfiedIcon fontSize="large" />
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                sx={{ mt: 2 }}
            >
                Back to home page
            </Button>
        </Box>
    );
};

export default ErrorPage;
