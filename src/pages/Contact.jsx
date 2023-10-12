import React from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="contact-container container"
      initial={{ opacity: 0, filter: "blur(50px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      exit={{ opacity: 0, filter: "blur(50px)" }}
      transition={{ duration: 0.5 }}
    >
      <a href="">
        <i
          className="fi fi-sr-at gmail"
          data-text="borismiashiro@gmail.com"
        ></i>
      </a>
      <a href="https://www.linkedin.com/in/boris-rommel-iriarte-miashiro-47771a23a/">
        <i className="fi fi-brands-linkedin linkedin" data-text="LinkedIn"></i>
      </a>
      <a href="https://github.com/borisiriarte">
        <i className="fi fi-brands-github github" data-text="Github"></i>
      </a>
      <a href="https://www.facebook.com/iriartemiashiro">
        <i
          className="fi fi-brands-facebook-messenger messenger"
          data-text="Messenger"
        ></i>
      </a>
    </motion.div>
  );
}

export default Contact;
