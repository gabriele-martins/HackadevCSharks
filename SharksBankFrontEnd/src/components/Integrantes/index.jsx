import React from 'react';
import { Botao } from '../Botao';

import styles from './index.module.css';

export function Integrante({ nome, imagem, github, linkedin}) {
    
    return (
        <div className={styles.conteiner} >
            <div className={styles.imagemConteiner}>
                <img className={styles.imagem} src={imagem} alt={nome} />
                
                
            </div>
            <div className={styles.nome}>{nome}</div>
            <div className={styles.botoesConteiner}>
                <Botao className={styles.botao}

                    pagina={github}
                    desabilitado={false}
                    nome={"GitHub"}
                />
                <Botao className={styles.botao}
                    pagina={linkedin}
                    desabilitado={false}
                    nome={"LinkedIn"}
                />
            </div>
        </div>
    );
}


