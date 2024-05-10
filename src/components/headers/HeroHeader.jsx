import { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fade } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import website_layout from "../../theme/layout";
import banner from "../../assets/img/template_banner.png";
import mobileBanner from "../../assets/img/template_banner_mobile.png";
import TitleBox from "./subcomponents/TitleBox";

const HeroHeader = ({ title, description, call2Action }) => {
    const theme = useTheme();
    const [loaded, setLoaded] = useState(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        setLoaded(true);
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
                    height: {
                        xs: `${windowSize.innerHeight - website_layout.mobileNavHeight}px`,
                        md: `${windowSize.innerHeight - website_layout.navHeight}px`,
                    },
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
                        //border: "1px solid red",
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
