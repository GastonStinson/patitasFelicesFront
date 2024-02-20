import React from "react";
import Image from "next/image";

import style from "./card.module.css";

const Card = ({ imagen, nombre, raza, edad, tamano, genero, localidad }) => {
  return (
    <div className={style.cardContainer}>
      <Image
        width={500}
        height={200}
        src={imagen[0]}
        alt="mascota"
        objectFit="cover"
        className={style.imagenAdopcion}
      />
      <div className={style.dataContainer}>
        <h5 className={style.name}>{nombre}</h5>
        <div className="p-2">
          <p className="font-bold">Raza: {raza}</p>
          <p className="font-bold">Edad: {edad}</p>
          <p className="font-bold">Tamaño: {tamano}</p>
          <p className="font-bold">Genero: {genero}</p>
          <p className="font-bold">Localidad: {localidad}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
