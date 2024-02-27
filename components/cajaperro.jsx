import style from "./cajaperro.module.css"
import Image from "next/image";


export default function cajaperro() {
    return (
        <main>
            <div>
                <div className={style.contenedor}>
                <h2 className={style.dar}>Dar<span className={style.rojo}> amor</span>,para recibir<span className={style.rojo}> amor</span></h2>
                <p className={style.texto}>La vida es como el eco; Lo que das, lo recibes. Lo que siembras, cosechas. Lo que ves en otros, es tu propio reflejo. La vida es como el eco.... Siempre te regresa lo que das.Rescatando, defendiendo, cuidando, esterilizando, educando.. Todos los días trabajando para construir un lugar mejor! Agradecemos tu interés, apoyo y ayuda al Refugio.¡Haces que nuestra motivación, trabajo y equipo siga creciendo día a día! Derrotemos al abandono y promovamos el bienestar y felicidad</p>
                
                <div className={style.contenedorboton}>

                
                <button className={style.contactanosButton}>Hace tu donación</button>
                </div>
                </div>

                <Image className={style.patrocinadorImg} src="/images/imagenperro1.png" width={735.96} height={354} alt="logo-ayudacan" />
                



            </div>



        </main >

    );
}
