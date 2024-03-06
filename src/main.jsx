import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// === ROUTER === //
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

// === THEME === //
const darktheme = createTheme({
  palette: {
    primary:{
      main: "#000000",
      secondary: "#FFFFFF",
    },
  }
  
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darktheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);