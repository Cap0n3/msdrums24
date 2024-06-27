import React from "react";
import { useContext } from "react";
import ContactSection from "../components/contact/ContactSection";
import { contactTextData } from "../data/contact.data";
import { LangContext } from "../context/LangContext";
import RiseTitle from "../components/common/riseTitle/RiseTitle";
import DirectionsBox from "../components/misc/DirectionsBox";
import BasicSection from "../components/common/basicSection/BasicSection";

const Contact = () => {
    const { language } = useContext(LangContext);

    return (
        <>
            <ContactSection data={contactTextData[language]} />
            <BasicSection direction="column">
                <RiseTitle
                    title="Comment venir ?"
                    subTitle="Voici les itinéraires les plus pratiques"
                />
                <DirectionsBox />
            </BasicSection>
        </>
    );
};

export default Contact;
