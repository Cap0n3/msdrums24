import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import EnrollSection from "../components/enroll/EnrollSection";

const Enroll = () => {
    const { language } = useContext(LangContext);

    return (
        <>
            <EnrollSection />
        </>
    );
};

export default Enroll;
