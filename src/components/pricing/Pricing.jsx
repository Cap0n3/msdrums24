import React, { useState, useEffect } from "react";
import { Box, Stack, Fade } from "@mui/material";
import { useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";
import BasicSection from "../common/basicSection/BasicSection";
import PriceCard from "./subcomponents/PriceCard";
import useMediaQuery from "@mui/material/useMediaQuery";

const Pricing = ({ identifier, cardsData, contrast }) => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const isMD = useMediaQuery(theme.breakpoints.down("lg"));

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: isMD ? 0.1 : 0.5,
        delay: 200,
    });

    useEffect(() => {
        console.log("isMD: ", isMD);
    }, [isMD]);

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
                        //flexDirection: { xs: "column", lg: "row" },
                        width: "100%",
                        minHeight: 320,
                        justifyContent: "center",
                        alignItems: "center",
                        //border: "1px solid red"
                    }}
                >
                    {priceCards}
                </Stack>
            </Fade>
        </BasicSection>
    );
};

export default Pricing;
