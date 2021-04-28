import { Link } from "react-router-dom";
import React from "react";
import "./style.css";
import PlayButton from "../MusicPlayer/MusicPlayer"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dppglrm2s/image/upload/v1619375057/wcq_y3hzgr.png"
            alt="brand"
          />
          <h1 className="text-white text-sm ml-2 font-bold drop-shadow-md">
            Wild Code Quiz
          </h1>
        </Link>
      </div>
      <div className="nav-wrapper">
        <img
          className="munotes"
          src="https://res.cloudinary.com/dppglrm2s/image/upload/v1619376891/music-notes_qpsxp9.png"
          alt="brand"
        />
        &nbsp;
        &nbsp;

        <div>
          {/* <audio id="audio">
            <source src="media/audio.mp3" type="audio/mpeg" />
          </audio>
          <button className="button-1" id="playPauseBTN" onClick={PlayButton}>
            Play &#9658;
          </button>
          &nbsp; &nbsp;
          <button className="button-1" onClick="stop()">
            Stop &#9611;
          </button> */}
          <PlayButton className="button-1"/>
          <h3 className="text-white text-xs mt-2">Think twice! No pause! </h3>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

