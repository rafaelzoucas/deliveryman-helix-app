import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


import styles from './styles.module.scss'
import { useState } from 'react'
import Notifications from '../Modals/Notifications'

export default function Header(props) {
    const [isNotificationsVisible, setIsNotificationsVisible] = useState(false)
    const [isSearchInputVisible, setIsSearchInputVisible] = useState(false)

    const openNotifications = () => {
        setIsNotificationsVisible(true)
    }

    const showHideSearchInput = () => {
        if(isSearchInputVisible) {
            setIsSearchInputVisible(false)
        } else {
            setIsSearchInputVisible(true)
        }
    }
    
    return(
        <>
            <div className={styles.headerContainer}>
                <h1>{props.title}</h1>

                <div className={styles.buttonsHeader}>
                    <div className={styles.searchContainer}>
                        <input 
                            type="text" 
                            placeholder="Pesquisar" 
                            className={`${isSearchInputVisible ? (
                                `${styles.showSearchInput}`
                            ) : (
                                `${styles.hideSearchInput}`
                            )}`} 
                        />
                        <button onClick={showHideSearchInput} className={styles.searchBtn}>
                            <FontAwesomeIcon icon="search" className={styles.faIcon} />
                        </button>
                    </div>

                    <button onClick={openNotifications} className={styles.notificationButton}>
                        <div className={styles.badgeNewNotification}>
                            99+
                        </div>

                        {/* <div className={styles.newIssueNotification}>
                            <FontAwesomeIcon icon="exclamation-circle" />
                        </div> */}

                        <FontAwesomeIcon icon="bell"  className={styles.faIcon} />
                    </button>
                </div>
            </div>
            
            {isNotificationsVisible ? <Notifications onClose={() => setIsNotificationsVisible(false)} /> : null}
        </>
    )
}