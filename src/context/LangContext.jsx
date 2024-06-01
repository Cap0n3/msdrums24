import React, { useState, createContext } from "react";

export const LangContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, SetLanguage] = useState("fr");
  const value = { language, SetLanguage };

  return (
    <LangContext.Provider value={value}>
      { children }
    </LangContext.Provider>
  );
};