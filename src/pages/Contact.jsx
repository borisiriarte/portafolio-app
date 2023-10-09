import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container container">
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
    </div>
  );
}

export default Contact;
