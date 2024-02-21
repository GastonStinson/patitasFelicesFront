import style from "./patrocinadores.module.css"
import Image from "next/image";


export default function patrocinadores() {
    return (
        <main>
            <div>

                

                <div className={style.contenedor}>
                    <div className={style.descripcion}>
                    <p className={style.titulo}>NUESTROS PATROCINADORES</p>
                    </div>

                    <div className={style.elementos}>
                    <Image className={style.patrocinadorImg} src="/images/patrocinadores7.png" width={178.71} height={94.31} alt="logo-feva" />
                    <Image className={style.patrocinadorImg} src="/images/patrocinadores1.png" width={168.06} height={104.67} alt="logo-pedigree" />
                    <Image className={style.patrocinadorImg} src="/images/patrocinadores2.png" width={259.09} height={42.45} alt="logo-purina" />
                    <Image className={style.patrocinadorImg} src="/images/patrocinadores3.png" width={155.45} height={66.27} alt="logo-raza" />


                    </div>
                   
                    
                    <div className={style.elementos}>
                    <Image className={style.patrocinadorImg} src="/images/patrocinadores4.png" width={243.68} height={34.66} alt="logo eukanuba" />
                    <Image className={style.patrocinadorImg} src="/images/patrocinadores5.png" width={182.06} height={43.34} alt="logo-kongo" />
                    <Image className={style.patrocinadorImg} src="/images/patrocinadores6.png" width={200} height={100} alt="logo-royal-canin" />
                    </div>
                </div>

            </div>



        </main >

    );
}
