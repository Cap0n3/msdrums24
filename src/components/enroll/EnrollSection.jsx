import React from "react";
import CustomForm from "../common/forms/customForm/CustomForm";
import BasicSection from "../common/basicSection/BasicSection";

const EnrollSection = ({ title, subtitle }) => {
    return (
        <BasicSection identifier="enroll" contrast direction="column">
            <CustomForm title={title} subtitle={subtitle} />
        </BasicSection>
    );
};

export default EnrollSection;
