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
                imageAlt={cardData.title}
                imageTitle={cardData.title}
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
            paddingTop={{ xs: 8, md: 12 }}
            paddingBottom={{ xs: 8, md: 12 }}
        >
            <Fade in={inView} timeout={2000}>
                <Box
                    ref={ref}
                    sx={{
                        display: "flex",
                        flexWrap: { xs: "wrap", lg: "nowrap" },
                        gap: { xs: 4, lg: 8 },
                        width: "100%",
                        minHeight: 320,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {priceCards}
                </Box>
            </Fade>
        </BasicSection>
    );
};

export default Pricing;
