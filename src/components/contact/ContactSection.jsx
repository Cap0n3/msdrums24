import React from "react";
import { useTheme } from "@mui/material";
import GridSection from "../common/gridSection/GridSection";
import ContactForm from "../common/forms/contactForm/ContactForm";
import Map from "./subcomponents/Map";

const ContactSection = ({ data, mapCords, formMessages }) => {
    const theme = useTheme();
    return (
        <GridSection
            contents={[
                {
                    children: (
                        <ContactForm
                            title={data.title}
                            subTitle={data.subTitle}
                            warning={data.warning}
                            formMessages={formMessages}
                        />
                    ),
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                },
                {
                    children: <Map latitude={mapCords.latitude} longitude={mapCords.longitude} percentageWidth={90} />,
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
