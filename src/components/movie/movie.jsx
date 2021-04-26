import React from "react";
import Image from "../image/image";
import "./movie.css";
const Movie = ({ name, year, genre, director, actors, src }) => {
  return (
    <div className="movieContainer">
      <div className="movieWrapper">
        <div className="movieInfo">
          <div>
            <strong>Movie name:</strong> {name}
          </div>
          <div>
            <strong>Release year:</strong> {year}
          </div>
          <div>
            <strong>Genre:</strong> {genre}
          </div>
          <div>
            <strong>Director:</strong> {director}
          </div>
          <div>
            <strong>Actors: </strong> {actors}
          </div>
          <div className="movieImage">
            <Image src={src} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movie;
