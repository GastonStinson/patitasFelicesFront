import style from "./home.module.css";
import Cards from "@/components/Cards";
import Patrocinadores from "@/components/patrocinadores";
import Fundaciones from "@/components/fundaciones";
import Cajaimagenes from "@/components/cajaimagenes";
import Cajaperro from "@/components/cajaperro";
import Cajanarices from "@/components/cajanarices";
import Footer from "@/components/footer";



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
      <h2 className={style.h2}>Conocé a tu próxima mascota</h2>
      <p className={style.texto1}>Ellos te esperan para brindarte todo el amor y companía que necesitas. ¿Qué estás esperando? </p>
      <Cards />
      <Patrocinadores />
      
      {/* <div>
        <p>El proceso</p>
        <h2>Narices frías y corazones contentos</h2>
        <p>Al momento de adoptar asumís un acto de responsabilidad y compromiso por lo que es importante que estés capacitado para hacerlo. </p>
      </div> */}
      <Cajanarices/>
      

      
      <Fundaciones />
      <Cajaperro />
      <Cajaimagenes />
      <Footer/>








    </main>
  );
}
