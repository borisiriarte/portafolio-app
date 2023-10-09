import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Dock.css";
import LanguageContext from "../Context/LanguageContext";

function Dock() {
  const { texts, handleLanguage } = useContext(LanguageContext);
  return (
    <div id="header-navbar">
      <Link to="/" className="square" id="square-b">
        <h1 className="logo" id="logo-b">
          B
        </h1>
      </Link>
      <div className="icons">
        <Link to="/" className="icon">
          <i className="fi fi-rr-house-blank"></i>
          <p className="name">{texts.icons[0]}</p>
        </Link>
        <Link to="/about" className="icon">
          <i className="fi fi-rs-user"></i>
          <p className="name">{texts.icons[1]}</p>
        </Link>
        <Link to="/projects" className="icon">
          <i className="fi fi-rr-briefcase-blank"></i>
          <p className="name">{texts.icons[2]}</p>
        </Link>
        <Link to="/contact" className="icon">
          <i className="fi fi-rr-comment-alt"></i>
          <p className="name">{texts.icons[3]}</p>
        </Link>
      </div>
      <div className="lang" id="lang-b" onClick={handleLanguage}>
        <i className="fi fi-rr-globe ico"></i>
        <h2>{texts.language}</h2>
      </div>
    </div>
  );
}

export default Dock;
