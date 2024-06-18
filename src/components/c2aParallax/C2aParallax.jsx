import React from "react";
import { Box } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import StickImage from "../../../public/img/parallax/parallaxImage.jpg";

const C2aParallax = () => {
    //const { ref } = useParallax({ speed: 10 });

    return (
        <ParallaxBanner
            layers={[
                {
                    image: StickImage,
                    speed: -15,
                },
            ]}
            className="aspect-[2/1]"
            style={{ height: "500px" }}
        />
    );
};

export default C2aParallax;
