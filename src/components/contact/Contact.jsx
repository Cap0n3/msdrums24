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
                    children: <ContactForm />,
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                },
                {
                    children: <Map />,
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
            spacing={0}
            smScreen_cellSpacing={8}
            paddingTop={{ xs: 8, md: 0 }}
            paddingBottom={0}
            paddingX={0}
            minHeight={800}
        />
    );
};

export default Contact;
