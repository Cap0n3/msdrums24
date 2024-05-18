import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fade } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import useDeviceType from "../../hooks/useDeviceType";
import website_layout from "../../theme/layout";
import banner from "../../assets/img/template_banner.png";
import mobileBanner from "../../assets/img/template_banner_mobile.png";
import TitleBox from "./subcomponents/TitleBox";

/**
 * Hero Header component, rezises the header based on the device type (Mobile, Tablet, Desktop). 
 * 
 * Note : Implemented a custom hook to detect the device type (Mobile, Tablet, Desktop) and avoid weird resizing issues due to browser navbar.
 * 
 * @param {*} param0 
 * @returns 
 */
const HeroHeader = ({ title, description, call2Action }) => {
    const theme = useTheme();
    const [loaded, setLoaded] = useState(false);
    const windowSize = useWindowSize();
    const [mobileViewportHeight, setMobileViewportHeight] = useState(null);
    const device = useDeviceType();

    useEffect(() => {
        setLoaded(true);
        console.log(device);
        if (device === "Mobile" || device === "Tablet") {
            // Get mobile viewport height (once on load, to avoid resizing issues due to browser navbar)
            setMobileViewportHeight(windowSize.innerHeight);
        }

        console.log(mobileViewportHeight)

        return () => {
            setLoaded(false);
        };
    }, []);

    return (
        <Fade in={loaded} timeout={3000}>
            <Box
                component="header"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: { xs: "flex-end", md: "center" },
                    height: mobileViewportHeight // For larger tablets, use mobile viewport height (md breakpoint)
                            ? `${mobileViewportHeight}px` 
                            : `${windowSize.innerHeight - website_layout.navHeight}px`, // Desktop
                    minHeight: "500px",
                    backgroundColor: theme.palette.background.default,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: { xs: "none", md: `url(${banner})` },
                    overflow: "hidden",
                }}
            >
                <Box
                    component={"div"}
                    className="mobile-banner"
                    sx={{
                        display: { xs: "block", md: "none" },
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${mobileBanner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></Box>
                <TitleBox
                    title={title}
                    description={description}
                    call2Action={call2Action}
                />
            </Box>
        </Fade>
    );
};

export default HeroHeader;
