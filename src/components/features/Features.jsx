import React from "react";
import { useTheme } from "@mui/material";
import { darken } from "polished";
import { Box } from "@mui/material";
import RiseTitle from "../common/riseTitle/RiseTitle";
import FeatureBoxes from "./subcomponents/FeatureBoxes";

const Features = ({
    identifier,
    title,
    subTitle,
    features,
    contrast = false,
}) => {
    const theme = useTheme();

    return (
        <Box
            id={identifier}
            component="section"
            py={4}
            sx={{
                flexGrow: 1,
                backgroundColor: contrast
                    ? darken(0.008, theme.palette.background.default)
                    : theme.palette.background.default,
                minHeight: "500px",
                overflow: "hidden", // Prevents bottom page gap during excessive resizing (due to FX)
            }}
        >
            <RiseTitle title={title} subTitle={subTitle} />
            <FeatureBoxes data={features} />
        </Box>
    );
};

export default Features;
