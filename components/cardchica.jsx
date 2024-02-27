import React from "react";
import Card from "./Card";
import data from "../public/pet.data.json";

import style from "./cardchica.module.css";

const Cards = () => {
  return (
    <div className={style.cardsContainer}>
      {Array.isArray(data) &&
        data.slice(0, 3).map((elem, index) => (
          <Card
            key={elem.index}
            imagen={elem.images}
            nombre={elem.name}
            raza={elem.species}
            edad={elem.age}
            tamano={elem.size}
            genero={elem.gender}
            localidad={elem.city}
          />
        ))}
    </div>
  );
};

export default Cards;
