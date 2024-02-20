import Image from "next/image";
import Link from "next/link";

import logo from "./../public/images/Group 3.png";
import stlye from "./header.module.css";

export default function Header() {
  return (
    <header>
      <div className={stlye.navBarContainer}>
        <Image src={logo} width="300" height="40" alt="imagen logotipo" />
        <nav className={stlye.navButtonContainer}>
          <Link href="/" className={stlye.navButton}>
            Inicio
          </Link>

          <Link href="/nosotros" className={stlye.navButton}>
            Sobre Nosotros
          </Link>

          <Link href="/adopcion" className={stlye.navButton}>
            Adoptame
          </Link>

          <Link href="/contactanos" className={stlye.navButton}>
            Contactanos
          </Link>
        </nav>
        <div className={stlye.loginContainer}>
          <button className={stlye.registerButton}>Registrarse</button>
          <button className={stlye.loginButton}>Ingresar</button>
        </div>
      </div>
    </header>
  );
}
