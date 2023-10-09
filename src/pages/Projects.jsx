import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="project-container container">
      <div className="pic-container">
        <img src={"src/assets/img/wallpaperflare.com_wallpaper.jpg"} alt="" />
        <div className="info-container">
          <div className="title">Sukuna</div>
          <div className="description">Tools</div>
        </div>
      </div>
      <div className="pic-container">
        <img
          src={"src/assets/img/wallpaperflare.com_wallpaper (1).jpg"}
          alt=""
        />
        <div className="info-container">
          <div className="title">Sukuna</div>
          <div className="description">Tools</div>
        </div>
      </div>
      <div className="pic-container">
        <img
          src={"src/assets/img/wallpaperflare.com_wallpaper (2).jpg"}
          alt=""
        />
        <div className="info-container">
          <div className="title">Title</div>
          <div className="description">Tools</div>
        </div>
      </div>
      <div className="pic-container">
        <img
          src={"src/assets/img/wallpaperflare.com_wallpaper (3).jpg"}
          alt=""
        />
        <div className="info-container">
          <div className="title">Title</div>
          <div className="description">Tools</div>
        </div>
      </div>
      <div className="pic-container">
        <img
          src={"src/assets/img/wallpaperflare.com_wallpaper (4).jpg"}
          alt=""
        />
        <div className="info-container">
          <div className="title">Satorou</div>
          <div className="description">Tools</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
