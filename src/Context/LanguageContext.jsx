import React, { createContext, useState } from "react";
import data from "../assets/db.json";

const LanguageContext = createContext();

const initialLanguage = "EN";
const info = data;
const LanguageProvider = ({ children }) => {
  const [Language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(info[1]);

  const handleLanguage = (e) => {
    let hasClass = e.target.classList.contains("lang");
    const lang = document.querySelector(".lang").lastElementChild.innerHTML;

    if (hasClass && lang === "ES") {
      setLanguage("EN");
      setTexts(info[1]);
    }

    if (hasClass && lang === "EN") {
      setLanguage("ES");
      setTexts(info[0]);
    }
  };

  const data = { handleLanguage, texts };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
