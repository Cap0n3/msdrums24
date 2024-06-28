import React, { useContext } from "react";
import HeroHeader from "../components/headers/HeroHeader";
import Features from "../components/features/Features";
import Showcase from "../components/showcase/Showcase";
import Testimonials from "../components/testimonials/Testimonials";
import QnA from "../components/qnA/QnA";
import Pricing from "../components/pricing/Pricing";
import headerData from "../data/header.data.json";
import { featureData } from "../data/features.data";
import qnaData from "../data/qnA.data.json";
import { TestimonialsData } from "../data/testimonials.data";
import showcaseData from "../data/showcase.data.json";
import priceCardsData from "../data/pricing.data.json";
import C2aParallax from "../components/c2aParallax/C2aParallax";
import { LangContext } from "../context/LangContext";
import SEOBlock from "../components/seoBlock/SEOBlock";
import seoData from "../data/seo.data.json";

const HomePages = () => {
    const { language } = useContext(LangContext);

    return (
        <>
            <SEOBlock data={seoData["home"]} />
            <HeroHeader
                title={headerData[language].header_title}
                description={headerData[language].header_description}
                call2Action={headerData[language].header_call2Action}
            />
            <Features
                identifier="features"
                title={language === "en" ? "Features" : "Je vous propose"}
                subTitle={
                    language === "en"
                        ? "Here are some of the features that you'll love."
                        : "Un enseignement sérieux et convivial, adapté à vos envies ou objectifs et à votre rythme, peu importe votre niveau !"
                }
                features={featureData[language]}
                contrast={true}
            />
            <Showcase identifier="about" data={showcaseData[language]} />
            <C2aParallax />
            <Testimonials
                identifier="testimonials"
                title={
                    language === "en"
                        ? "What my students say"
                        : "Ce que mes élèves en disent"
                }
                testimonials={TestimonialsData[language]}
            />
            <Pricing
                identifier="pricing"
                cardsData={priceCardsData[language]}
                contrast={true}
            />
            <QnA
                identifier="qna"
                title={
                    language === "en"
                        ? "Frequently asked questions"
                        : "Questions fréquentes"
                }
                subtitle={
                    language === "en"
                        ? "Here are some of the most commonly asked questions."
                        : "Voici les questions les plus courantes."
                }
                questions={qnaData[language]}
            />
            {/* <BasicSection
                children={<CustomForm />}
            /> */}
        </>
    );
};

export default HomePages;
