import React from "react";
import style from "./parrafoAdopcion.module.css";

const Adopcion = () => {
  return (
    <div>
      <div className={style.paragraphContainer}>
        <h3 className={style.adopcionTitle}>
          Cada mascota merece un hogar amoroso. <br />
          <span style={{ color: "red" }}>Adoptá</span> una mascota hoy.
        </h3>
        <p>
          Explore nuestros animales disponibles y obtenga más información sobre
          el proceso de adopción. Juntos, podemos rescatar, rehabilitar y
          realojar a las mascotas necesitadas. Gracias por apoyar nuestra misión
          de llevar alegría a las familias a través de la adopción de mascotas.
        </p>
      </div>
    </div>
  );
};

export default Adopcion;
