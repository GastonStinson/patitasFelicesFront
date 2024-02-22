import style from "./cajaimagenes.module.css"
import Image from "next/image";


export default function cajaimagenes() {
    return (
        <main>
            <div>

                

                <div className={style.contenedor}>
                    <div className={style.descripcion}>
                    <p className={style.titulo}>Nuestro comportamiento</p>
                    </div>

                    <div className={style.elementos}>
                    <Image className={style.imagen} src="/images/imagediv3.png" width={573} height={382} alt="logo-feva" />
                    <Image className={style.imagen} src="/images/imagediv2.png" width={573} height={382} alt="logo-pedigree" />

                    </div>
                   
                    
                    <div className={style.elementos}>
                    <Image className={style.imagen} src="/images/imagediv3.png" width={573} height={382} alt="logo eukanuba" />
                    <Image className={style.imagen} src="/images/imagediv4.png" width={573} height={382} alt="logo-kongo" />
                    
                    </div>
                </div>

            </div>



        </main >

    );
}
