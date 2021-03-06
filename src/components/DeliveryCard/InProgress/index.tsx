import React, { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import Image from 'next/image'

import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Issue from '../../Modals/Issue'
import Link from 'next/link'

library.add(fas)

export default function InProgress() {
    const [isDeliveryCardOpened, setIsDeliveryCardOpened] = useState(true)
    const [displayDeliveryCardItems, setDisplayDeliveryCardItems] = useState('none')
    const [isModalIssueVisible, setIsMotalIssueVisible] = useState(false)
    const [isIssueRequestVisible, setIsIssueRequestVisible] = useState(false)

    function showHideDeliveryCard() {
        if (isDeliveryCardOpened === true) {
            setIsDeliveryCardOpened(false)
            setDisplayDeliveryCardItems('')
        }else{
            setIsDeliveryCardOpened(true)
            setDisplayDeliveryCardItems('none')
        }
    }

    const openModalIssue = () => {
        setIsMotalIssueVisible(true)
        disableBodyScroll(document)
    }    

    const openIssueRequest = () => {
        setIsIssueRequestVisible(true)
    }

    const onClose = () => {
        setIsIssueRequestVisible(false)
    }

    return (
        <div className={styles.deliveryCardContainer}>
            {!isIssueRequestVisible ? (
                <>
                    <section className={styles.headerContainer} onClick={showHideDeliveryCard}>
                        <div className={styles.profile}>
                            <Image 
                                width={24} 
                                height={24} 
                                src="/img/icons/profile-user.svg"
                                alt="Profile"
                            />
                            <span>Espetinho Santo Antonio</span>
                        </div>
                        <div>

                            <div className={styles.statusContainer}>
                                {/* <div className={`${styles.label} ${styles.labelTime}`}>
                                    <FontAwesomeIcon icon="clock" />
                                    <span>{'14:23'}</span>
                                </div> */}

                                {/* <div className={`${styles.label} ${styles.labelSuccess}`}>
                                    <FontAwesomeIcon icon="spinner" className={styles.loading} />
                                    <span>{'Procurando entregador'}</span>
                                </div> */}

                                <div className={`${styles.label} ${styles.labelTime}`}>
                                    <FontAwesomeIcon icon="hourglass-half"/>

                                    <span>{'00:55'}</span>
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
                        </div>
        
                    </section>
                    
                    <div className={`${styles.titleDelivery} ${styles.idDelivery}`}>
                        <FontAwesomeIcon icon="hashtag" />
                        <strong>1973</strong>
                    </div>
        
                    <section className={styles.addressContainer}>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="map-marker" />
                            <strong>Endere??o de coleta</strong>
                        </h3>
                        
                        <Link href="https://www.google.com/maps/place/Supermercados+Avenida+Max/@-22.659259,-50.4242346,14.77z/data=!4m13!1m7!3m6!1s0x94953996f3aa8219:0x2e7a343fe4161010!2sR.+Santa+Cruz,+801+-+Centro,+Assis+-+SP,+19800-320!3b1!8m2!3d-22.6683807!4d-50.4132049!3m4!1s0x94953bd855437567:0x2807c2d59b6a69bb!8m2!3d-22.6487649!4d-50.4336399">
                            <div>
                                <p>Rua Do Endere??o De Coleta, 345 </p>
                                    <FontAwesomeIcon icon="location-arrow" className={styles.mapsLink} />
                            </div>
                        </Link>
        
                        <span style={{display: `${displayDeliveryCardItems}`}}>Refer??ncia:</span>
        
                        <p style={{display: `${displayDeliveryCardItems}`}}>Pr??ximo ao Bar Do Z??, Casa amarela de port??o azul.</p>
                    </section>
        
                    <section className={styles.descriptionContainer} style={{display: `${displayDeliveryCardItems}`}}>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="align-left" />
                            <strong>Descri????o</strong>
                        </h3>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ullam quas praesentium animi placeat beatae magni dolore a maiores.</p>
                    </section>

                    <section className={styles.addressContainer}>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="map-marker-alt" />
                            <strong>Endere??o da entrega</strong>
                        </h3>

                        <Link href="https://www.google.com/maps/place/Cafeteria+Madalena/@-22.6666462,-50.4171918,16.06z/data=!4m13!1m7!3m6!1s0x94953996f3aa8219:0x2e7a343fe4161010!2sR.+Santa+Cruz,+801+-+Centro,+Assis+-+SP,+19800-320!3b1!8m2!3d-22.6683807!4d-50.4132049!3m4!1s0x0:0x5c0b6e5f19cb2b45!8m2!3d-22.6622735!4d-50.4139667">
                            <div>
                                <p>Rua Do Endere??o Da Entrega, 345 </p>
                                <FontAwesomeIcon icon="location-arrow" className={styles.mapsLink} />
                            </div>
                        </Link>
        
                        <span style={{display: `${displayDeliveryCardItems}`}}>Refer??ncia:</span>
        
                        <p style={{display: `${displayDeliveryCardItems}`}}>Pr??ximo ao Bar Do Z??, Casa amarela de port??o azul.</p>
                    </section>

                    <section id="payment" style={{display: `${displayDeliveryCardItems}`}}>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="exclamation-triangle" />
                            <strong>Imprevisto</strong>
                        </h3>
                        <p>Faltou um item do pedido.</p>
                    </section>

                    <section>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="stopwatch" />
                            <strong>Tempo de preparo</strong>
                        </h3>
                        <p>15 min</p>
                    </section>

                    <section id="payment" style={{display: `${displayDeliveryCardItems}`}}>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="dollar-sign" />
                            <strong>Valor pela corrida</strong>
                        </h3>
                        <p>R$ 9,75</p>
                    </section>

                    <div className={styles.btnsContainer}>
                        {/* <Link href="https://api.whatsapp.com/send?phone=5518996465807&fbclid=IwAR1aNtRPkUTX9Xl89Wv8dmkpSdqWpkiG7FgJeXu02rnCOWlW6wCVXWbteUo">
                            <button className={styles.issueBtn}>
                                <FontAwesomeIcon icon="comment" />

                                WhatsApp
                            </button>
                        </Link> */}
                        
                        <button onClick={openModalIssue} className={styles.issueBtn}>
                            <FontAwesomeIcon icon="thumbs-down" />
                            Desistir
                        </button>

                        <button className={styles.nextStepBtn}>
                            {'Next step button'}
                            <FontAwesomeIcon icon="angle-double-right" />

                            {/* 
                                -Cheguei para coletar
                                -Confirmei forma de pagamento
                                -Entreguei
                            */}
                        </button>
    
                        {/*substituir pelo nextStepBtn */}
                        {/* <button onClick={openIssueRequest} className={styles.issueRequestBtn}> 
                            <FontAwesomeIcon icon="exclamation-circle" />
                            <span>Houve 1 imprevisto</span>
                        </button>*/}
                    </div>
        
                    {isModalIssueVisible ? (
                    <Issue 
                        onClose={() => {
                            setIsMotalIssueVisible(false)
                            enableBodyScroll(document)
                        }} 
                    />
                    ) : null}
                </>
            ) : (
                <>
                    <h3 className={styles.titleDelivery}>
                        <FontAwesomeIcon icon="exclamation-circle" />
                        <strong>Houve algo de errado com essa entrega</strong>
                    </h3>

                    <section className={styles.whatsWrong}>
                        <div className={styles.prevData}>
                            <span>ID:</span>
                            <p>1234</p>
                            <span>Endere??o da entrega</span>
                            <p>Rua Do Endere??o Da Entrega, 123 - Assis SP</p>
                            <span>Refer??ncia</span>
                            <p>Pr??ximo ao Bar do Z??</p>
                            <span>Forma de pagamento</span>
                            <p>Cart??o</p>
                            <span>Descri????o</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus in aliquam nostrum.</p>
                        </div>

                        {/* <div className={styles.issue}>
                            <div className={styles.issueTitle}>
                                <FontAwesomeIcon icon="adjust" />
                                <p>Pedido incompleto</p>
                            </div>

                            <strong>Ser?? necess??rio retornar ao endere??o de coleta</strong>
                        </div> */}

                        <div className={styles.issue}>
                            <div className={styles.issueTitle}>
                                <FontAwesomeIcon icon="map-marker" />
                                <p>Endere??o INCORRETO</p>
                            </div>
                        </div>

                        <div className={styles.issue}>
                            <div className={styles.issueTitle}>
                                <FontAwesomeIcon icon="map-marker-alt" />
                                <p>Endere??o CORRETO</p>
                            </div>

                            <strong>Rua Do Endere??o Correto, 321</strong>
                        </div>
                    </section>

                    <section className={styles.solveAction}>
                        
                        <div className={styles.explanation}>
                            <strong>Voc?? receber?? 2 entregas.</strong>

                            <span>
                                Voc?? dever?? se deslocar ao endere??o da entrega 
                                correto.
                            </span>
                            
                            {/* <span>
                                Voc?? dever?? retornar ao endere??o de coleta 
                                e depois ao endere??o de entrega novamente.
                            </span> */}

                            {/* <span>
                                Voc?? retornar?? apenas ao endere??o de coleta 
                                conforme seja necess??rio.
                            </span> */}
                        </div>
                    </section>

                    <div className={styles.issueButtonsContainer}>
                        {/* <button className={styles.disabledBtn}>Selecione uma solu????o para continuar</button> */}
                        {/* <button onClick={onClose} className={styles.requestIssueBtn}>Confirmar retorno</button> */}
                        <button onClick={onClose} className={styles.requestIssueBtn}>Confirmar endere??o correto</button>
                    </div>
                </>
            )}
        </div>
    )
}