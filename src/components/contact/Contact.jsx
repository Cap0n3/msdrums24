import React from "react";
import { useTheme } from "@mui/material";
import GridSection from "../common/gridSection/GridSection";
import ContactForm from "./subcomponents/ContactForm";
import Map from "./subcomponents/Map";

const Contact = () => {
    const theme = useTheme();
    return (
        <GridSection
            contents={[
                {
                    children: <Map />,
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    },
                },
                {
                    children: <ContactForm />,
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    },
                },
            ]}
            identifier="contact"
            contrast={true}
            backgroundColor={theme.palette.background.default}
            spacing={4}
        />
    );
};

export default Contact;
