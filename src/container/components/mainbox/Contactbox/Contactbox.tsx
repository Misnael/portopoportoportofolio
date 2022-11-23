import React from 'react'
import styles from './Contactbox.module.css'


const Contactbox = () => {
  return (
    <div className={styles.main}>

        <div className={styles.around}>
          
        </div>

        <div className={styles.content}>
            <div className={styles.list}>
              <li><a href="https://www.instagram.com/m1.ck3/">Instagram</a></li> <p></p>
              <li>Discord</li> <p></p>
              <li>Gmail</li> <p></p>
              <li>Youtube</li> <p></p>
              <li>Twitch</li> <p></p>
            </div>
          </div>
    
    </div>
  )
}

export default Contactbox