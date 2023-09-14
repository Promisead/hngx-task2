import React from "react";
import SideNav from "../components/SideNav";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../css/Movie.css";
import { AiFillStar, AiOutlineDown } from "react-icons/ai";
import rectangle2 from "../images/rectangle2.png";
import { Link } from "react-router-dom";
import { ImTicket } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Movie = () => {
  const params = useParams();
  let [movie, setMovie] = useState(null);
  let apiKey = "807ca39e3d474d4e081ef8110b4683d8";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`)
      .then((reponse) => reponse.json())
      .then((data) => setMovie(data));
  }, [params.id, apiKey]);

  console.log(movie);

  return (
    <>
      {!movie ? (
        <Loader />
      ) : (
        <div>
          <SideNav />
          <div className="movie-container">
            <div className="movie-header">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt=""
              />
              <div className="play-icon">
                <div className="play">
                  <FaPlay />
                </div>
                <span>Watch Trailer</span>
              </div>
            </div>
            <div className="movie-text">
              <div className="top">
                <div className="left">
                  <span style={{ fontWeight: "bold" }}>
                    <span datatestid="movie-title">Top Gun: Maverick</span> •{" "}
                    <span datatestid="movie-release-date">
                      {new Date(movie.release_date).toUTCString()}
                    </span>
                    • PG-13 •{" "}
                    {typeof movie.runtime === "number" ? (
                      <span datatestid="movie-runtime">
                        {<span>{Math.floor(movie.runtime / 60)}</span>}h{" "}
                        <span>{movie.runtime % 60}</span>m
                      </span>
                    ) : (
                      "N/A"
                    )}
                  </span>
                  {movie.genres &&
                    movie.genres.map((x) => <small key={x.id}>{x.name}</small>)}
                </div>
                <div className="right">
                  <AiFillStar />
                  <span>8.5</span>
                  <span>|</span>
                  <span>350k</span>
                </div>
              </div>
              <div className="main">
                <div className="left">
                  <p className="about" datatestid="movie-overview">
                    {movie.overview}
                  </p>{" "}
                  <br />
                  <p>
                    <span>Director:</span>&nbsp;
                    <span>John Doe</span>
                  </p>{" "}
                  <br />
                  <p>
                    <span>Writers:</span>&nbsp;
                    <span>John Doe, Mary Smith</span>
                  </p>{" "}
                  <br />
                  <p>
                    <span>Stars:</span>&nbsp;
                    <span>John Doe, Mary Smith, Morgan Freeman</span>
                  </p>{" "}
                  <br /> <br />
                  <div className="rated">
                    <span className="first">Top rated movie #65</span>
                    <span className="second">
                      <span>Awards 9 nominations</span> <AiOutlineDown />
                    </span>
                  </div>
                </div>
                <div className="right">
                  <Link>
                    <ImTicket />
                    <span>See Showtimes</span>
                  </Link>
                  <Link>
                    <FiMenu />
                    <span>More watch options</span>
                  </Link>
                  <div className="img-box">
                    <img src={rectangle2} alt="" />
                    <span>
                      <FiMenu />
                      <small>The Best Movies and shows in september</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
