import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./assets/styles/global.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import mgr_palette from "./theme/palette";
import Root from "./routes/root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import MethodPage from "./pages/Method";


// === ROUTER === //
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/method",
                element: <MethodPage />,
            }
        ],
    },
]);

// === THEME === //
const darktheme = createTheme({
    palette: {
        primary: {
            main: mgr_palette.primary.main
        },
        secondary: {
            main: mgr_palette.secondary.main
        },
    },

    // CHange text input outline color
    components: {
        // CTRL + SPACE to find the component you would like to override.
        // For most of them you will need to adjust just the root...
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: '#FFFFFF', // Color of placeholder
                    },
                    '& label.Mui-focused': {
                        color: mgr_palette.secondary.main, // Color of placeholder when focused
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#3E68A8', // don't know ...
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: mgr_palette.secondary.main, // Color of the border
                        },
                        '&:hover fieldset': {
                            borderColor: 'red', // Color of the border when hovered
                            borderWidth: '0.15rem',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'red',
                        },
                        '& input': {
                            color: mgr_palette.secondary.main,
                        },
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: 'initial',
                    fontSize: '1rem',
                },
            },
        },
    },

});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={darktheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);