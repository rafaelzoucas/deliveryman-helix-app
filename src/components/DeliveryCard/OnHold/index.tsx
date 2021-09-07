import React, { useState } from 'react'
import styles from './styles.module.scss'

import Image from 'next/image'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function OnHold() {

    return (
        <>
            <div className={styles.deliveryCardContainer}>
                <section className={styles.clientContainer}>
                    <div className={styles.profile}>
                        <Image 
                            width={32} 
                            height={32} 
                            src="/img/icons/profile-user.svg"
                            alt="Profile"
                        />

                        <div className={styles.client}>
                            <span>
                                Estabelecimento
                            </span>
                        </div>
                    </div>
                </section>

                <section className={styles.addressContainer} >
                    <h3 className={styles.titleDelivery}>
                        <FontAwesomeIcon icon="map-marker" />
                        <strong>Endereço de coleta</strong>
                    </h3>
                        <p>Rua Do Endereço Da Coleta, 345</p>

                    <span>Referência:</span>

                    <p>Próximo ao Bar Do Zé, Casa amarela de portão azul.</p>
                </section>

                <section className={styles.descriptionContainer}>
                    <h3 className={styles.titleDelivery}>
                        <FontAwesomeIcon icon="align-left" />
                        <strong>Descrição</strong>
                    </h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ullam quas praesentium animi placeat beatae magni dolore a maiores.</p>

                </section>

                <div className={styles.line} />

                <section className={styles.addressContainer} >
                    <h3 className={styles.titleDelivery}>
                        <FontAwesomeIcon icon="map-marker-alt" />
                        <strong>Endereço da entrega</strong>
                    </h3>
                        <p>Rua Do Endereço Da Entrega, 345</p>

                    <span>Referência:</span>

                    <p>Próximo ao Bar Do Zé, Casa amarela de portão azul.</p>
                </section>

                <section>
                    <h3 className={styles.titleDelivery}>
                        <FontAwesomeIcon icon="coins" />
                        <strong>Forma de pagamento</strong>
                    </h3>
                    <p>Cartão</p>
                </section>
                
                <section>
                    <h3 className={styles.titleDelivery}>
                        <FontAwesomeIcon icon="dollar-sign" />
                        <strong>Valor a receber</strong>
                    </h3>
                    <p>R$ 5,00</p>
                </section>

                <div className={styles.btnsContainer}>
                    <button className={styles.refuseBtn}>
                        <FontAwesomeIcon icon="times" />
                        Recusar
                    </button>
                    <button className={styles.acceptBtn}>
                        <FontAwesomeIcon icon="check" />
                        59s Aceitar
                    </button>
                </div>
            </div>
        </>
    )
}