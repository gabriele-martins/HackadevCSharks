import React, { useEffect } from 'react'




import { Botao } from '../../components/Botao';

import { Footer } from '../../components/Footer';

import styles from './style.module.css';
import HeaderSenha from '../../components/HeaderSenha';

const Senha = () => {

    return (
        <>
            <HeaderSenha
                botao={
                    <div >
                        <Botao desabilitado={false} nome={"Acessar"} />
                    </div>
                }
            />
            <div className={styles.conteudoSenha}>
                <div className={styles.colunaDireita}>
                    <div className={styles.colunaDireitaTitulo}>
                        <h1 className={styles.textoAzul}>Recupere sua senha</h1>
                    </div>
                    <div className={styles.colunaDireitaTexto}>
                        <div >
                            <p>Digite seu CPF para receber um e-mail de recuperação de senha.</p>
                        </div>
                    </div>

                </div>
                <div className={styles.colunaEsquerda}>
                    <div>
                        <input type="cpf" name="cpf" placeholder='Insira seu CPF' />
                        <div className={styles.botaoDeEnviar} >
                            <Botao desabilitado={false} nome={"Enviar"} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Senha;