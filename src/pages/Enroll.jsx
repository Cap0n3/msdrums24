import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import EnrollSection from "../components/enroll/EnrollSection";
import { enrollTextData, formMessages } from "../data/enroll.data";
import SEOBlock from "../components/seoBlock/SEOBlock";
import seoData from "../data/seo.data.json";

const Enroll = () => {
    const { language } = useContext(LangContext);

    return (
        <>
            <SEOBlock data={seoData["enroll"]} />
            <EnrollSection
                title={enrollTextData[language].title}
                subtitle={enrollTextData[language].subtitle}
                warning={enrollTextData[language].warning}
                formMessages={formMessages[language]}
            />
        </>
    );
};

export default Enroll;
