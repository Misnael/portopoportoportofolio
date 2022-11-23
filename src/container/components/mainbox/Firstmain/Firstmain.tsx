import React from 'react'
import styles from './firstmain.module.css'

const firstmain = () => {
  return (
    <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.title}>My Projects!</div>
            <div className={styles.projects}>
              <li></li>
              <p></p>
              <li></li>
              <p></p>
              <li></li>
              <p></p>
              <li></li>
              <p></p>
              <li></li>
              <p></p>
              <li></li>
              <p></p>
            </div>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <span>Boowe The Half-Stack Developer</span>
          </div>
        </div>
    </div>
  )
}

export default firstmain