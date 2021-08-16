import React from 'react'
import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Feedback() {

    return(
        <div className={styles.feedbackContainer}>
            <section className={styles.headerContainer}>
                <h1>Entregador exclusivo</h1>
                <Link href="/">
                    <button>
                        <FontAwesomeIcon icon="times" />
                    </button>
                </Link>
            </section> 

            <section className={styles.codeContainer}>
                <div className={styles.title}>
                    <FontAwesomeIcon icon="motorcycle" />
                    <h3>Digite o código abaixo:</h3>
                </div>

                <input type="text" placeholder="A1B2C3" />

                <button className={styles.continue}>Enviar solicitação</button>
            </section>

            <section>
                <div className={styles.title}>
                    <FontAwesomeIcon icon="heart" />
                    <h3>Atualmente exclusivo</h3>
                </div>
                
                <div className={styles.cardClient}>
                    <div>
                        <div className={styles.logoClient}>
                            <FontAwesomeIcon icon="store" />
                        </div>

                        <h1>Estabelecimento</h1>
                    </div>

                    <FontAwesomeIcon icon="times-circle" className={styles.cancel} />                            
                </div>
            </section>
        </div>
    )
}