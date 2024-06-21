import React from "react";
import Root from "./root";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import Plans from "../pages/Plans";
import Enroll from "../pages/Enroll";
import Contact from "../pages/Contact";

export const website_routes = {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/formules",
            element: <Plans />,
        },
        {
            path: "/inscription",
            element: <Enroll />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
    ],
};
