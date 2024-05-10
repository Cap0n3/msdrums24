import React from "react";
import { useTheme } from "@emotion/react";
import { darken } from "polished";
import { Box } from "@mui/material";
import RiseTitle from "../common/riseTitle/RiseTitle";
import FeatureBoxes from "./subcomponents/FeatureBoxes";
import { features } from "../../data/home/features.data";

const Features = ({ title, subTitle, contrast = false }) => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            py={4}
            sx={{
                flexGrow: 1,
                backgroundColor: contrast
                    ? darken(0.008, theme.palette.background.default)
                    : theme.palette.background.default,
                minHeight: "500px",
            }}
        >
            <RiseTitle title={title} subTitle={subTitle} />
            <FeatureBoxes data={features} />
        </Box>
    );
};

export default Features;
