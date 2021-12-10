import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Card from "../../Components/Card/Card";

function Home() {
  const [result, setResult] = useState([]);

  const dataFetch = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
    );

    setResult(data.meals);
  };

  useEffect(() => {
    dataFetch();
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className="cards">
      {result.map((data) => (
        <Card
          title={data.strMeal}
          imgURL={data.strMealThumb}
          key={data.idMeal}
          id={data.idMeal}
        />
      ))}
    </div>
  );
}

export default Home;
