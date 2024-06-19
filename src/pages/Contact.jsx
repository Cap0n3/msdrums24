import React from "react";
import { useContext } from "react";
import ContactSection from "../components/contact/ContactSection";
import contactData from "../data/contact.data.json";
import { LangContext } from "../context/LangContext";

const Contact = () => {
    const { language } = useContext(LangContext);

    return <ContactSection data={contactData[language]} />;
};

export default Contact;
