import React from 'react'
import styles from './Contactbox.module.css'

const Contactbox = () => {
  return (
    <div className={styles.main}>

        <div className={styles.content}>
          <div className={styles.list}>
            <li>Instagram</li> <p></p>
            <li>Discord</li> <p></p>
            <li>Gmail</li> <p></p>
            <li>Youtube</li> <p></p>
            <li>Twitch</li> <p></p>
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.insta}>
            <iframe className={styles.insta} src="https://www.instagram.com/p/CeD4CBGMBD_/?utm_source=ig_web_copy_link" ></iframe>
          </div>
        </div>
    
    </div>
  )
}

export default Contactbox