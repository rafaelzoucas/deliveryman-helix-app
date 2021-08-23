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
                        <div className={styles.dateTimeId}>
                            <span className={styles.dateTime}>Hoje - 14:53</span>
        
                            <span className={`${styles.titleDelivery} ${styles.idDelivery}`}>
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
                    
                    {/* <section className={styles.statusContainer} style={{display: `${displayDeliveryCardItems}`}}>
                        <div className={styles.statusBar}>
                            <div className={styles.waitingDeliverymanStatus}>
                                <div className={styles.waitingDeliverymanCurrentStatus}></div>
                            </div>
        
                            <div className={styles.deliveryInProgressStatus}>
                                <div className={styles.deliveryInProgressCurrentStatus}></div>
                            </div>
                        </div>
        
                        <p>
                            Você está {'STATUS'}...
                            
                            
                                -se deslocando até o endereço de coleta
                                -coletando o pedido 
                                -confirmando forma de pagamento
                                -a caminho do endereço de entrega
                                -retornando ao endereço de coleta 
                           
                        </p>
        
                        <span>30 minutos e 57 segundos</span>
                    </section> */}

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
        
                    <section className={styles.addressContainer}>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="map-marker" />
                            <strong>Endereço de coleta</strong>
                        </h3>
                        
                        <Link href="https://www.google.com/maps/place/Supermercados+Avenida+Max/@-22.659259,-50.4242346,14.77z/data=!4m13!1m7!3m6!1s0x94953996f3aa8219:0x2e7a343fe4161010!2sR.+Santa+Cruz,+801+-+Centro,+Assis+-+SP,+19800-320!3b1!8m2!3d-22.6683807!4d-50.4132049!3m4!1s0x94953bd855437567:0x2807c2d59b6a69bb!8m2!3d-22.6487649!4d-50.4336399">
                            <div>
                                <p>Rua Do Endereço De Coleta, 345 </p>
                                    <FontAwesomeIcon icon="location-arrow" className={styles.mapsLink} />
                            </div>
                        </Link>
        
                        <span style={{display: `${displayDeliveryCardItems}`}}>Referência:</span>
        
                        <p style={{display: `${displayDeliveryCardItems}`}}>Próximo ao Bar Do Zé, Casa amarela de portão azul.</p>
                    </section>
        
                    <section className={styles.descriptionContainer} style={{display: `${displayDeliveryCardItems}`}}>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="align-left" />
                            <strong>Descrição</strong>
                        </h3>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ullam quas praesentium animi placeat beatae magni dolore a maiores.</p>
                    </section>

                    <section className={styles.addressContainer}>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="map-marker-alt" />
                            <strong>Endereço da entrega</strong>
                        </h3>

                        <Link href="https://www.google.com/maps/place/Cafeteria+Madalena/@-22.6666462,-50.4171918,16.06z/data=!4m13!1m7!3m6!1s0x94953996f3aa8219:0x2e7a343fe4161010!2sR.+Santa+Cruz,+801+-+Centro,+Assis+-+SP,+19800-320!3b1!8m2!3d-22.6683807!4d-50.4132049!3m4!1s0x0:0x5c0b6e5f19cb2b45!8m2!3d-22.6622735!4d-50.4139667">
                            <div>
                                <p>Rua Do Endereço Da Entrega, 345 </p>
                                <FontAwesomeIcon icon="location-arrow" className={styles.mapsLink} />
                            </div>
                        </Link>
        
                        <span style={{display: `${displayDeliveryCardItems}`}}>Referência:</span>
        
                        <p style={{display: `${displayDeliveryCardItems}`}}>Próximo ao Bar Do Zé, Casa amarela de portão azul.</p>
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
                            <strong>Forma de cobrança</strong>
                        </h3>
                        <p>Cartão</p>
                    </section>

                    <section id="payment" style={{display: `${displayDeliveryCardItems}`}}>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="dollar-sign" />
                            <strong>Valor pela corrida</strong>
                        </h3>
                        <p>R$ 9,75</p>
                    </section>

                    <div className={styles.actionButtonsContainer}>        
                        <div className={styles.progressBtns}>
                            <button onClick={openModalIssue} className={styles.issueBtn}>
                                Imprevisto
                            </button>

                            <button onClick={openModalIssue} className={styles.nextStepBtn}>
                                {'Next step button'}

                                {/* 
                                    -Cheguei para coletar
                                    -Peguei o pedido
                                    -Confirmei forma de pagamento
                                    -Entreguei
                                    -Retornei
                                    -Finalizar 
                                */}
                            </button>
        
                            {/*substituir pelo nextStepBtn */}
                            {/* <button onClick={openIssueRequest} className={styles.issueRequestBtn}> 
                                <FontAwesomeIcon icon="exclamation-circle" />
                                <span>Houve 1 imprevisto</span>
                            </button>*/}
                        </div>
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
                            <span>Endereço da entrega</span>
                            <p>Rua Do Endereço Da Entrega, 123 - Assis SP</p>
                            <span>Referência</span>
                            <p>Próximo ao Bar do Zé</p>
                            <span>Forma de pagamento</span>
                            <p>Cartão</p>
                            <span>Descrição</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus in aliquam nostrum.</p>
                        </div>

                        {/* <div className={styles.issue}>
                            <div className={styles.issueTitle}>
                                <FontAwesomeIcon icon="adjust" />
                                <p>Pedido incompleto</p>
                            </div>

                            <strong>Será necessário retornar ao endereço de coleta</strong>
                        </div> */}

                        <div className={styles.issue}>
                            <div className={styles.issueTitle}>
                                <FontAwesomeIcon icon="map-marker" />
                                <p>Endereço INCORRETO</p>
                            </div>
                        </div>

                        <div className={styles.issue}>
                            <div className={styles.issueTitle}>
                                <FontAwesomeIcon icon="map-marker-alt" />
                                <p>Endereço CORRETO</p>
                            </div>

                            <strong>Rua Do Endereço Correto, 321</strong>
                        </div>
                    </section>

                    <section className={styles.solveAction}>
                        
                        <div className={styles.explanation}>
                            <strong>Você receberá 2 entregas.</strong>

                            <span>
                                Você deverá se deslocar ao endereço da entrega 
                                correto.
                            </span>
                            
                            {/* <span>
                                Você deverá retornar ao endereço de coleta 
                                e depois ao endereço de entrega novamente.
                            </span> */}

                            {/* <span>
                                Você retornará apenas ao endereço de coleta 
                                conforme seja necessário.
                            </span> */}
                        </div>
                    </section>

                    <div className={styles.issueButtonsContainer}>
                        {/* <button className={styles.disabledBtn}>Selecione uma solução para continuar</button> */}
                        {/* <button onClick={onClose} className={styles.requestIssueBtn}>Confirmar retorno</button> */}
                        <button onClick={onClose} className={styles.requestIssueBtn}>Confirmar endereço correto</button>
                    </div>
                </>
            )}
        </div>
    )
}