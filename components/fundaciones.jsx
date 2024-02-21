import style from "./fundaciones.module.css"
import Image from "next/image";


export default function fundaciones() {
    return (
        <main>
            <div>

                

                <div className={style.contenedor}>
                    <div className={style.descripcion}>
                    <p className={style.titulo}>FUNDACIONES Y REFUGIOS AMIGOS</p>
                    </div>

                    <div className={style.elementos}>
                    <Image className={style.patrocinadorImg} src="/images/fundaciones1.png" width={135.06} height={135.06} alt="logo-ayudacan" />
                    <Image className={style.patrocinadorImg} src="/images/fundaciones2.png" width={168.06} height={104.67} alt="logo-adopta" />
                    <Image className={style.patrocinadorImg} src="/images/fundaciones3.png" width={156.43} height={135.06} alt="logo-viva" />
                    <Image className={style.patrocinadorImg} src="/images/fundaciones4.png" width={141.04} height={135.06} alt="logo-mascotas" />
                    <Image className={style.patrocinadorImg} src="/images/fundaciones5.png" width={153.86} height={135.06} alt="logo-callejeritos" />


                    </div>
                   
                    
                    <div className={style.elementos}>
                    
                    <Image className={style.patrocinadorImg} src="/images/fundaciones6.png" width={145.31} height={129.07} alt="logo-vidanimal" />
                    <Image className={style.patrocinadorImg} src="/images/fundaciones7.png" width={135.06} height={134.2} alt="logo-perro" />
                    <Image className={style.patrocinadorImg} src="/images/fundaciones8.png" width={167.54} height={168.39} alt="logo-prhoibido" />
                    <Image className={style.patrocinadorImg} src="/images/fundaciones9.png" width={218.83} height={134.2} alt="logo-campito" />
                    </div>
                </div>

            </div>



        </main >

    );
}
