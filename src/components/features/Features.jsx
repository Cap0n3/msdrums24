import React, { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { darken } from "polished";
import { Box } from "@mui/material";
import FeatureTitle from "./subcomponents/FeatureTitle";
import FeatureBoxes from "./subcomponents/FeatureBoxes";
import { features } from "../../data/home/features.data";

const Features = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            py={4}
            sx={{
                flexGrow: 1,
                backgroundColor: darken(
                    0.008,
                    theme.palette.background.default,
                ),
            }}
        >
            <FeatureTitle
                title="Say Hello to great features!"
                subTitle="Here are some of the features that you'll love."
            />
            <FeatureBoxes data={features} />
        </Box>
    );
};

export default Features;
