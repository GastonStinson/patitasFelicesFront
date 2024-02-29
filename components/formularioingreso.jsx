
import style from "./formularioingreso.module.css"


export default function formularioingreso() {
    return (
        <main>
            <div className={style.costadoIzquierdo}>
                <p className={style.ingresar}>INGRESAR</p>
                <br></br>
                <p className={style.mensaje}>¡Bienvenido! Inicia sesión para  acceder a tu cuenta</p>
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
                    <br></br>
                    <div className={style.recordame}>
                        <button className={style.boton}></button>
                        <p>Recordarme</p>
                        <p>¿Olvidaste la contraseña?</p>

                    </div>
                    <button className={style.botonrojo}>Ingresar</button>
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
                    <div className={style.registrocuenta}>
                    <p className={style.cuenta}>¿No tienes una cuenta?<span className={style.rojo}>Regístrate</span></p></div>



                </div>






            </div>



        </main >

    );
}
