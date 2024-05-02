import { createTheme } from "@mui/material/styles";
import { colors } from "./palette";

export function getTheme(mode) {
    return createTheme({
        palette: {
            mode, // Can be 'light' or 'dark'
            primary: {
                main: colors.primary[mode],
            },
            secondary: {
                main: colors.secondary[mode],
            },
            error: {
                main: colors.error[mode],
            },
            background: {
                default: colors.background[mode],
                paper: mode === "dark" ? "#333333" : "#ffffff",
            },
            text: {
                primary: colors.text.primary[mode],
                secondary: colors.text.secondary[mode],
            },
        },
        typography: {
            fontFamily: "Roboto, sans-serif",
        },
        // Define font-weight for title variants
        components: {
            MuiTypography: {
                styleOverrides: {
                    h1: {
                        fontWeight: 500,
                    },
                    h2: {
                        fontWeight: 500,
                    },
                    h3: {
                        fontWeight: 400,
                    },
                    h4: {
                        fontWeight: 400,
                    },
                    h5: {
                        fontWeight: 400,
                    },
                    h6: {
                        fontWeight: 400,
                    },
                    p: {
                        fontWeight: 300,
                    },
                },
            },
        },
    });
}
