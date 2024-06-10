import React from 'react'
import styles from '@/pages/privacy/privacy.module.css'
import Navbar from '@/components/navbar/Navbar'

const privacy = () => {
  return (
    <>
    <Navbar />
      <div className={`${styles.privacy} container`}>
        <div className={ styles.image_wrapper}>
              <div className={styles.c_image}>
                  <h1>Privacy Policy</h1>
                  <p className={styles.c_p1}>We are corporate event agency that specifies in transforming events into unforgettable<br /> experience</p>
                  <img src='/images/p.svg' alt="privacy" className={styles.s4_img} />
                  <img src='/images/p1.svg' alt="privacy" className={styles.s4_img1} />
              </div>
          </div>
      </div>
    </>
  )
}

export default privacy