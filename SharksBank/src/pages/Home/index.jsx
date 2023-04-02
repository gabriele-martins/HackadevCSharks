import React, { useEffect } from 'react'
import {CreditCard, CurrencyCircleDollar, Globe, Gift} from "phosphor-react";
import cartaoHero from "../../assets/cartaoReduzido.webp";

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Botao } from '../../components/Botao';

import { Footer } from '../../components/Footer';

import styles from './style.module.css';

export function Home(){

    useEffect(() => {
        document.title = "Sharks Bank"
      })

    return(
        <>                                   
        <Header
        menu={<Menu></Menu>}
            botoes={
            <div className={styles.botoesHeader}>
                <Botao desabilitado={false} nome={"Abrir sua conta"} />
                <Botao desabilitado={false} nome={"Acessar"} />
            </div>
        }
      />
        <div className={styles.conteudoHome}>
                <div className={styles.colunaDireita}>
                   <div className={styles.colunaDireitaTitulo}>  
                        <h1>Crie sua conta</h1>
                        <h1 className={styles.textoAzul}>grátis</h1>  
                    </div>
                    <div className={styles.colunaDireitaTexto}>
                        <div className={styles.linhaBeneficios}>
                            <CreditCard size={32} color="#00efc5" />
                            <p>Compras no cartão débito sem IOF.</p>
                        </div>
                        <div className={styles.linhaBeneficios}>
                            <CurrencyCircleDollar  size={32} color="#00efc5" />
                            <p>Câmbio com cotação comercial, melhor do que a turismo.</p>
                        </div>
                        <div className={styles.linhaBeneficios}>
                            <Globe  size={32} color="#00efc5" />
                            <p>Transferências para outras contas ao redor do mundo</p>
                        </div>
                        <div className={styles.linhaBeneficios}>
                            <Gift  size={32} color="#00efc5" />
                            <p>Gift Card das melhores marcas internacionais</p>
                        </div>
                    </div>
                    <div className={styles.botaoTeste}><Botao desabilitado={false} nome={"Abra sua conta"} /></div>
                </div>
                <div className={styles.colunaEsquerda}>                  
                    <img src={cartaoHero} alt="Imagem cartão SharksBank" />
                </div>                      
        </div>     
      <Footer />
    </>
    )
}