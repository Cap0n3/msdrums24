import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colors } from "./palette";
import website_layout from "./layout";

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
            button: {
                main: colors.primary[mode],
                hover: colors.buttonHover[mode],
            },
            error: {
                main: colors.error[mode],
            },
            background: {
                default: colors.background[mode],
                lightBeige: colors.msDrumsBeige.light,
                darkBeige: colors.msDrumsBeige.dark,
                paper: mode === "dark" ? "#333333" : "#ffffff",
            },
            text: {
                primary: colors.text.primary[mode],
                secondary: colors.text.secondary[mode],
                msDrumsBeige: colors.text.msDrumsBeige[mode],
            },
            border: {
                main: colors.border[mode],
            },
        },
        typography: {
            fontFamily: "Source Sans Pro, sans-serif",
            h1: {
                fontFamily: "WalcottGothicJFHollywood",
                fontSize: "2.3rem",
                fontWeight: 500,
                "@media (min-width:600px)": {
                    fontSize: "4.5rem",
                },
            },
            h2: {
                fontFamily: "WalcottGothicJFHollywood",
                fontSize: "1.5rem",
                fontWeight: 500,
                "@media (min-width:600px)": {
                    fontSize: "2.2rem",
                },
            },
            h3: {
                fontSize: "1.3rem",
                fontWeight: 500,
                "@media (min-width:600px)": {
                    fontSize: "1.4rem",
                },
            },
            h4: {
                fontSize: "1.1rem",
                fontWeight: 400,
                "@media (min-width:600px)": {
                    fontSize: "1.1rem",
                },
            },
            subtitle1: {
                fontSize: "1rem",
                fontWeight: 300,
                "@media (min-width:600px)": {
                    fontSize: "1.3rem",
                },
            },
            subtitle2: {
                fontSize: "1rem",
                fontWeight: 400,
                "@media (min-width:600px)": {
                    fontSize: "1.3rem",
                },
            },
            body1: {
                fontSize: "0.8rem",
                fontWeight: 400,
                "@media (min-width:600px)": {
                    fontSize: "1.1rem",
                },
            },
            body2: {
                fontSize: "0.8rem",
                fontWeight: 400,
                "@media (min-width:600px)": {
                    fontSize: "0.9rem",
                },
            },
            caption: {
                fontSize: "0.7rem",
                fontWeight: 400,
                "@media (min-width:600px)": {
                    fontSize: "0.8rem",
                },
            },
        },
        shape: {
            borderRadius: website_layout.borderRadius,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                        @font-face {
                        font-family: 'WalcottGothicJFHollywood';
                        src: url('/fonts/WalcottGothicJFHollywood Regular.ttf') format('truetype');
                        font-weight: normal;
                        font-style: normal;
                }
                `,
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: website_layout.borderRadius,
                    },
                    containedPrimary: {
                        backgroundColor: colors.button[mode],
                        "&:hover": {
                            backgroundColor: colors.buttonHover[mode],
                        },
                        "&:visited": {
                            color: colors.button[mode],
                        },
                    },
                    outlinedPrimary: {
                        borderColor: colors.button[mode],
                        color: colors.button[mode],
                        "&:hover": {
                            borderColor: colors.buttonHover[mode],
                            color: colors.buttonHover[mode],
                        },
                        "&:visited": {
                            color: colors.button[mode],
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: website_layout.borderRadius,
                    },
                },
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        borderRadius: website_layout.borderRadius,
                    },
                },
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    root: {
                        borderRadius: website_layout.borderRadius,
                    },
                },
            },
        },
    });
}
