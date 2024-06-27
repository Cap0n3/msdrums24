import React, { useContext } from "react";
import Nav from "../components/common/nav/Nav";
import Footer from "../components/common/footer/Footer";
import MapFooter from "../components/common/footer/MapFooter";
import { Outlet } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import website_layout from "../theme/layout";
import { Box } from "@mui/material";
import { nav_page_links } from "./menu-urls";
import { mapFooter_links } from "./menu-urls";
import footerData from "../data/footer.data.json";
import ScrollToHash from "../components/common/ScrollToHash";
import ScrollTop from "../components/common/ScrollToTop";
import { LangContext } from "../context/LangContext";


export default function Root() {
    // === SCROLL TO TOP === //
    useScrollToTop();

    // === LANG CONTEXT === //
    const { language } = useContext(LangContext);

    return (
        <>
            <Nav page_links={nav_page_links[language]} />
            <ScrollToHash />
            <ScrollTop />
            <Box
                component="main"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: {
                        //xs: `${website_layout.mobileNavHeight}px`,
                        md: `${website_layout.navHeight}px`,
                    },
                }}
            >
                <Outlet />
            </Box>
            <MapFooter
                links={mapFooter_links[language]}
                description={footerData[language].footer_description}
            />
        </>
    );
}
