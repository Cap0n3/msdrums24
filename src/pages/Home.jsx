import React from "react";
import HeroHeader from "../components/headers/HeroHeader";
import Features from "../components/features/Features";
import Showcase from "../components/showcase/Showcase";
import Testimonials from "../components/testimonials/Testimonials";
import QnA from "../components/qnA/QnA";
import Pricing from "../components/pricing/Pricing";
import headerData from "../data/header.data.json";
import qnaData from "../data/qnA.data.json";
import showcaseData from "../data/showcase.data.json";
import priceCardsData from "../data/pricing.data.json";

const HomePages = () => {
    return (
        <>
            {/* <Navigation />
            <ScrollToHash /> */}
            <HeroHeader
                title={headerData.header_title}
                description={headerData.header_description}
                call2Action={headerData.header_call2Action}
            />
            <Features
                identifier="features"
                title="Say Hello to great features!"
                subTitle="Here are some of the features that you'll love."
                contrast={true}
            />
            <Showcase identifier="showcase" data={showcaseData} />
            <Testimonials
                identifier="testimonials"
                title="What our customers say"
                contrast={true}
            />
            <QnA identifier="qna" questions={qnaData} />
            <Pricing
                identifier="pricing"
                cardsData={priceCardsData}
                contrast={true}
            />
        </>
    );
};

export default HomePages;
