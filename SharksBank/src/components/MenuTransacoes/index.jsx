import React from "react";

import styles from "./index.module.css";

export function MenuTransacoes() {
  return (
    <section className={styles.menu}>
      <nav className={styles.nav}>
        <a href="#">Sobre</a>
        <a href="#">Ajuda</a>
        <a href="#">Saldo</a>
        <a href="#">Histórico</a>
        <a href="#">Transferir</a>
      </nav>
    </section>
  );
}