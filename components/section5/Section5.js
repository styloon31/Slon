import React, { useEffect, useRef } from 'react'
import styles from "./Section5.module.css"
import { motion, useAnimation, useInView } from "framer-motion"

const Section5 = () => {
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
    <div className={`${styles.Section5} container`}>
      <motion.div ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }} className={styles.s5_box}>
        <h2>Ready To Elevate Your Brand With Impactful Sponsorship And Events? Reach Out To Us Today!</h2>
        <button className={styles.s5_btn}>Get in touch</button>
      </motion.div>
    </div>
  )
}

export default Section5