import React, { useEffect, useRef } from 'react'
import styles from './Asection1.module.css'
import { motion, useAnimation, useInView } from "framer-motion"

const Asection1 = () => {
  const ref = useRef()
  const isInView = useInView(ref)
  const mainControls = useAnimation();
  const rightControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      rightControls.start("visible")
    }
  }, [isInView])
  return (
    <motion.div ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1 }} className={`${styles.service_wrapper} container`}>
      <div className={styles.c_image}>
        <p className={styles.c_p}>Our vision</p>
        <h1>About Us</h1>
        <p className={styles.c_p1}>We envision a world where business can achieve unparalleled success through strategic partnership, exceptional event<br /> management, and innovative fundraising solutions</p>
        <img src='/images/p.svg' alt="privacy" className={styles.s4_img} />
        <img src='/images/p1.svg' alt="privacy" className={styles.s4_img1} />
      </div>
    </motion.div>
  )
}

export default Asection1