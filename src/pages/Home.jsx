import React from "react";
import HeroHeader from "../components/headers/HeroHeader";
import Features from "../components/features/Features";
import FeatureShowcase from "../components/featureShowcase/FeatureShowcase";
import Testimonials from "../components/testimonials/Testimonials";
import QnA from "../components/qnA/QnA";
import headerData from "../data/home/header.data.json";
import qnaData from "../data/home/qnA.data.json";

const HomePages = () => {
    return (
        <>
            <HeroHeader
                title={headerData.header_title}
                description={headerData.header_description}
                call2Action={headerData.header_call2Action}
            />
            <Features
                title="Say Hello to great features!"
                subTitle="Here are some of the features that you'll love."
                contrast={true}
            />
            <FeatureShowcase />
            <Testimonials title="What our customers say" contrast={true} />
            <QnA questions={qnaData} />
        </>
    );
};

export default HomePages;
