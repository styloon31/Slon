import React from 'react'
import styles from './Rsection3.module.css'

const Rsection3 = () => {
    return (
        <div className={`${styles.Rsection3} container`}>
            <div className={styles.wrapper}>
                <h1>Providing State-of-the-Art Equipment for <span>Unforgettable Events</span></h1>
                <p>Our agency specializes in delivering top-notch audio and visual equipment to enhance the impact of you meetings.
                    With our state-of-the-art technology, we ensure that every presentation is clear, engaging, and memorable.
                </p>
                <div className={styles.wrapper2}>
                    <div className={styles.box1}>
                        <h2>78%</h2>
                        <p>Elevate your meetings with cutting-edge audio and visual solutions</p>
                    </div>
                    <div className={styles.box2}>
                        <h2>231K</h2>
                        <p>Create impactful experiences with our advanced AV technology</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rsection3