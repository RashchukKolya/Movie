import React from "react";
import style from "./Card.module.css";

const API = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
const Card = ({ el }) => {
  return (
    <div className={style.card}>
      <img
        className={style.img}
        src={`${API}${el.poster_path}`}
        alt={el.title}
      />
      <h2>{el.title}</h2>
      <h3>Average rating: {el.vote_average}</h3>
      <h3>
        Release date:{" "}
        {el.release_date
          .split("-")
          .reverse()
          .join(".")}
      </h3>
      <p><span className={style.bold}>Overview: </span>{el.overview}</p>
    </div>
  );
};

export default Card;
