import React from "react";
import Root from "./root";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import NewPage from "../pages/NewPage";

export const website_routes = {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        // {
        //     path: "/mypage",
        //     element: <NewPage />,
        // },
    ],
};
