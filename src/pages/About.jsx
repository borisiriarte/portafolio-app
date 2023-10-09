import React, { useContext } from "react";
import "../styles/About.css";
import LanguageContext from "../Context/LanguageContext";

function About() {
  const { texts } = useContext(LanguageContext);
  return (
    <div className="about-container container">
      <div className="container-left">
        <p dangerouslySetInnerHTML={{ __html: texts.aboutParaghraph }}></p>
      </div>
      <div className="container-right">
        <img src={"src/assets/icons/html.png"} alt="" />
        <img src={"src/assets/icons/css-3.png"} alt="css" />
        <img src={"src/assets/icons/bootstrap.png"} alt="" />
        <img src={"src/assets/icons/js.png"} alt="" />
        <img src={"src/assets/icons/atom.png"} alt="" />
        <img src={"src/assets/icons/database.png"} alt="" />
        <img src={"src/assets/icons/mysql.png"} alt="" />
        <img src={"/src/assets/icons/postgre.png"} alt="" />
        <img src={"/src/assets/icons/git.png"} alt="" />
        <img src={"src/assets/icons/github.png"} alt="" />
        <img src={"src/assets/icons/java.png"} alt="" />
        <img src={"src/assets/icons/spring.png"} alt="" />
        <img src={"src/assets/icons/spring-boot.png"} alt="" />
        <img src={"src/assets/icons/visual-basic.png"} alt="" />
        <img src={"src/assets/icons/intellij.png"} alt="" />
        <img src={"src/assets/icons/adobe-photoshop-logo.png"} alt="" />
        <img src={"src/assets/icons/illustrator.png"} alt="" />
      </div>
    </div>
  );
}

export default About;
