import React, { useState } from 'react';
import { Conteudo } from '../../components/Conteudo';

import { Header } from '../../components/Header';
import { MenuTransacoes } from '../../components/MenuTransacoes';
import { Botao } from '../../components/Botao';

import { Footer } from '../../components/Footer';

import styles from './style.module.css';

export function Saldo () {

    return (
        <>                                  
        <Header
        menu={<MenuTransacoes></MenuTransacoes>}
            botoes={
            <div className={styles.botoesHeader}>
                <Botao desabilitado={false} nome={"Sair"} />
            </div>
        }
        />
        
        <div className={styles.conteudoSaldo}>
                <div className={styles.colunaDireita}>
                   <div className={styles.colunaDireitaTitulo}>  
                        <h1>Olá, Tubarão</h1>  
                    </div>
                    <div className={styles.colunaDireitaTexto}>
                        <div className={styles.subtitulos}>
                            <p>Agência</p>
                        </div>
                        <div className={styles.conteudoSubtitulos}>
                            <p>3002</p>
                        </div>
                        <div className={styles.subtitulos}>
                            <p>Conta</p>
                        </div>
                        <div className={styles.conteudoSubtitulos}>
                            <p>01493238-7</p>
                        </div>
                        <div className={styles.subtitulos}>
                            <p>Última Transação</p>
                        </div>
                        <div className={styles.conteudoSubtitulos}>
                            <p>04/04 13:00 R$ 50,00</p>
                        </div>
                    </div>
                </div>
                <div className={styles.colunaEsquerda}>                  
                    <div className={styles.colunaEsquerdaTitulos}>  
                        <h1>Seu saldo é</h1>
                    </div>
                    <div className={styles.colunaEsquerdaValores}>  
                        <h1>R$ 1.000,00</h1>
                    </div>
                    <div className={styles.colunaEsquerdaTitulos}>
                        <p>Saldo Disponível</p>
                    </div>
                    <div className={styles.colunaEsquerdaValores}>
                        <p>R$ 2.000,00</p>
                    </div> 
                    <div className={styles.colunaEsquerdaTitulos}>
                        <p>Juros Aplicados</p>
                    </div>
                    <div className={styles.colunaEsquerdaValores}>
                        <p>8% a.m.</p>
                    </div>                    
                </div>                      
        </div>     

        <Footer />
        </>
    )
}



//01493238-7