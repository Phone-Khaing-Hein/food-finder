import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ title, imgURL, id }) => {
  return (
    <div className="cardWrapper">
      <img className="cardImage" src={imgURL} alt="" />
      <h2 className="cardTitle">{title}</h2>
      <Link to={`/detail/${id}`}>
        <button className="cardBtn">Watch Detail</button>
      </Link>
    </div>
  );
};

export default Card;
