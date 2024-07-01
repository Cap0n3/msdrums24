import React from "react";
import { useContext } from "react";
import ContactSection from "../components/contact/ContactSection";
import { contactTextData, directionTextData, formMessages, mapData } from "../data/contact.data";
import { LangContext } from "../context/LangContext";
import RiseTitle from "../components/common/riseTitle/RiseTitle";
import DirectionsBox from "../components/misc/DirectionsBox";
import BasicSection from "../components/common/basicSection/BasicSection";
import SEOBlock from "../components/seoBlock/SEOBlock";
import seoData from "../data/seo.data.json";

const Contact = () => {
    const { language } = useContext(LangContext);

    return (
        <>
            <SEOBlock data={seoData["contact"]} />
            <ContactSection data={contactTextData[language]} mapCords={mapData} formMessages={formMessages[language]} />
            <BasicSection direction="column">
                <RiseTitle
                    title={directionTextData[language].title}
                    subTitle={directionTextData[language].subTitle}
                />
                <DirectionsBox
                    address={directionTextData[language].address}
                    itineraries={directionTextData[language].itineraries}
                />
            </BasicSection>
        </>
    );
};

export default Contact;
