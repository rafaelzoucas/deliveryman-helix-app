import React, { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import styles from './home.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Deliveries from '../components/Tabs/Deliveries'
import History from '../components/Tabs/History'
import Header from '../components/Header'
import Menu from '../components/Modals/Menu'

export default function Home() {
  const [isDeliverymanOnline, setIsDeliverymanOnline] = useState(false)
  const [isModalMenuVisible, setIsModalMenuVisible] = useState(false)
  const [currentTab, setCurrentTab] = useState('Entregas')

  const [displayDeliveries, setDisplayDeliveries] = useState('')
  const [displayHistory, setDisplayHistory] = useState('none')
  const [displayFinance, setDisplayFinance] = useState('none')

  const [isDeliveriesVisible, setIsDeliveriesVisible] = useState(true)
  const [isHistoryVisible, setIsHistoryVisible] = useState(false)
  const [isFinanceVisible, setIsFinanceVisible] = useState(false)
  const displayBtn = '#ff5a1f'

  function showDeliveries() {
    setDisplayHistory('none')
    setDisplayFinance('none')
    setDisplayDeliveries('')
    setIsDeliveriesVisible(true)
    setIsHistoryVisible(false)
    setIsFinanceVisible(false)
    setCurrentTab('Entregas')
  }

  function showHistory() {
    setDisplayDeliveries('none')
    setDisplayFinance('none')
    setDisplayHistory('')
    setIsDeliveriesVisible(false)
    setIsHistoryVisible(true)
    setIsFinanceVisible(false)
    setCurrentTab('Histórico')
  }

  const switchToggle = () => {
    if(isDeliverymanOnline) {
      setIsDeliverymanOnline(false)
    } else {
      setIsDeliverymanOnline(true)
    }
  }

  const openModalMenu = () => {
    setIsModalMenuVisible(true)
    disableBodyScroll(document)
  }  

  return (
    <div className={styles.homepage}>
      <Header title={currentTab} />
      <main>
        <div id="tabs">
          <div className={styles.tabLinks}>
            <button 
              onClick={openModalMenu} 
              className={styles.navbarBtn}
            >
              <FontAwesomeIcon icon="bars" />
            </button>

            <button 
              onClick={showDeliveries}
              className={styles.navbarBtn} 
              style={isDeliveriesVisible ? (
                {color: `${displayBtn}`}
              ) : (
                {color: ''}
              )}
            >
              <FontAwesomeIcon icon="motorcycle" />
            </button>

            <button 
              onClick={showHistory} 
              className={styles.navbarBtn} 
              style={isHistoryVisible ? (
                {color: `${displayBtn}`}
              ) : (
                {color: ''}
              )}
            >
              <FontAwesomeIcon icon="history" />
            </button>

            <div className={`${isDeliverymanOnline ? (
                `${styles.toggleOn}`
              ) : (
                `${styles.toggleOff}`
              )}`}               
              onClick={switchToggle}
            >
              <div className={styles.toggleCircle} />
            </div>
          </div>

          {isModalMenuVisible ? (
            <Menu 
              onClose={() => {
                setIsModalMenuVisible(false)
                enableBodyScroll(document)
              }} 
            />
          ) : null}
          
          <div className={styles.tabContent}>
            <section 
              id="deliveries"
              style={{display: `${displayDeliveries}`}}
            >
              <Deliveries />
            </section>

            <section
              id="history"
              style={{display: `${displayHistory}`}}
            >
              <History />
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
