import React, { useContext } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import LanguageContext from "../Context/LanguageContext";

export default function Header() {
  const { texts, handleLanguage } = useContext(LanguageContext);
  return (
    <header>
      <Link to="/" className="square">
        <h1 className="logo">B</h1>
      </Link>

      <div className="lang" onClick={handleLanguage}>
        <i className="fi fi-rr-globe ico"></i>
        <h2>{texts.language}</h2>
      </div>
    </header>
  );
}
