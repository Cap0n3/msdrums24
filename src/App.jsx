import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/global.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { website_routes } from "./routes/routes";
import { getTheme } from "./theme/theme_utils";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
    const [mode, setMode] = useState("light"); // Can be "light" or "dark"

    // === ROUTER === //
    const router = createBrowserRouter([website_routes]);

    // === THEME === //
    const theme = getTheme(mode);

    // === SCROLL TO TOP === //
    useScrollToTop();

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline /> {/* Add this line */}
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
