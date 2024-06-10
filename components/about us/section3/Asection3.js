import React, { useEffect, useRef } from 'react'
import styles from './Asections3.module.css'
import { motion, useAnimation, useInView } from "framer-motion"

const Asection3 = () => {
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
        <div className={`${styles.Asection3} container`}>
            <div className={styles.wrapper}>
                <div className={styles.h}>
                    <h1>Our Values</h1>
                    <p>The Foundation Of Our <span>Commitment</span> To <span>Excellence</span></p>
                </div>
                <div className={styles.new}>
                    <div className={styles.wrap}>
                        <motion.div ref={ref}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={styles.heading}>
                            <svg width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 39.5983C26.9344 39.5855 25.8906 39.9088 25.009 40.5246C24.1275 41.1405 23.4505 42.0194 23.0692 43.043C22.688 44.0666 22.6207 45.1857 22.8765 46.2499C23.1323 47.314 23.6989 48.2719 24.5 48.9948V53.999C24.5 54.9539 24.8688 55.8696 25.5251 56.5448C26.1815 57.2199 27.0717 57.5992 28 57.5992C28.9283 57.5992 29.8185 57.2199 30.4749 56.5448C31.1312 55.8696 31.5 54.9539 31.5 53.999V48.9948C32.3011 48.2719 32.8677 47.314 33.1235 46.2499C33.3793 45.1857 33.312 44.0666 32.9308 43.043C32.5495 42.0194 31.8725 41.1405 30.991 40.5246C30.1094 39.9088 29.0656 39.5855 28 39.5983ZM45.5 25.1975H17.5V17.9971C17.4949 15.8593 18.1067 13.768 19.2579 11.9881C20.4091 10.2082 22.048 8.81971 23.9669 7.99856C25.8858 7.1774 27.9985 6.9605 30.0373 7.37531C32.0762 7.79012 33.9495 8.81799 35.42 10.3287C36.7358 11.7115 37.677 13.4243 38.15 15.297C38.2649 15.7556 38.4665 16.1864 38.7433 16.5649C39.0201 16.9434 39.3666 17.262 39.7631 17.5027C40.1596 17.7434 40.5983 17.9014 41.0542 17.9677C41.5101 18.034 41.9742 18.0073 42.42 17.8891C42.8658 17.7709 43.2847 17.5636 43.6526 17.2789C44.0205 16.9942 44.3303 16.6377 44.5643 16.2299C44.7983 15.822 44.952 15.3707 45.0164 14.9018C45.0809 14.4329 45.0549 13.9555 44.94 13.4969C44.1426 10.382 42.5612 7.53836 40.355 5.25247C37.9056 2.74086 34.7877 1.0321 31.3949 0.341969C28.002 -0.348162 24.4865 0.0112809 21.2921 1.37491C18.0977 2.73854 15.3678 5.04521 13.447 8.00364C11.5262 10.9621 10.5007 14.4396 10.5 17.9971V25.1975C7.71523 25.1975 5.04451 26.3354 3.07538 28.3609C1.10625 30.3864 0 33.1336 0 35.9981V61.1994C0 64.0639 1.10625 66.8111 3.07538 68.8366C5.04451 70.8621 7.71523 72 10.5 72H45.5C48.2848 72 50.9555 70.8621 52.9246 68.8366C54.8938 66.8111 56 64.0639 56 61.1994V35.9981C56 33.1336 54.8938 30.3864 52.9246 28.3609C50.9555 26.3354 48.2848 25.1975 45.5 25.1975ZM49 61.1994C49 62.1543 48.6313 63.07 47.9749 63.7452C47.3185 64.4203 46.4283 64.7996 45.5 64.7996H10.5C9.57174 64.7996 8.6815 64.4203 8.02513 63.7452C7.36875 63.07 7 62.1543 7 61.1994V35.9981C7 35.0433 7.36875 34.1275 8.02513 33.4524C8.6815 32.7772 9.57174 32.3979 10.5 32.3979H45.5C46.4283 32.3979 47.3185 32.7772 47.9749 33.4524C48.6313 34.1275 49 35.0433 49 35.9981V61.1994Z" fill="white" />
                            </svg>
                            <p>Integrity: We Operate With The<br />
                                Highest Standards Of Honesty And<br />
                                Fairness
                            </p>
                        </motion.div>
                        <motion.div ref={ref}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={styles.heading}>
                            <svg width="63" height="67" viewBox="0 0 63 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.3128 31.2708L58.5928 5.92538M58.5928 5.92538L48.4448 2M58.5928 5.92538L54.8168 16.3446M61 65H49.2V31.0769C49.2 30.4343 49.4486 29.818 49.8912 29.3635C50.3338 28.9091 50.9341 28.6538 51.56 28.6538H58.64C59.2659 28.6538 59.8662 28.9091 60.3088 29.3635C60.7514 29.818 61 30.4343 61 31.0769V65ZM37.4 65H25.6V38.3462C25.6 37.7035 25.8486 37.0872 26.2912 36.6328C26.7338 36.1784 27.3341 35.9231 27.96 35.9231H35.04C35.6659 35.9231 36.2662 36.1784 36.7088 36.6328C37.1514 37.0872 37.4 37.7035 37.4 38.3462V65ZM13.8 65H2V45.6154C2 44.9727 2.24864 44.3564 2.69123 43.902C3.13381 43.4476 3.73409 43.1923 4.36 43.1923H11.44C12.0659 43.1923 12.6662 43.4476 13.1088 43.902C13.5514 44.3564 13.8 44.9727 13.8 45.6154V65Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p >Innovation: We Embrace Creativity<br />
                                And Innovation In Every Project We<br />
                                Undertake
                            </p>
                        </motion.div>
                    </div>
                    <motion.div ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={styles.block1}></motion.div>
                    <div className={styles.wrap}>
                        <motion.div ref={ref}
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={styles.heading1}>
                            <svg width="96" height="57" viewBox="0 0 96 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.83 0.0886556L33.165 7.63917C30.87 8.25976 28.74 9.39751 26.94 10.9638L22.95 14.4657C21.42 15.8103 19.425 16.5491 17.37 16.5491H14.4V35.4623C17.46 35.551 20.37 36.7774 22.545 38.9199L27.885 44.1801L28.935 45.2145L32.985 49.204C33.915 50.1201 35.445 50.1201 36.375 49.204C36.63 48.9528 36.825 48.6573 36.93 48.347C37.35 47.2092 38.325 46.3522 39.525 46.0862C40.725 45.8203 41.985 46.1749 42.855 47.0467L44.475 48.6129C46.215 50.3269 49.035 50.3269 50.76 48.6129C51.57 47.815 52.005 46.7955 52.05 45.7464C52.11 44.4461 52.89 43.2936 54.09 42.7321C55.29 42.1706 56.685 42.2888 57.75 43.0424C59.16 44.0324 61.125 43.8994 62.385 42.6582C63.795 41.2693 63.795 39.0233 62.385 37.6492L51.015 26.449L45.645 31.325C41.55 35.0486 35.265 35.1077 31.095 31.458C26.34 27.2912 26.235 20.0214 30.855 15.7216L41.37 5.93994C45.48 2.12774 50.91 0 56.565 0C61.98 0 67.215 1.9652 71.25 5.49666L75.765 9.45662H93.6C94.92 9.45662 96 10.5205 96 11.8208V42.5548C96 45.1701 93.855 47.2831 91.2 47.2831H86.4C84.63 47.2831 83.07 46.3374 82.245 44.9189H69.51C69 45.9089 68.325 46.8546 67.485 47.682C64.92 50.2087 61.365 51.1987 58.035 50.652C57.495 51.7307 56.76 52.7354 55.845 53.6368C51.75 57.6706 45.345 58.0695 40.785 54.8336C37.02 57.907 31.41 57.7149 27.885 54.2278L23.85 50.2383L22.8 49.204L17.46 43.9437C16.635 43.131 15.555 42.6582 14.4 42.5696C14.4 45.1701 12.24 47.2831 9.6 47.2831H4.8C2.145 47.2831 0 45.1701 0 42.5548V11.8208C0 10.5205 1.08 9.45662 2.4 9.45662H17.37C17.67 9.45662 17.955 9.35319 18.165 9.1611L22.14 5.67397C26.325 2.02431 31.71 0 37.305 0H38.85C39.51 0 40.185 0.0295517 40.83 0.0886556ZM81.6 37.8265V16.5491H74.4C73.515 16.5491 72.66 16.224 72.015 15.6477L66.48 10.8012C63.75 8.40753 60.225 7.09246 56.565 7.09246C52.755 7.09246 49.095 8.52573 46.32 11.0968L35.805 20.8784C34.26 22.3265 34.29 24.7645 35.88 26.1535C37.275 27.3799 39.39 27.3503 40.755 26.1091L51.54 16.2979C52.995 14.9681 55.275 15.0567 56.625 16.5048C57.975 17.9528 57.885 20.184 56.415 21.5138L56.295 21.632L67.455 32.6253C68.955 34.1029 69.93 35.9204 70.365 37.8117H81.6V37.8265ZM9.6 40.1906C9.6 39.5636 9.34714 38.9623 8.89706 38.5189C8.44697 38.0756 7.83652 37.8265 7.2 37.8265C6.56348 37.8265 5.95303 38.0756 5.50294 38.5189C5.05286 38.9623 4.8 39.5636 4.8 40.1906C4.8 40.8176 5.05286 41.419 5.50294 41.8623C5.95303 42.3057 6.56348 42.5548 7.2 42.5548C7.83652 42.5548 8.44697 42.3057 8.89706 41.8623C9.34714 41.419 9.6 40.8176 9.6 40.1906ZM88.8 42.5548C89.4365 42.5548 90.047 42.3057 90.4971 41.8623C90.9472 41.419 91.2 40.8176 91.2 40.1906C91.2 39.5636 90.9472 38.9623 90.4971 38.5189C90.047 38.0756 89.4365 37.8265 88.8 37.8265C88.1635 37.8265 87.553 38.0756 87.1029 38.5189C86.6529 38.9623 86.4 39.5636 86.4 40.1906C86.4 40.8176 86.6529 41.419 87.1029 41.8623C87.553 42.3057 88.1635 42.5548 88.8 42.5548Z" fill="white" />
                            </svg>
                            <p>Collaboration: We Believe In The<br />
                                Power Of Teamwork And Building<br />
                                Strong Partnerships
                            </p>
                        </motion.div>
                        <motion.div ref={ref}
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={styles.heading1}>
                            <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_363_101)">
                                    <path d="M50.0333 65.8333V68.4667C50.7317 68.4667 51.4015 68.1892 51.8954 67.6954C52.3892 67.2015 52.6667 66.5317 52.6667 65.8333H50.0333ZM28.9667 65.8333H26.3333C26.3333 66.5317 26.6108 67.2015 27.1046 67.6954C27.5985 68.1892 28.2683 68.4667 28.9667 68.4667V65.8333ZM31.6 79H47.4V73.7333H31.6V79ZM18.8547 33.7067L18.802 34.0753L24.016 34.8127L24.0739 34.444L18.8547 33.7067ZM39.5 15.8C34.4795 15.7992 29.6273 17.6098 25.8346 20.8994C22.0419 24.1889 19.5635 28.7365 18.8547 33.7067L24.0739 34.444C24.6052 30.7302 26.453 27.3327 29.2877 24.8754C32.1224 22.418 35.7484 21.0656 39.5 21.0667V15.8ZM60.1453 33.7067C59.4365 28.7365 56.9581 24.1889 53.1654 20.8994C49.3727 17.6098 44.5205 15.7992 39.5 15.8V21.0667C43.2513 21.0667 46.8767 22.4195 49.7112 24.8766C52.5457 27.3338 54.3991 30.7307 54.9313 34.444L60.1453 33.7067ZM60.198 34.0753L60.1453 33.7067L54.9313 34.444L54.9787 34.8127L60.198 34.0753ZM56.0373 49.8174C59.3553 45.5303 61.0301 39.9477 60.198 34.0753L54.984 34.8179C55.2856 36.8889 55.1659 38.9995 54.6319 41.0231C54.098 43.0467 53.1608 44.9416 51.8767 46.5942L56.0373 49.8174ZM47.4 57.4067V65.8333H52.6667V57.4119L47.4 57.4067ZM50.0333 63.2H28.9667V68.4667H50.0333V63.2ZM31.6 65.8333V57.4119H26.3333V65.8333H31.6ZM18.802 34.0753C18.4017 36.8442 18.5638 39.6654 19.2787 42.3702C19.9935 45.075 21.2465 47.6079 22.9627 49.8174L27.1286 46.5942C25.8445 44.9416 24.902 43.0467 24.3681 41.0231C23.8341 38.9995 23.7144 36.8837 24.016 34.8127L18.802 34.0753ZM31.6 57.4067C31.6 53.0722 29.2932 49.3855 27.1233 46.5889L22.9627 49.8174C24.9798 52.4244 26.3333 54.9103 26.3333 57.4067H31.6ZM51.8767 46.5889C49.7015 49.3908 47.4 53.0722 47.4 57.4067H52.6667C52.6667 54.9103 54.0202 52.4244 56.0373 49.8174L51.8767 46.5889ZM36.8667 0V10.5333H42.1333V0H36.8667ZM0 42.1333H10.5333V36.8667H0V42.1333ZM68.4667 42.1333H79V36.8667H68.4667V42.1333ZM17.6644 19.2023L9.7644 11.3023L6.0356 15.0311L13.9356 22.9311L17.6644 19.2023ZM65.0644 22.9311L72.9644 15.0311L69.2356 11.3023L61.3356 19.2023L65.0644 22.9311Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_363_101">
                                        <rect width="79" height="79" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Innovation: We Embrace Creativity<br />
                                And Innovation In Every Project We<br />
                                Undertake
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asection3