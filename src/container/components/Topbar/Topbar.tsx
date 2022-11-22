import React from 'react'
import styles from './Topbar.module.css'

const Topbar = () => {
  return (
    <div className={styles.toptopbar}>
        <h1 className={styles.name}><a href="/home">Boowe's Portfolio</a></h1>
        <div className={styles.useles}></div>
        <button className={styles.abt}>
            <span> <a href="/About">About</a></span>
        </button>
        <button className={styles.port}>
            <span><a href="/Portfolio">Portfolio</a></span>
        </button>
        <button className={styles.cont}>
            <span><a href="/Contact">Contact</a></span>
        </button>
    </div>
  )
}

export default Topbar