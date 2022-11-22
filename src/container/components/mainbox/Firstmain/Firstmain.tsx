import React from 'react'
import styles from './firstmain.module.css'

const firstmain = () => {
  return (
    <div className={styles.main}>
        <div className={styles.side}>
          
        </div>
        <div className={styles.content}>
          <div className={styles.text}></div>
          <div className={styles.posdiv}>
            <div className={styles.empt}></div>
            <div className={styles.picture}></div>
          </div>
        </div>
    </div>
  )
}

export default firstmain