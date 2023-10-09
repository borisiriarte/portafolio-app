import React, { useContext } from "react";
import "../styles/Home.css";
import LanguageContext from "../Context/LanguageContext";

function Home() {
  const { texts } = useContext(LanguageContext);
  return (
    <div className="home-container container">
      <h1 id="main-title">
        BORIS IRIART<span className="last-letter">E</span>
      </h1>
      <h2 id="secondary-title">{texts.secondaryTitle}</h2>
    </div>
  );
}

export default Home;
