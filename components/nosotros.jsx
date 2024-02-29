import style from "./nosotros.module.css"
import Image from "next/image";


export default function nosotros() {
    return (
        <main>
            <div>



                <div className={style.contenedor}>




                    <div className={style.acerca}>
                        <h2 className={style.header}>Acerca nuestro</h2>

                        <p className={style.texto}>
                            Patitas Felices fue creada oficialmente en febrero del año 2024 como plataforma para la adopción y/o tránsito de mascotas sin hogar.
                            Surge de la problemática de los animales abandonados, maltratados y con la necesidad de cambiar la vida de todos aquellos perros y gatos que llegan a nosotros con la esperanza de reescribir su historia.
                            De esa forma, se les da una segunda oportunidad a cientos de animales que han sido víctimas de maltrato, abandono y abuso.
                            La plataforma está disponible en todo el territorio de la República Argentina, desde Jujuy hasta Tierra del Fuego.
                            Nuestro objetivo final es poder encontrar un hogar para cada uno de nuestros rescatados. Por eso en Patitas Felices ubicamos familias y personas responsables interesadas en adoptar. Adicional a esta labor nos encargamos de hacer el seguimiento a cada uno de los animales entregados.

                        </p>

                    </div>
                </div>

            </div>



        </main >

    );
}
