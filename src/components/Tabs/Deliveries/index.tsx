import React from 'react'
import styles from './styles.module.scss'

import OnHold from '../../DeliveryCard/OnHold'
import InProgress from '../../DeliveryCard/InProgress'
import Finished from '../../DeliveryCard/Finished'
import { useState } from 'react'
import Canceled from '../../DeliveryCard/Canceled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Home() {
  const [currentTab, setCurretTab] = useState('inProgress')

  const [displayOnHoldDeliveries, setDisplayOnHoldDeliveries] = useState('none')
  const [displayInProgressDeliveries, setDisplayInProgressDeliveries] = useState('')
  const [displayFinishedDeliveries, setDisplayFinishedDeliveries] = useState('none')

  function showOnHold() {
    setDisplayOnHoldDeliveries('')
    setDisplayInProgressDeliveries('none')
    setDisplayFinishedDeliveries('none')
  }
  function showInProgress() {
    setDisplayOnHoldDeliveries('none')
    setDisplayInProgressDeliveries('')
    setDisplayFinishedDeliveries('none')
  }
  function showFinished() {
    setDisplayOnHoldDeliveries('none')
    setDisplayInProgressDeliveries('none')
    setDisplayFinishedDeliveries('')
  }

  return (
    <div className={styles.deliveriesPage}>
      <main>
        <div className={styles.groupBtn}>
          <button onClick={showOnHold}>
            <div className={styles.badgeNewDelivery} />
            Em espera
          </button>

          <button onClick={showInProgress}>
            Em andamento
          </button>
          
          <button onClick={showFinished}>
            Finalizadas
          </button>
        </div>
        
        <div className={styles.deliveriesContainer}>
          <section style={{display: `${displayOnHoldDeliveries}`}}>
            <OnHold />
            <OnHold />

            {/* ------- ativar quando não houver entregas -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="motorcycle" />
              <p>
                Não há entregas em espera.
              </p> 
            </div> */}

            {/* ------- ativar quando estiver offline -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="frown" />
              <p>
                Você está indisponível, fique disponível para receber novos chamados.
              </p>
            </div> */}

            {/* ------- ativar quando estiver com cadastro em análise -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="clock" />
              <p>
                Estamos analisando o seu cadastro, em breve entraremos em contato para ativá-lo.
              </p>
            </div> */}

            {/* -------- ativar quando estiver bloqueado ---------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="ban" />
              <p>
                A sua conta está bloqueada, entre em contato conosco. 
              </p> 
              <Link href="https://api.whatsapp.com/send?phone=5518996465807&fbclid=IwAR1aNtRPkUTX9Xl89Wv8dmkpSdqWpkiG7FgJeXu02rnCOWlW6wCVXWbteUo">
                  <button className={styles.issueBtn}>
                      <FontAwesomeIcon icon="comment" />

                      WhatsApp
                  </button>
              </Link>
            </div> */}
          </section>

          <section style={{display: `${displayInProgressDeliveries}`}}>
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />

            {/* ------- ativar quando não houver entregas -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="motorcycle" />
              <p>
                Não há entregas em andamento.
              </p> 
            </div> */}

            {/* ------- ativar quando estiver offline -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="frown" />
              <p>
                Você está indisponível, fique disponível para receber novos chamados.
              </p>
            </div> */}

            {/* ------- ativar quando estiver com cadastro em análise -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="clock" />
              <p>
                Estamos analisando o seu cadastro, em breve entraremos em contato para ativá-lo.
              </p>
            </div> */}

            {/* -------- ativar quando saldo estiver insuficiente ---------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="ban" />
              <p>
                A sua conta está bloqueada, entre em contato conosco. 
              </p> 
              <Link href="https://api.whatsapp.com/send?phone=5518996465807&fbclid=IwAR1aNtRPkUTX9Xl89Wv8dmkpSdqWpkiG7FgJeXu02rnCOWlW6wCVXWbteUo">
                  <button className={styles.issueBtn}>
                      <FontAwesomeIcon icon="comment" />

                      WhatsApp
                  </button>
              </Link>
            </div> */}
          </section>

          <h2>Pagamentos pendentes</h2>
          <section style={{display: `${displayFinishedDeliveries}`}}>
            <div className={styles.paymentCard}>
              <div>
                <p>Estabelecimento</p>
                <span>10 entregas em aberto</span>
              </div>

              <div className={styles.value}>
                <div>
                  <span>Total a receber:</span>
                  <p>R$ 50,50</p>
                </div>
              </div>
            </div>

            <h2>Entregas finalizadas</h2>
            <Finished />
            <Finished />
            <Canceled />

            {/* ------- ativar quando não houver entregas -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="motorcycle" />
              <p>
                Não há entregas finalizadas hoje.
              </p> 
            </div> */}

            {/* ------- ativar quando estiver com cadastro em análise -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="clock" />
              <p>
                Estamos analisando o seu cadastro, em breve entraremos em contato para ativá-lo.
              </p>
            </div> */}

            {/* -------- ativar quando saldo estiver insuficiente ---------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="ban" />
              <p>
                A sua conta está bloqueada, entre em contato conosco. 
              </p> 
              <Link href="https://api.whatsapp.com/send?phone=5518996465807&fbclid=IwAR1aNtRPkUTX9Xl89Wv8dmkpSdqWpkiG7FgJeXu02rnCOWlW6wCVXWbteUo">
                  <button className={styles.issueBtn}>
                      <FontAwesomeIcon icon="comment" />

                      WhatsApp
                  </button>
              </Link>
            </div> */}
          </section>
        </div>
      </main>
    </div>
  )
}
