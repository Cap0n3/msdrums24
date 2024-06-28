import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import PlansSection from "../components/plans/PlansSection";
import { titles, pricingTable, infos } from "../data/plans.data";
import SEOBlock from "../components/seoBlock/SEOBlock";
import seoData from "../data/seo.data.json";

const Plans = () => {
    const { language } = useContext(LangContext);

    return (
        <>
            <SEOBlock data={seoData["plans"]} />
            <PlansSection
                titles={titles[language]}
                data={pricingTable[language]}
                additionalInfos={infos[language]}
            />
        </>
    );
};

export default Plans;
