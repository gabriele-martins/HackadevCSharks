import React from "react";

import styles from "./index.module.css";
import logo from "../../assets/logoReduzido.webp";

export function Header({ menu, botoes }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerImg}>
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={styles.headerMenu}>{menu}</div>
      <div className={styles.headerBotoes}>{botoes}</div>
    </div>
  );
}
