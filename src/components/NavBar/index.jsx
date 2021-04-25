import { Link } from "react-router-dom";
import "./style.css";
import "./playPause.js";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1 className="text-white text-2xl font-bold p-10 drop-shadow-md">
            Wild Code Quiz
          </h1>
        </Link>
      </div>
      <div className="nav-wrapper">

        <div>
          <audio id="audio">
            <source src="media/audio.mp3" type="audio/mpeg" />
          </audio>
          <button className="button-1" id="playPauseBTN" onClick="playPause()">
            Play &#9658;
          </button>
          &nbsp; &nbsp;
          <button className="button-1" onClick="stop()">
            Stop &#9611;
          </button>
        </div>


      </div>
    </nav>
  );
};

export default NavBar;