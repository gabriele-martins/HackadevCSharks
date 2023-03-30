import React from 'react'

import styles from "./style.module.css"

export function Conteudo({titulo, subTitulo, descricao, children}) { 
    return(
        <div className={styles.container}>
            <div className={styles.containerText}>
                <h2>{titulo}</h2>
                <span className={styles.subTitulo}>{subTitulo}</span>
                <p>{descricao}</p>
            </div>
            <div className={styles.containerConteudoExterno}>{children}</div>
            
        </div>
    )
}