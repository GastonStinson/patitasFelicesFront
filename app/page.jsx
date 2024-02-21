import style from "./home.module.css";
import Cards from "@/components/Cards";
import Patrocinadores from "@/components/patrocinadores";
import Fundaciones from "@/components/fundaciones";


export default function Home() {
  return (
    <main>
      <div className={style.mainContainer}>
        <div className={style.left}>
          <h3 className="">
            <span>Adoptá</span> uno más a tu familia
          </h3>
          <p>
            Buscamos combatir el abandono y maltrato animal desde el respeto y
            el amor por los animales.
          </p>
        </div>
        <div className={style.right}>
          <div className={style.stats}>
            <div>
              <h5 className={style.h5}>544</h5>
              <p>Esperando un hogar</p>
            </div>
            <div>
              <h5 className={style.h5}>756</h5>
              <p>Adoptados el ultimo año</p>
            </div>
            <div>
              <h5 className={style.h5}>422</h5>
              <p>En transito</p>
            </div>
          </div>
        </div>
      </div>
      <h2>Conocé a tu próxima mascota</h2>
      <p>Ellos te esperan para brindarte todo el amor y companía que necesitas. ¿Qué estás esperando? </p>
      <Cards />
      <Patrocinadores />
      <div>
      <p>El proceso</p>
      <h2>Narices frías y corazones contentos</h2>
      <p>Al momento de adoptar asumís un acto de responsabilidad y compromiso por lo que es importante que estés capacitado para hacerlo. </p>
      </div>
      <div>

      </div>

      <button className={style.contactanosButton}>Contactanos</button>
      <Fundaciones />
      <div>
        <h1 className={style.dar}>Dar<span className={style.rojo}> amor</span>,para recibir<span className={style.rojo}> amor</span></h1>
        <p>La vida es como el eco; Lo que das, lo recibes. Lo que siembras, cosechas. Lo que ves en otros, es tu propio reflejo. La vida es como el eco.... Siempre te regresa lo que das.Rescatando, defendiendo, cuidando, esterilizando, educando.. Todos los días trabajando para construir un lugar mejor! Agradecemos tu interés, apoyo y ayuda al Refugio.¡Haces que nuestra motivación, trabajo y equipo siga creciendo día a día! Derrotemos al abandono y promovamos el bienestar y felicidad</p>
        <button className={style.contactanosButton}>Hace tu donación</button>
        
      </div>

      <h2>Nuestro comportamiento</h2>

    <div>
      



    </div>

      




    </main>
  );
}
