import React from 'react'
import styles from './Rsection1.module.css'

const Rsection1 = () => {
  return (
    <div className={`${styles.service_wrapper} container`}>       
        <div className={styles.c_image}>
            <p className={styles.c_p}>Services</p>
            <h1>Road Show</h1>
            <p className={styles.c_p1}>We are corporate agency that specializes in transforming events into unforgettable<br /> experience</p>
            <img src='/images/p.svg' alt="privacy" className={styles.s4_img} />
            <img src='/images/p1.svg' alt="privacy" className={styles.s4_img1} />
        </div>
    </div>
  )
}

export default Rsection1