import React from "react";
import { Box } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";

const C2aParallax = () => {
    //const { ref } = useParallax({ speed: 10 });

    return (
        <ParallaxBanner
            layers={[
                {
                    image: "https://picsum.photos/id/42/3456/2304",
                    speed: -15,
                },
            ]}
            className="aspect-[2/1]"
            style={{ height: "500px" }}
        />
    );
};

export default C2aParallax;
