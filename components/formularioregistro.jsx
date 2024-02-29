
import style from "./formularioregistro.module.css";
import Image from "next/image";


export default function formularioregistro() {
    return (
        <main>

            <div className={style.costadoIzquierdo}>
                <p className={style.ingresar}>REGISTRARSE</p>
                <br></br>
                <p className={style.mensaje}>Crea tu cuenta y encuentra tu compañero ideal</p>


                <br></br>
                <div className={style.primercolumna}>
                    <p className={style.parrafo}>Nombre</p>
                    <div className={style.input}>
                        <label className={style.label} >Ingrese aquí su nombre</label>
                        <input
                            type="text"
                            id="nombre"
                        />
                    </div>

                    <br></br>
                    <p className={style.parrafo}>Email</p>
                    <div className={style.input}>
                        <label className={style.label} >   @Ingrese aquí su email</label>
                        <input
                            type="text"
                            id="emailInput"
                        />
                    </div>

                    <br></br>
                    <p className={style.parrafo}>Contraseña</p>

                    <div className={style.input}>
                        <label className={style.label}>Ingrese su contraseña</label>
                        <input
                            type="password"
                            id="passwordInput" />
                    </div>
                    <br></br>

                    <p className={style.parrafo}>Ciudad</p>
                    <div className={style.input}>
                        <label className={style.label} > Ingrese su ciudad</label>
                        <input
                            type="text"
                            id="ciudadInput"
                        />
                    </div>

                    <br></br>



                    <p className={style.parrafo}>Codigo postal</p>
                    <div className={style.input}>
                        <label className={style.label} > Ingrese su codigo postal</label>
                        <input
                            type="number"
                            id="codigopostalInput"
                        />
                    </div>
                </div>

                <br></br>

                <div className={style.segundacolumna}>

                <p className={style.parrafo}>Apellido</p>
                <div className={style.input}>
                    <label className={style.label} > Ingrese su apellido</label>
                    <input
                        type="text"
                        id="apellidoInput"
                    />
                </div>
                <br></br>

                <p className={style.parrafo}>Email</p>
                <div className={style.input}>
                    <label className={style.label} > @Confirme su email</label>
                    <input
                        type="text"
                        id="emailInput1"
                    />
                </div>
                <br></br>
                <p className={style.parrafo}>Contraseña</p>

                <div className={style.input}>
                    <label className={style.label}>Confirme su contraseña</label>
                    <input
                        type="password"
                        id="passwordInpu1" />
                </div>

                <br></br>
                <p className={style.parrafo}>Provincia</p>

                <div className={style.input}>
                    <label className={style.label}>Ingrese su provincia</label>
                    <input
                        type="text"
                        id="provincia" />
                </div>
                </div>
                <br></br>
                <br></br>





                <div className={style.recordame}>
                    <button className={style.boton}></button>
                    <p>Acepto los términos y condiciones</p>


                </div>
                <button className={style.botonrojo}>Registarse</button>
                <br></br>
                <br></br>
                <div className={style.contenedorlinea}>
                    <span className={style.circulo}></span>
                </div>
                <br></br>

                <div>
                    <label className={style.ingresarred}>Ingresar con Google</label></div>
                <br></br>
                <div>
                    <label className={style.ingresarred}>Ingresar con Facebook</label></div>
                <br></br>

            </div>

            <div>
                <Image className={style.logo} src="/images/imagenregistro1.png" width={873} height={570} alt="logo-perro" />
                <Image className={style.logoarriba} src="/images/imagenregistro2.png" width={873} height={570} alt="logo-perro" />

            </div>



        </main >

    );
}
