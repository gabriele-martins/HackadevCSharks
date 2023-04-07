import React from "react";

import styles from "./HeaderCadastro.module.css";
import logo from "../../assets/logoReduzido.webp";

export function HeaderCadastro({ botoes }) {
    return (
        <div className={styles.header}>
            <div className={styles.headerImg}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.headerBotoes}>{botoes}</div>
        </div>
    );
}
