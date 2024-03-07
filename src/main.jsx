import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
            main: "#000000"
        },
        secondary: {
            main: "#FFFFFF"
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
                        color: '#FFFFFF', // Color of placeholder when focused
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#3E68A8', // don't know ...
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#FFFFFF', // Color of the border
                        },
                        '&:hover fieldset': {
                            borderColor: 'red', // Color of the border when hovered
                            borderWidth: '0.15rem',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'red',
                        },
                        '& input': {
                            color: '#FFFFFF',
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