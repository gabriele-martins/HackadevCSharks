import React from 'react';
import styles from './index.module.css';

import githubIcon from "../../assets/github-svgrepo-com-ciano.svg";
import linkedinIcon from "../../assets/linkedin-svgrepo-com-inverso-ciano.svg";

export function Integrante({ nome, imagem, github, linkedin}) {
    
    return (
        <div className={styles.conteiner} >
            <div className={styles.imagemConteiner}>
                <img className={styles.imagem} src={imagem} alt={nome} />
             </div>
            <div className={styles.nome}>{nome}</div>
            <div className={styles.botoesConteiner}>
                <a href={github} target='_blank'>
                    <img className={styles.icone} src={githubIcon} alt={`Icone Github ${nome}`} />
                </a>
                <a href={linkedin} target='_blank'>
                    <img  className={styles.icone} src={linkedinIcon} alt={`Icone LinkedIn ${nome}`} />
                </a>
            </div>
        </div>
    );
}


