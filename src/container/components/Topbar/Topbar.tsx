import React from 'react'
import styles from './Topbar.module.css'

const Topbar = () => {
  return (
    <div className={styles.toptopbar}>
        
        <div className={styles.useles}></div>
        <button className={styles.abt}>
            <span>About</span>
        </button>
        <button className={styles.port}>
            <span>Portfolio</span>
        </button>
        <button className={styles.cont}>
            <span>Contact</span>
        </button>
    </div>
  )
}

export default Topbar