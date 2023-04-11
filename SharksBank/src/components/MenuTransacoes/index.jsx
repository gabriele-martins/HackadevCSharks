import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

export function MenuTransacoes() {
  return (
    <section className={styles.menu}>
      <nav className={styles.nav}>
        <Link to="#">Sobre</Link>
        <Link to="#">Ajuda</Link>
        <Link to="/saldo">Saldo</Link>
        <Link to="/extrato">Histórico</Link>
        <Link to="/transferir">Transferir</Link>
      </nav>
    </section>
  );
}
