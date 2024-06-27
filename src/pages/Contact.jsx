import React from "react";
import { useContext } from "react";
import ContactSection from "../components/contact/ContactSection";
import { contactTextData, directionTextData, formMessages } from "../data/contact.data";
import { LangContext } from "../context/LangContext";
import RiseTitle from "../components/common/riseTitle/RiseTitle";
import DirectionsBox from "../components/misc/DirectionsBox";
import BasicSection from "../components/common/basicSection/BasicSection";

const Contact = () => {
    const { language } = useContext(LangContext);

    return (
        <>
            <ContactSection data={contactTextData[language]} formMessages={formMessages[language]} />
            <BasicSection direction="column">
                <RiseTitle
                    title={directionTextData[language].title}
                    subTitle={directionTextData[language].subTitle}
                />
                <DirectionsBox
                    itineraries={directionTextData[language].itineraries}
                />
            </BasicSection>
        </>
    );
};

export default Contact;
