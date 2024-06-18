import React from "react";
import { useTheme } from "@mui/material";
import GridSection from "../common/gridSection/GridSection";
import ContactForm from "../common/forms/contactForm/ContactForm";
import Map from "./subcomponents/Map";

const ContactSection = () => {
    const theme = useTheme();
    return (
        <GridSection
            contents={[
                {
                    children: <ContactForm />,
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                },
                {
                    children: <Map percentageWidth={90} />,
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                },
            ]}
            identifier="contact"
            contrast={true}
            backgroundColor={theme.palette.background.default}
            smScreen_cellSpacing={8}
        />
    );
};

export default ContactSection;
