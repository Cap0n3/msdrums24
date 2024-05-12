import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import BasicSection from "../common/basicSection/BasicSection";
import PriceCard from "./subcomponents/PriceCard";

const Pricing = ({ cardsData, contrast }) => {
    const theme = useTheme();

    // Map the cards data to the PriceCard components
    const priceCards = cardsData.map((option, index) => {
        const cardKey = Object.keys(option)[0];
        const cardData = option[cardKey];
        return (
            <PriceCard
                key={index}
                image={cardData.image}
                title={cardData.title}
                price={cardData.price}
                paymentFrequency={cardData.paymentFrequency}
                sellingPoints={cardData.sellingPoints}
                action={cardData.action}
                backgroundColor={theme.palette.background.paper}
                highlight={cardData.highlight}
            />
        );
    });

    return (
        <BasicSection
            backgroundColor={theme.palette.background.default}
            contrast={contrast}
            paddingTop={12}
            paddingBottom={12}
        >
            <Stack
                direction={{ xs: "column", lg: "row" }}
                spacing={4}
                sx={{ 
                    display: "flex", 
                    width: "100%", 
                    justifyContent: "center",
                    alignItems: "center", 
                }}
            >
                {priceCards}
            </Stack>
        </BasicSection>
    );
};

export default Pricing;
