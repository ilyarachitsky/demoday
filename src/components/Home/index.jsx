import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container mt-5">
      <div className="flex flex-col">
        <h1 className="text-center font-bold text-2xl text-white">
          Select category:
        </h1>
        <div className="grid grid-cols-3 gap-8 mt-6">
          <Link to="/tv">
            <button className="bg-white text-grey-500 font-bold p-10 shadow-md rounded-md container">
              TV
            </button>
          </Link>

          <Link to="/musicer">
            <button className="bg-white text-grey-500 font-bold p-10 shadow-md container rounded-md">
              Music
            </button>
          </Link>

          <Link to="/videogames">
            <button className="bg-white text-grey-500 font-bold p-10 shadow-md container rounded-md">
              Video Games
            </button>
          </Link>

          <Link to="/sport">
            <button className="bg-white text-grey-500 font-bold p-10 shadow-md container rounded-md">
              Sport
            </button>
          </Link>

          <Link to="/historia">
            <button className="bg-white text-grey-500 font-bold p-10 shadow-md container rounded-md">
              History
            </button>
          </Link>

          <Link to="/comics">
            <button className="bg-white text-grey-500 font-bold p-10 shadow-md container rounded-md">
              Comics
            </button>
          </Link>

          <Link to="/board">
            <button className="bg-white text-grey-500 font-bold p-10 shadow-md container rounded-md">
              Board Games
            </button>
          </Link>

          <Link to="/computers">
            <button className="bg-white text-grey-500 font-bold p-10 shadow-md container rounded-md">
              Computers
            </button>
          </Link>

          <Link to="/geo">
            <button className="bg-white text-grey-500 font-bold p-10 shadow-md container rounded-md">
              Geography
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
