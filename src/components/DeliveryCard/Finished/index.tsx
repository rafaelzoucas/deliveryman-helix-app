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

    function showHideDeliveryCard() {
        if (isDeliveryCardOpened === true) {
            setIsDeliveryCardOpened(false)
            setDisplayDeliveryCardItems('')
        }else{
            setIsDeliveryCardOpened(true)
            setDisplayDeliveryCardItems('none')
        }
    }  

    return (
        <div className={styles.deliveryCardContainer}>
            <section id="header" className={styles.headerContainer} onClick={showHideDeliveryCard}>
                <div className={styles.dateTimeId}>
                    <span className={styles.dateTime}>Hoje - 14:53</span>

                    <span id="idDelivery" className={`${styles.titleDelivery} ${styles.idDelivery}`}>
                        <FontAwesomeIcon icon="hashtag" />
                        <strong>1973</strong>
                    </span>

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

            <section id="status" className={styles.statusContainer}>
                <div className={styles.labelStatusSuccess}>
                    <FontAwesomeIcon icon="check" />
                    <span>{'Realizada com sucesso'}</span>
                </div>
                {/* <div className={styles.labelStatusIssue}>
                    <FontAwesomeIcon icon="exclamation-triangle" />
                    <span>{'Realizada com imprevisto'}</span>
                </div> */}
                <div className={styles.labelTime}>
                    <FontAwesomeIcon icon="clock" />
                    <span>{'36 minutos'}</span>
                </div>
            </section>

            <section 
                className={styles.clientContainer} 
                style={{display: `${displayDeliveryCardItems}`}}
            >
                <div className={styles.profile}>
                    <div className={styles.info}>
                        <Image 
                            width={28} 
                            height={28} 
                            src="/img/icons/profile-user.svg"
                            alt="Profile"
                        />
                        <div className={styles.client}>
                            <span>
                                Estabelecimento
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.rateDeliveryman}>
                <span>Avaliação pendente</span>

                {/* ---ATIVAR QUANDO O CLIENTE AVALIAR O ENTREGADOR--- */}
                {/* <div className={styles.clientRate}>
                    <ul>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                    </ul>
                </div> */}
            </section>

            <section id="address" className={styles.addressContainer} style={{display: `${displayDeliveryCardItems}`}}>
                <h3 className={styles.titleDelivery}>
                    <FontAwesomeIcon icon="map-marker-alt" />
                    <strong>Endereço da entrega</strong>
                </h3>
                    <p>Rua Do Endereço Da Entrega, 345</p>

                <span>Referência:</span>

                <p>Próximo ao Bar Do Zé, Casa amarela de portão azul.</p>
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
        </div>
    )
}