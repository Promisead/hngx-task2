import React from "react";
import "../css/Movies.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import img1 from "../images/imbd.png";
import img2 from "../images/fruit.png";

const Movies = ({ topTen }) => {
  return (
    <div className="movies-container">
      <section>
        <h3>Featured Movies</h3>
        <Link>
          <span>see more</span>
          <MdOutlineArrowForwardIos />
        </Link>
      </section>
      <div className="movies">
        {topTen.map((x) => {
          return (
            <Link
              className="movie-card"
              datatestid="movie-card"
              to={`movie/${x.id}`}
              key={x.id}
            >
              <div className="svg-box">
                {x.id === 1 ? <span>TV SERIES</span> : <small></small>}
                <AiFillHeart />
              </div>
              <img
                datatestid="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${x.poster_path}`}
                alt=""
                className="img"
              />
              <small
                datatestid="movie-release-date"
                style={{ display: "block", marginBottom: "10px" }}
              >
                {x.release_date}
              </small>
              <h4 datatestid="movie-title">{x.original_title}</h4>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="ratings">
                  <span>
                    <img src={img1} alt="" />
                    <small>{x.popularity}/100</small>
                  </span>
                  <span>
                    <img src={img2} alt="" />
                    <small>{x.popularity}%</small>
                  </span>
                </div>
              </span>
              <small>Action, Adventure, Horror</small>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
