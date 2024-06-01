import React, { useContext } from "react";
import Nav from "../components/common/Nav/Nav";
import Footer from "../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import website_layout from "../theme/layout";
import { Box } from "@mui/material";
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
            <Nav />
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
            <Footer
                description={footerData[language].footer_description}
                newsletter_description={footerData[language].newsletter_description}
                newsletter_placeholder={footerData[language].newsletter_placeholder}
                newsletter_button={footerData[language].newsletter_button}
            />
        </>
    );
}
