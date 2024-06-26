import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import EnrollSection from "../components/enroll/EnrollSection";
import { EnrollData } from "../data/enroll.data";

const Enroll = () => {
    const { language } = useContext(LangContext);

    return (
        <>
            <EnrollSection title={EnrollData[language].title} subtitle={EnrollData[language].subtitle} />
        </>
    );
};

export default Enroll;
