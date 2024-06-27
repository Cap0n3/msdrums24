import React from "react";
import CustomForm from "../common/forms/customForm/CustomForm";
import BasicSection from "../common/basicSection/BasicSection";

const EnrollSection = ({ title, subtitle, warning }) => {
    return (
        <BasicSection identifier="enroll" contrast direction="column">
            <CustomForm title={title} subtitle={subtitle} warning={warning} />
        </BasicSection>
    );
};

export default EnrollSection;
