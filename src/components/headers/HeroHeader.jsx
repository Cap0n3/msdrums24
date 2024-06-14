import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fade } from "@mui/material";
import useDeviceType from "../../hooks/useDeviceType";
import website_layout from "../../theme/layout";
import banner from "../../assets/img/headers/HeroHeader.jpg";
import mobileBanner from "../../assets/img/template_banner_mobile.png";
import TitleBox from "./subcomponents/TitleBox";
import useViewportSize from "../../hooks/useViewportSize";
import useOrientation from "../../hooks/useOrientation";

/**
 * Hero Header component, rezises the header based on the device type (Mobile, Tablet, Desktop).
 *
 * Note : Implemented a custom hook to detect the device type (Mobile, Tablet, Desktop) and avoid weird resizing issues due to browser navbar.
 *
 * @param {string} param0.title - The title of the header.
 * @param {string} param0.description - The description of the header.
 * @param {string} param0.call2Action - The call to action of the header.
 * @returns
 */
const HeroHeader = ({ title, description, call2Action }) => {
    const theme = useTheme();
    const [loaded, setLoaded] = useState(false);
    const windowSize = useViewportSize();
    const [viewportHeight, setViewportHeight] = useState("100vh");
    const [bannerHeight, setBannerHeight] = useState("100%");
    const device = useDeviceType();
    const orientation = useOrientation();

    const updateViewportHeight = () => {
        const { height, width } = windowSize;

        if (device === "Mobile" || device === "Tablet") {
            if (orientation === "landscape" && height < 500) {
                setViewportHeight("100%");
                setBannerHeight(height);
            } else {
                setViewportHeight(height);
            }
        } else if (device === "Desktop") {
            setViewportHeight(
                width < 900 ? height : height - website_layout.navHeight,
            );
        }
    };

    /**
     * Set the viewport height on component load and trigger loading animation.
     */
    useEffect(() => {
        setLoaded(true);
        updateViewportHeight();

        return () => setLoaded(false);
    }, []);

    /**
     * In case user is resizing the window on desktop or mobile/tablet, update the viewport height.
     */
    useEffect(() => {
        //handleResize();
        updateViewportHeight(orientation);
    }, [windowSize.width, orientation]);

    return (
        <Fade in={loaded} timeout={3000}>
            <Box
                component="header"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: { xs: "flex-end", md: "center" },
                    height: viewportHeight,
                    minHeight: "500px",
                    backgroundColor: theme.palette.background.default,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: { xs: "none", md: `url(${banner})` },
                    overflow: "hidden",
                    //border: "1px solid blue",
                }}
            >
                <Box
                    component={"div"}
                    className="mobile-banner"
                    sx={{
                        display: { xs: "block", md: "none" },
                        width: "100%",
                        height: bannerHeight,
                        backgroundImage: `url(${mobileBanner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        //border: "1px solid green",
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
