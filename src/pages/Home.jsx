import React, { useContext } from "react";
import "../styles/Home.css";
import LanguageContext from "../Context/LanguageContext";
import { motion } from "framer-motion";

function Home() {
  const { texts } = useContext(LanguageContext);
  return (
    <motion.div
      className="home-container container"
      initial={{ opacity: 0, filter: "blur(50px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      exit={{ opacity: 0, filter: "blur(50px)" }}
      transition={{ duration: 0.5 }}
    >
      <h1 id="main-title">
        BORIS IRIART<span className="last-letter">E</span>
      </h1>
      <h2 id="secondary-title">{texts.secondaryTitle}</h2>
    </motion.div>
  );
}

export default Home;
