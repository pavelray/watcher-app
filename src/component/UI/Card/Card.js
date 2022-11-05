import React from "react";
import "./Card.scss";
const Card = ({ title, poster, releaseDate, ratings, genre, redirectToDetails }) => {

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={poster}
          alt="Movie Poster"
        />
      </div>
      <div className="card-body">
        <div className="card-body__title">{title}</div>
        <div className="card-body__info">
          <div>{releaseDate}</div>
          <div>{ratings}</div>
        </div>
        <div className="card-body__genre">
          <div>{genre.split(",").join(", ")}</div>
        </div>
      </div>
      <div className="card-footer">
        <button className="card-btn-cta" onClick={redirectToDetails}>Details</button>
      </div>
    </div>
  );
};

export { Card };
export default Card;
