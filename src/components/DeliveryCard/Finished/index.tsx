import React, { useState } from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Finished() {
    const [isDeliveryCardOpened, setIsDeliveryCardOpened] = useState(true)
    const [displayDeliveryCardItems, setDisplayDeliveryCardItems] = useState('none')
    const [isPaymentDone, setIsPaymentDone] = useState(false)


    function showHideDeliveryCard() {
        if (isDeliveryCardOpened === true) {
            setIsDeliveryCardOpened(false)
            setDisplayDeliveryCardItems('')
        }else{
            setIsDeliveryCardOpened(true)
            setDisplayDeliveryCardItems('none')
        }
    }

    const switchToggle = () => {
        if(isPaymentDone) {
            setIsPaymentDone(false)
        } else {
            setIsPaymentDone(true)
        }
    }

    return (
        <div className={styles.deliveryCardContainer}>
            <section className={styles.headerContainer} onClick={showHideDeliveryCard}>
                        
                        <div>

                            <div className={styles.statusContainer}>
                                <div className={`${styles.label} ${styles.labelTime}`}>
                                    <FontAwesomeIcon icon="clock" />
                                    <span>{'Hoje - 14:23'}</span>
                                </div>

                                <div className={`${styles.label} ${styles.labelSuccess}`}>
                                    <FontAwesomeIcon icon="check" />
                                    <span>{'Concluída'}</span>
                                </div>

                                <div className={`${styles.label} ${styles.labelTime}`}>
                                    <FontAwesomeIcon icon="hourglass-end"/>

                                    <span>{'00:55'}</span>
                                </div>

                                <div className={`${styles.label} ${isPaymentDone ? styles.labelSuccess : styles.labelIssue}`}>
                                    <FontAwesomeIcon icon="dollar-sign" />

                                    <span>{isPaymentDone ? 'Recebido' : 'A receber'}</span>
                                </div>
                            </div>
                        </div>
                        <FontAwesomeIcon 
                            icon="chevron-down" 
                            className={`${isDeliveryCardOpened ? (
                                `${styles.showDeliveryCard}`
                            ) : (
                                `${styles.hideDeliveryCard}`
                            )}`}
                        />
                    </section>

                    <div className={styles.profile}>
                            <Image 
                                width={24} 
                                height={24} 
                                src="/img/icons/profile-user.svg"
                                alt="Profile"
                            />
                            <span>Espetinho Santo Antonio</span>
                        </div>
            
            <span id="idDelivery" className={`${styles.titleDelivery} ${styles.idDelivery}`} style={{display: `${displayDeliveryCardItems}`}}>
                <FontAwesomeIcon icon="hashtag" />
                <strong>1973</strong>
            </span>

            <section className={styles.rateDeliveryman}>
                {/* <span>Avaliação pendente</span> */}

                {/* ---ATIVAR QUANDO O CLIENTE AVALIAR O ENTREGADOR--- */}
                <div className={styles.clientRate}>
                    <ul>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                    </ul>
                </div>
            </section>

            <section id="address" className={styles.addressContainer} >
                <h3 className={styles.titleDelivery} style={{display: `${displayDeliveryCardItems}`}}>
                    <FontAwesomeIcon icon="map-marker-alt" />
                    <strong>Endereço da entrega</strong>
                </h3>
                    <p>Rua Do Endereço Da Entrega, 345</p>

                <span style={{display: `${displayDeliveryCardItems}`}}>Referência:</span>

                <p style={{display: `${displayDeliveryCardItems}`}}>Próximo ao Bar Do Zé, Casa amarela de portão azul.</p>
            </section>

            <section id="description" className={styles.descriptionContainer} style={{display: `${displayDeliveryCardItems}`}}>
                <h3 className={styles.titleDelivery}>
                    <FontAwesomeIcon icon="align-left" />
                    <strong>Descrição</strong>
                </h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ullam quas praesentium animi placeat beatae magni dolore a maiores.</p>

            </section>

            <section id="payment" style={{display: `${displayDeliveryCardItems}`}}>
                <h3 className={styles.titleDelivery}>
                    <FontAwesomeIcon icon="exclamation-triangle" />
                    <strong>Imprevisto</strong>
                </h3>
                <p>Faltou um item do pedido.</p>
            </section>

            <section id="payment" style={{display: `${displayDeliveryCardItems}`}}>
                <h3 className={styles.titleDelivery}>
                    <FontAwesomeIcon icon="coins" />
                    <strong>Forma de pagamento</strong>
                </h3>
                <p>Cartão</p>
            </section>

            <div className={styles.paymentContainer}>
                <p>
                    {isPaymentDone ? "Pagamento já foi efetuado." : "Pagamento está pendente"}
                </p>
                <div className={`${isPaymentDone ? (
                    `${styles.toggleOn}`
                ) : (
                    `${styles.toggleOff}`
                )}`}               
                onClick={switchToggle}
                >
                <div className={styles.toggleCircle} />
                </div>
            </div>
        </div>
    )
}