import React from "react";

import style from "./filters.module.css";

const Filters = () => {
  return (
    <div className={style.filterContainer}>
      <div>
        <p className={style.filterName}>ESPECIE</p>
        <select name="" id="">
          <option value="">Cualquiera</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
        </select>
      </div>
      <div>
        <p className={style.filterName}>TAMAÑO</p>
        <select name="Cualquiera" id="" className={style.select}>
          <option value="">Cualquiera</option>
          <option value="Grande">Grande</option>
          <option value="">Mediano</option>
          <option value="">Chico</option>
        </select>
      </div>
      <div>
        <p className={style.filterName}>EDAD</p>
        <select name="Cualquiera" id="">
          <option value="">Cualquiera</option>
          <option value="">Cachorro</option>
          <option value="">Joven</option>
          <option value="">Adulto</option>
        </select>
      </div>
      <div>
        <p className={style.filterName}>GENERO</p>
        <select name="Cualquiera" id="">
          <option value="">Cualquiera</option>
          <option value="">Macho</option>
          <option value="">Hembra</option>
        </select>
      </div>
      <div>
        <p className={style.filterName}>LOCALIDAD</p>
        <select name="Cualquiera" id="">
          <option value="">Cualquiera</option>
          <option value="">Rosario</option>
          <option value="">Mendoza</option>
          <option value="">Buenos Aires</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;



