import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/global.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { website_routes } from "./routes/routes";
import { getTheme } from "./theme/theme_utils";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
    const [mode, setMode] = useState("dark"); // Can be "light" or "dark"

    // === ROUTER === //
    const router = createBrowserRouter([website_routes]);

    // === THEME === //
    const theme = getTheme(mode);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline /> {/* Add this line */}
                <ParallaxProvider>
                    <RouterProvider router={router} />
                </ParallaxProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
