import React from 'react'
import {CreditCard, CurrencyCircleDollar, Globe, Gift } from "phosphor-react"

import cartaoHero from "../../assets/cartao-hero-40.webp"

import styles from './style.module.css';

export function MainSection() {
    return(
        <div className={styles.mainSectionBody}>
               <div className={styles.rightSide}>
                    <div className={styles.rightSideTitle}>  
                        <h1>Crie sua conta</h1>
                        <h1>grátis</h1>  
                        {/* criar componente passadno texto como props? ^ */}
                    </div>
                    <div className={styles.rightSideMainText}>
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
                </div>
                <div className={styles.leftSide}>                  
                    <img src={cartaoHero} alt="teste" />
                </div>                     
        </div>
        
    )
}


