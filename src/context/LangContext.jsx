import React, { useState, createContext } from "react";

export const LangContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("fr");
    const value = { language, setLanguage };

    return (
        <LangContext.Provider value={value}>{children}</LangContext.Provider>
    );
};
