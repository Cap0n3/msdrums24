import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./assets/styles/global.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dark_palette from "./theme/palette";
import Root from "./routes/root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import MethodPage from "./pages/Method";
import { website_routes } from "./routes/routes";
import { darktheme } from "./theme/themes";

// === ROUTER === //
const router = createBrowserRouter([
    website_routes
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={darktheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);