import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import EnrollSection from "../components/enroll/EnrollSection";
import { enrollTextData, formMessages } from "../data/enroll.data";

const Enroll = () => {
    const { language } = useContext(LangContext);

    return (
        <>
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
