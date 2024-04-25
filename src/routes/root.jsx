import Nav from "../components/common/Nav/Nav";
import Footer from "../components/common/Footer/Footer";
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import website_layout from "../theme/layout";
import { Box } from "@mui/material";
import jsonData from "../data/home/footer.json";
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
                mt: `${website_layout.navHeight}px`,
                
            }}>
                <Outlet />
            </Box>
            <Footer 
                description={jsonData.footer_description} 
                newsletter_description={jsonData.newsletter_description} 
                newsletter_placeholder={jsonData.newsletter_placeholder}
                newsletter_button={jsonData.newsletter_button}
            />
        </>
    );
} 