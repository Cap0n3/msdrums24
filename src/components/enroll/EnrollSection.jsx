import React from "react";
import CustomForm from "../common/forms/customForm/CustomForm";
import BasicSection from "../common/basicSection/BasicSection";

const EnrollSection = () => {

    return (
        <BasicSection
            identifier="enroll"
            contrast
            direction="column"
        >
            <CustomForm />
        </BasicSection>
    );
};

export default EnrollSection;