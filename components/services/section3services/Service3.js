import React, { useEffect, useRef } from 'react'
import styles from "./Service3.module.css"
import { motion, useAnimation, useInView } from "framer-motion"

const Service3 = () => {
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
            transition={{ duration: 1 }}
            className={`${styles.Service3} container`}>
            <div className={styles.Service3_wrapper}>
                <div className={styles.sm_h}>
                    <p>EVENTS</p>
                </div>
                <div className={styles.lg_h}>
                    <h1>Streamlined Process For Successful Event Execution</h1>
                </div>
                <div className={styles.sm_p}>
                    <p>Our Agency Takes You Through A Seamless Journye, Starting With An Initial Consultation To Understand Your Event Goals And Requirements We Then Meticulously Plan And Execute Every Detail To Ensure A Successful Event That Aligns With Your Brand</p>
                </div>
                <div className={styles.main_box_wrapper}>
                    <div className={styles.box_wrapper}>
                        <div className={styles.box}>

                        </div>
                        <div className={styles.box_content}>
                            <h1>Road Shows</h1>
                            <p className={styles.p0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
                            <div className={styles.b_p}>
                                <p className={styles.b_p1}>Lorem</p>
                                <p className={styles.b_p2}>Learn more <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8766 1L28.6279 13.6628L15.8766 26.3256M26.8569 13.6628L1.00002 13.6628" stroke="#FEFDFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box_wrapper}>
                        <div className={styles.box}>

                        </div>
                        <div className={styles.box_content}>
                            <h1>Road Shows</h1>
                            <p className={styles.p0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
                            <div className={styles.b_p}>
                                <p className={styles.b_p1}>Lorem</p>
                                <p className={styles.b_p2}>Learn more <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8766 1L28.6279 13.6628L15.8766 26.3256M26.8569 13.6628L1.00002 13.6628" stroke="#FEFDFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box_wrapper}>
                        <div className={styles.box}>

                        </div>
                        <div className={styles.box_content}>
                            <h1>Road Shows</h1>
                            <p className={styles.p0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
                            <div className={styles.b_p}>
                                <p className={styles.b_p1}>Lorem</p>
                                <p className={styles.b_p2}>Learn more <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8766 1L28.6279 13.6628L15.8766 26.3256M26.8569 13.6628L1.00002 13.6628" stroke="#FEFDFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.main_box_wrapper}>
                    <div className={styles.box_wrapper}>
                        <div className={styles.box}>

                        </div>
                        <div className={styles.box_content}>
                            <h1>Road Shows</h1>
                            <p className={styles.p0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
                            <div className={styles.b_p}>
                                <p className={styles.b_p1}>Lorem</p>
                                <p className={styles.b_p2}>Learn more <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8766 1L28.6279 13.6628L15.8766 26.3256M26.8569 13.6628L1.00002 13.6628" stroke="#FEFDFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box_wrapper}>
                        <div className={styles.box}>

                        </div>
                        <div className={styles.box_content}>
                            <h1>Road Shows</h1>
                            <p className={styles.p0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
                            <div className={styles.b_p}>
                                <p className={styles.b_p1}>Lorem</p>
                                <p className={styles.b_p2}>Learn more <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8766 1L28.6279 13.6628L15.8766 26.3256M26.8569 13.6628L1.00002 13.6628" stroke="#FEFDFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box_wrapper}>
                        <div className={styles.box}>

                        </div>
                        <div className={styles.box_content}>
                            <h1>Road Shows</h1>
                            <p className={styles.p0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nunc sit amet feugiat tincidunt, lectus neque consequat elit, a consectetur risus tellus eu nisl.</p>
                            <div className={styles.b_p}>
                                <p className={styles.b_p1}>Lorem</p>
                                <p className={styles.b_p2}>Learn more <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8766 1L28.6279 13.6628L15.8766 26.3256M26.8569 13.6628L1.00002 13.6628" stroke="#FEFDFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Service3