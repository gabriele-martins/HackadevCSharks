import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

export function MenuTransacoes({ conteudo }) {
  return (
    <section className={styles.menu}>
      <nav className={styles.nav}>
        <Link to="#">Sobre</Link>
        <Link to="#">Ajuda</Link>
        <Link to="/saldo" state={{ conteudo: conteudo }}>
          Saldo
        </Link>
        <Link to="/extrato" state={{ conteudo: conteudo }}>
          Histórico
        </Link>
        <Link to="/transferir" state={{ conteudo: conteudo }}>
          Transferir
        </Link>
      </nav>
    </section>
  );
}
