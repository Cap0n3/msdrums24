import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/global.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { website_routes } from "./routes/routes";
import { getTheme } from "./theme/theme_utils";
import { HelmetProvider } from "react-helmet-async";
import { ParallaxProvider } from "react-scroll-parallax";
import { LanguageProvider } from "./context/LangContext";


function App() {
    const [mode, setMode] = useState("light"); // Can be "light" or "dark"

    // === ROUTER === //
    const router = createBrowserRouter([website_routes]);

    // === THEME === //
    const theme = getTheme(mode);

    return (
        <>
            <HelmetProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline /> {/* Add this line */}
                    <ParallaxProvider>
                        <LanguageProvider>
                            <RouterProvider router={router} />
                        </LanguageProvider>
                    </ParallaxProvider>
                </ThemeProvider>
            </HelmetProvider>
        </>
    );
}

export default App;
