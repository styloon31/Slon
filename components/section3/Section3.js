import React, { useEffect, useRef } from 'react'
import styles from './Section3.module.css'
import { motion, useAnimation, useInView } from "framer-motion"
import Reveal from '../reveal/Reveal'

const Section3 = () => {
  const ref = useRef()
  const ref2 = useRef()
  const isInView = useInView(ref)
  const mainControls = useAnimation();
  const rightControls = useAnimation();
  const mainControls1 = useAnimation();
  const rightControls1 = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      rightControls.start("visible")
      mainControls1.start("visible")
      rightControls1.start("visible")
    }
  }, [isInView])

  return (
    <div className={`${styles.sec3} container`}>
      <h1 className={styles.sec3_h1}>Our Services</h1>
      <div>
        <div className={styles.sec3_block1}>
          <div className={styles.box1_wrapper}>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: -100, y: -100 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 0.25, ease: 'linear' }}
              className={styles.box1}>

            </motion.div>
            <div className={styles.box2_content1}>
              <h1>Road Shows</h1>
              <p className={styles.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit
                amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
              <div className={styles.p_wrap}>
                <p className={styles.p2}>Lorem</p>
                <p className={styles.p2}>ipsum</p>
              </div>
            </div>
          </div>
          <div className={styles.box2_wrapper}>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: 100, y: 100 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 0.25, ease: 'linear' }}
              className={styles.box2}>
            </motion.div>
            <motion.div ref={ref}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 0.5, ease: 'linear' }}
              className={styles.box2_content}>
              <h1>Milestone Events</h1>
              <p className={styles.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit
                amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
              <div className={styles.p_wrap}>
                <p className={styles.p2}>Lorem</p>
                <p className={styles.p2}>ipsum</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className={styles.sec3_block2}>
          <div className={styles.box3_wrapper}>
            <motion.div
              ref={ref2}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0, ease: 'linear' },
              }}
              initial="hidden"
              animate={mainControls1}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={styles.box2_content2}>
              <h1>Road Shows</h1>
              <p className={styles.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit
                amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
              <div className={styles.p_wrap}>
                <p className={styles.p2}>Lorem</p>
                <p className={styles.p2}>ipsum</p>
              </div>
            </motion.div>
            <motion.div
              ref={ref2}
              variants={{
                hidden: { opacity: 0, x: -100, y: 100 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
              initial="hidden"
              animate={mainControls1}
              transition={{ duration: 0.6, delay: 0.25, ease: 'linear' }}
              className={styles.box3}>

            </motion.div>
            <motion.div
              ref={ref2}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0, ease: 'linear' },
              }}
              initial="hidden"
              animate={mainControls1}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={styles.box2_content}>
              <h1>Dealer Meets</h1>
              <p className={styles.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit
                amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
              <div className={styles.p_wrap}>
                <p className={styles.p2}>Lorem</p>
                <p className={styles.p2}>ipsum</p>
              </div>
            </motion.div>
          </div>
          <div className={styles.box4_wrapper}>
            <motion.div
              ref={ref2}
              variants={{
                hidden: { opacity: 0, x: 100, y: 100 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
              initial="hidden"
              animate={mainControls1}
              transition={{ duration: 0.6, delay: 0.25, ease: 'linear' }}
              className={styles.box4}></motion.div>
            <motion.div ref={ref2}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0, ease: 'linear' },
              }}
              initial="hidden"
              animate={mainControls1}
              transition={{ duration: 0.6, delay: 0.5 }} className={styles.box2_content}>
              <h1>Corporate Events</h1>
              <p className={styles.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit
                amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
              <div className={styles.p_wrap}>
                <p className={styles.p2}>Lorem</p>
                <p className={styles.p2}>ipsum</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Section3