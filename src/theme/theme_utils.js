import { createTheme, responsiveFontSizes } from "@mui/material/styles";
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
            fontFamily: "Source Sans Pro, sans-serif",
            h1: {
                fontSize: "2.5rem",
                fontWeight: 500,
                "@media (min-width:600px)": {
                    fontSize: "4rem",
                },
            },
            h2: {
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
                fontSize: "1.3rem",
                fontWeight: 300,
                "@media (min-width:600px)": {
                    fontSize: "1.3rem",
                },
            },
            subtitle2: {
                fontSize: "1.1rem",
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
        // Define font-weight for title variants
        // components: {
        //     MuiTypography: {
        //         styleOverrides: {
        //             h1: {
        //                 fontWeight: 500,
        //             },
        //             h2: {
        //                 fontWeight: 500,
        //             },
        //             h3: {
        //                 fontWeight: 400,
        //             },
        //             h4: {
        //                 fontWeight: 400,
        //             },
        //             h5: {
        //                 fontWeight: 400,
        //             },
        //             h6: {
        //                 fontWeight: 400,
        //             },
        //             p: {
        //                 fontWeight: 300,
        //             },
        //         },
        //     },
        // },
    });
}
