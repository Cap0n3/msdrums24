import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import BasicSection from "../common/basicSection/BasicSection";
import PriceCard from "./subcomponents/PriceCard";

const Pricing = ({ contrast }) => {
    const theme = useTheme();
    return (
        <BasicSection
            backgroundColor={theme.palette.background.default}
            contrast={contrast}
            paddingTop={12}
            paddingBottom={12}
        >
            <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
                <PriceCard backgroundColor={theme.palette.background.paper} />
                <PriceCard backgroundColor={theme.palette.background.paper} highlight />
                <PriceCard backgroundColor={theme.palette.background.paper} />
            </Stack>
        </BasicSection>
    );
};

export default Pricing;
