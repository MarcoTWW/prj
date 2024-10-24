import "@/app/globals.css";
import "./header.css"

import logo from '../../../public/assets/images/logo 1.png'
import user from '../../../public/assets/images/icone-entrar.svg'

import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="main">
      <div className="header">
        <div className="icon">
          <Image src={logo} width={100} height={100} alt="foto-logo"></Image>
        </div>
        <div className="lista">
          <Link className="link" href="sobre">Sobre</Link>
          <Link className="link" href="sobre">Nutrólogo e Nutricionista</Link>
          <Link className="link" href="sobre">Questionário</Link>
          <Link className="link" href="sobre">Calculadora</Link>
          <Link className="link" href="sobre">Receitas</Link>
          <Link className="link" href="sobre">Plano Mensal</Link>
        </div>
        <div className="perfil">
          <Link href="login">
            <Image src={user} width={40} height={40} alt="icone-user"></Image>
            <h1 className="texto-login">Entrar</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
