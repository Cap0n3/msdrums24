import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import mgr_layout from "../theme/layout";
import { Box } from "@mui/material";

export default function Root() {

    // Scroll to top on page load and on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav />
            <Box component="main" sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: `${mgr_layout.navHeight}px`,
                
            }}>
                <Outlet />
            </Box>
            <Footer />
        </>
    );
} 