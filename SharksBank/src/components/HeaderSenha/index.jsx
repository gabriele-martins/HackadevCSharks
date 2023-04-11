import React from "react";

import styles from "./index.module.css";
import logo from "../../assets/logoReduzido.webp";

const HeaderSenha = ({ botao }) => {
  return (
    <div className={styles.header}>
      <div >
        <img src={logo} alt="" />
      </div>
      <div className={styles.headerBotao}>
      <div >
        {botao}
      </div>
      </div>
    </div>
  )

}

export default HeaderSenha

