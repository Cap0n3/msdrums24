import React from "react";
import HeroHeader from "../components/headers/HeroHeader";
import Features from "../components/features/Features";
import FeatureShowcase from "../components/featureShowcase/FeatureShowcase";
import Testimonials from "../components/testimonials/Testimonials";
import jsonData from "../data/home/header.json";

const HomePages = () => {
    return (
        <>
            <HeroHeader
                title={jsonData.header_title}
                description={jsonData.header_description}
                call2Action={jsonData.header_call2Action}
            />
            <Features
                title="Say Hello to great features!"
                subTitle="Here are some of the features that you'll love."
            />
            <FeatureShowcase />
            <Testimonials title="What our customers say" />
        </>
    );
};

export default HomePages;
