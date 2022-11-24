import React from 'react'
import styles from './Contactbox.module.css'


const Contactbox = () => {
  return (
    <div className={styles.main}>


        <div className={styles.content}>
            <div className={styles.list}>
              <li><a href="https://www.instagram.com/m1.ck3/">Instagram</a></li> <p></p>
              <li><a href="https://discord.com/channels/@me">Discord</a></li> <p></p>
              <li>Mikaelkotanen04@gmail.com</li> <p></p>
              <li>Youtube</li> <p></p>
              <li>Twitch</li> <p></p>
            </div>
          </div>
    
        <div className={styles.around}>
          <div className={styles.discord}>
          <iframe src="https://discord.com/widget?id=864283982291664917&theme=dark" width="350" height="500"
           
           sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </div>
    </div>
  )
}

export default Contactbox