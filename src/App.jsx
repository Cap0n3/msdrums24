import React, { useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./assets/styles/global.css";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { website_routes } from "./routes/routes";
import { getTheme } from "./theme/theme_utils";

function App() {
    const [mode, setMode] = useState("light");

    // === ROUTER === //
    const router = createBrowserRouter([
        website_routes
    ]);

    // === THEME === //
    const theme = getTheme(mode);

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