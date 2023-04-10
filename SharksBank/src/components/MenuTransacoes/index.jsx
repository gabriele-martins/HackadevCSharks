import React, { useState } from "react";

import styles from "./index.module.css";

export function MenuTransacoes() {
  return (
    <section className={styles.menu}>
      <nav className={styles.nav}>
        <a href="#">Sobre</a>
        <a href="#">Ajuda</a>
        <a href="/saldo">Saldo</a>
        <a href="/extrato">Histórico</a>
        <a href="/transferir">Transferir</a>
      </nav>
    </section>
  );
}
