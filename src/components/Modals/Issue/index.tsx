import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import styles from './styles.module.scss'

export default function Issue({onClose = () => {}}) {
    return(
        <div className={styles.issueContainer}>
            <section id="header" className={styles.headerContainer}>
                <div className={styles.dateTimeId}>
                    <span className={styles.dateTime}>Hoje - 14:53</span>

                    <span id="idDelivery" className={`${styles.titleDelivery} ${styles.idDelivery}`}>
                        <FontAwesomeIcon icon="hashtag" />
                        <strong>1973</strong>
                    </span>
                </div>

                <button onClick={onClose}>
                    <FontAwesomeIcon icon="times"  className={styles.faIcon} />
                </button>
            </section>

            <section className={styles.whatsWrong}>
                <h3 className={styles.titleDelivery}>
                    <FontAwesomeIcon icon="exclamation-triangle" />
                    <strong>O que houve de errado?</strong>
                </h3>
                <div className={styles.solveOption}>
                    <FontAwesomeIcon icon="user-times" />
                    <p>Cliente não está atendendo</p>
                </div>
                <div className={styles.solveOptionOnPressed}>
                    <FontAwesomeIcon icon="hand-holding-usd" />
                    <p>Faltou troco ou máquina de cartão</p>
                </div>
                <div className={styles.solveOption}>
                    <FontAwesomeIcon icon="map-marker" />
                    <p>Endereço não encontrado</p>
                </div>
                <div className={styles.solveOptionInput}>
                    <div>
                        <FontAwesomeIcon icon="adjust" />
                        <p>Pedido incompleto</p>
                    </div>
                    <input type="text" placeholder="Digite o que está faltando" />
                </div>
                <div className={styles.solveOptionInput}>
                    <div>
                        <FontAwesomeIcon icon="question-circle" />
                        <p>Outro problema</p>
                    </div>
                    <input type="text" placeholder="Digite em poucas palavras o ocorrido" />
                </div>
            </section>

            <div className={styles.issueButtonsContainer}>
                <button onClick={onClose} className={styles.cancelIssueBtn}>Cancelar</button>
                <button className={styles.requestIssueBtn}>Solicitar imprevisto</button>
                {/* <button className={styles.disabledBtn}>Selecione uma solução para continuar</button> */}
            </div>
        </div>
    )
}