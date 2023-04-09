import React from 'react';
import styles from './index.module.css';

export function Comprovante({
	dataHora,
	valorEnviado,
	cpfOrigem,
	agenciaOrigem,
	contaOrigem,
	cpfDestino,
	agenciaDestino,
	contaDestino,
	mensagem,
	erro,
}) {
	return (
		<>
			<div className={styles.transferenciaRealizada} hidden={erro}>
				<div className={styles.transferenciaRealizadaTitulo}>
					<h1>Transferência Realizada</h1>
					<p>{dataHora}</p>
				</div>
				<div className={styles.transferenciaInfo}>
					<h2>Valor</h2>
					<p className={styles.transferenciaInfoValue}>
						R$ {valorEnviado}
					</p>
				</div>
				<h3>Origem</h3>
				<div className={styles.transferenciaInfo}>
					<h4>CPF</h4>
					<p>{cpfOrigem}</p>
					<h4>Agência</h4>
					<p>{agenciaOrigem}</p>
					<h4>Conta</h4>
					<p>{contaOrigem}</p>
				</div>
				<h3>Destino</h3>
				<div className={styles.transferenciaInfo}>
					<h4>CPF</h4>
					<p>{cpfDestino || '000.000.000-00'}</p>
					<h4>Agência </h4>
					<p>{agenciaDestino || '0000'}</p>
					<h4>Conta</h4>
					<p>{contaDestino || '000000000-0'}</p>
				</div>
				<div className={styles.transferenciaMensagem}>
					<h4>Mensagem</h4>
					<textarea value={mensagem} disabled></textarea>
				</div>
			</div>
			<div className={styles.transferenciaNaoRealizada} hidden={!erro}>
				<h1>Transferência Não Realizada</h1>
				<h2>Favor verificar os dados fornecidos!</h2>
			</div>
		</>
	);
}
