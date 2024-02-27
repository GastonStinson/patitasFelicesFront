import style from "./cajanarices.module.css"
import Image from "next/image";


export default function cajanarices() {
    return (
        <main className={style.cuerpo}>


            <div className={style.contenedor}>
                <p className={style.izquierda}>El proceso</p>
                <h2 className={style.h2}>Narices frías y corazones contentos</h2>

                <p className={style.derecha}>Al momento de adoptar asumís un acto de responsabilidad y compromiso por lo que es importante que estés capacitado para hacerlo. </p>
            </div>


            <div className={style.elementos}>
                <Image className={style.patrocinadorImgarriba} src="/images/narices.png" width={735.96} height={354} alt="logo-ayudacan" />
                <Image className={style.patrocinadorImgabajo} src="/images/narices2.png" width={735.96} height={354} alt="logo-ayudacan" />
                <Image className={style.patrocinadorImgarriba} src="/images/narices3.png" width={735.96} height={354} alt="logo-ayudacan" />
                <Image className={style.patrocinadorImgabajo} src="/images/narices4.png" width={735.96} height={354} alt="logo-ayudacan" />


            </div>
            <div className={style.contenedorboton}>
            <button className={style.contactanosButton}>Contactanos</button>
            </div>






        </main >

    );
}
