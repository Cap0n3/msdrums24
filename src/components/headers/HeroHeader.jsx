import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fade } from "@mui/material";
import useDeviceType from "../../hooks/useDeviceType";
import website_layout from "../../theme/layout";
import banner from "../../assets/img/template_banner.png";
import mobileBanner from "../../assets/img/template_banner_mobile.png";
import TitleBox from "./subcomponents/TitleBox";
import useViewportSize from "../../hooks/useViewportSize";


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
    const windowSize = useViewportSize();
    const [viewportHeight, setViewportHeight] = useState("100vh");
    const device = useDeviceType();


    const updateViewportHeight = () => {
        const { height, width } = windowSize;

        if (device === "Mobile" || device === "Tablet") {
            setViewportHeight(height);
        } else if (device === "Desktop") {
            setViewportHeight(width < 900 ? height : height - website_layout.navHeight);
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
     * In case user is resizing the window on desktop, update the viewport height.
     */
    useEffect(() => {
        //handleResize();
        updateViewportHeight();
    }, [windowSize.width]);


    return (
        <Fade in={loaded} timeout={3000}>
            <Box
                component="header"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: { xs: "flex-end", md: "center" },
                    height: viewportHeight,
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
