import React, { useState, useEffect } from "react";
import { Stack, Fade } from "@mui/material";
import { useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";
import BasicSection from "../common/basicSection/BasicSection";
import PriceCard from "./subcomponents/PriceCard";

const Pricing = ({ identifier, cardsData, contrast }) => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

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
                inView={isVisible}
                transitionTime={500 + index * 500}
            />
        );
    });


    return (
        <BasicSection
            identifier={identifier}
            backgroundColor="#B0BEC5"
            contrast={contrast}
            paddingTop={12}
            paddingBottom={12}
        >
            <Fade in={inView} timeout={2000}>
                <Stack
                    ref={ref}
                    direction={{ xs: "column", lg: "row" }}
                    spacing={6}
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {priceCards}
                </Stack>
            </Fade>
        </BasicSection>
    );
};

export default Pricing;
