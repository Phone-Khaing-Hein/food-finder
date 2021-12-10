import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./Detail.css";

const Detail = () => {
  const [result, setResult] = useState({});

  const param = useParams();
  const navigate = useNavigate();

  const dataFetch = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.id}`
    );
    setResult(data.meals[0]);
  };

  useEffect(() => {
    dataFetch();
    // eslint-disable-next-line
  }, []);

  const back = () => {
    navigate("/");
  };

  return (
    <div>
      {result.strMeal && (
        <>
          <p className="back" onClick={back}>
            {"<< Bact To Home"}
          </p>
          <div className="detail">
            <img src={result.strMealThumb} alt="" className="detailImg" />
            <div className="detailText">
              <h2 className="detailTitle">{result.strMeal}</h2>
              <p className="detailInstruction">{result.strInstructions}</p>
              <a
                href={result.strYoutube}
                target="_blank"
                className="detailLink"
              >
                Watch Tutorial
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
