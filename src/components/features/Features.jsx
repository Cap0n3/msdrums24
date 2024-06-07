import React from "react";
import { useTheme } from "@mui/material";
import { darken } from "polished";
import { Box } from "@mui/material";
import RiseTitle from "../common/riseTitle/RiseTitle";
import FeatureBoxes from "./subcomponents/FeatureBoxes";
import BasicSection from "../common/basicSection/BasicSection";

const Features = ({
    identifier,
    title,
    subTitle,
    features,
    contrast = false,
}) => {
    const theme = useTheme();

    return (
        <BasicSection
            identifier={identifier}
            contrast={contrast}
            direction="column"
        >
            <RiseTitle title={title} subTitle={subTitle} />
            <FeatureBoxes data={features} />
        </BasicSection>
    );
};

export default Features;
