import React from 'react'
import styles from "./Section1.module.css"
import { HiOutlineArrowSmDown } from "react-icons/hi";
import {motion, useAnimation, useInView} from "framer-motion"

const Section1 = () => {
  return (
    <div className={`${styles.section1Cont}`}>
        <div className={`container ${styles.section1wrap}`}>
            <h1 className={styles.section1H1}>Elevate Your Brand with Impactful<br /> <span className={styles.span1}>Sponsorship</span> & <span className={styles.span1}>Event Strategies</span></h1>
            <p className={styles.section1p}>Curating Tailored Solutions for Fundraising, Road Shows, Milestone<br /> Events, Dealer Meets, Corporate Gifting, and Team Building.</p>
            <div className={styles.btn_wrap}>
                <button className={styles.section1btn}>PARTNER WITH US</button>
                <button className={styles.d_btn}>
                  <motion.div 
                  initial={{ y:  -10}}
                  animate={{ y: 10 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 40,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 0.2,
                  }}
                  >
                    <HiOutlineArrowSmDown className={styles.svgdown} />
                  </motion.div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Section1