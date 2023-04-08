import React from 'react';

import styles from './index.module.css';

export function Conteudo({
	titulo,
	subTitulo,
	descricao,
	conteudoPainelEsquerdo,
	children, descricaoContinuacao, esconderTextosPainelEsquerdo
}) {
	return (
		<div className={styles.conteudo}>
			<div className={styles.containerText}>
				<h2 hidden = {esconderTextosPainelEsquerdo}>{titulo}</h2>
				<span hidden = {esconderTextosPainelEsquerdo} className={styles.subTitulo}>{subTitulo}</span>
				<p hidden = {esconderTextosPainelEsquerdo}>{descricao}</p>
        		<p hidden = {esconderTextosPainelEsquerdo}>{descricaoContinuacao}</p>
				{conteudoPainelEsquerdo}
			</div>
			<div className={styles.containerConteudoExterno}>{children}</div>
		</div>
	);
}
