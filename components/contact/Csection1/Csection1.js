import React, { useEffect, useRef } from 'react'
import styles from "./Csection1.module.css"
import { motion, useAnimation, useInView } from "framer-motion"

const Csection1 = () => {
    const ref = useRef()
    const ref2 = useRef()
    const isInView = useInView(ref)
    const isInView2 = useInView(ref2)
    const mainControls = useAnimation();
    const rightControls = useAnimation();
    const mainControls1 = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            rightControls.start("visible")
            mainControls1.start("visible")
        }
        if (isInView2) {
            mainControls1.start("visible")
        }
    }, [isInView, isInView2])
    return (
        <div className={`${styles.csection1Cont} container`}>
            <motion.div ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1 }}
                className={styles.image_wrapper}>
                <div className={styles.c_image}>
                    <p className={styles.c_p}>CONTACT</p>
                    <h1>Get in Touch</h1>
                    <p className={styles.c_p1}>We are corporate event agency that specifies in transforming events into unforgettable experience</p>
                </div>
            </motion.div>
            <div className={styles.c_wrapper}>
                <div className={styles.red_wrapper}>
                    <motion.div ref={ref}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={styles.r_box1}>
                        <div className={styles.d1}>
                            <h1>Email</h1>
                            <svg width="81" height="68" viewBox="0 0 81 68" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                                <path d="M81 8.5C81 3.825 77.355 0 72.9 0H8.1C3.645 0 0 3.825 0 8.5V59.5C0 64.175 3.645 68 8.1 68H72.9C77.355 68 81 64.175 81 59.5V8.5ZM72.9 8.5L40.5 29.75L8.1 8.5H72.9ZM72.9 59.5H8.1V17L40.5 38.25L72.9 17V59.5Z" fill="#E9E9E9" />
                            </svg>
                            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg_}>
                                <path d="M26 2.75C26 1.2375 24.83 0 23.4 0H2.6C1.17 0 0 1.2375 0 2.75V19.25C0 20.7625 1.17 22 2.6 22H23.4C24.83 22 26 20.7625 26 19.25V2.75ZM23.4 2.75L13 9.625L2.6 2.75H23.4ZM23.4 19.25H2.6V5.5L13 12.375L23.4 5.5V19.25Z" fill="#E9E9E9" />
                            </svg>
                        </div>
                        <div className={styles.d2}>
                            <h2>rochelle@slonconsulting.com</h2>
                            <h2>valentino@slonconsulting.com</h2>
                        </div>
                        <div className={styles.d3}>
                            <button className={styles.c_btn}>Contact Now</button>
                        </div>
                    </motion.div>
                    <motion.div ref={ref2}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={styles.r_box1}>
                        <div className={styles.d1_}>
                            <h1>Phone No.</h1>
                            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                                <path d="M13.0722 28.1306C18.2722 38.35 26.65 46.6917 36.8694 51.9278L44.8139 43.9833C45.7889 43.0083 47.2333 42.6833 48.4972 43.1167C52.5417 44.4528 56.9111 45.175 61.3889 45.175C63.375 45.175 65 46.8 65 48.7861V61.3889C65 63.375 63.375 65 61.3889 65C27.4806 65 0 37.5194 0 3.61111C0 1.625 1.625 0 3.61111 0H16.25C18.2361 0 19.8611 1.625 19.8611 3.61111C19.8611 8.125 20.5833 12.4583 21.9194 16.5028C22.3167 17.7667 22.0278 19.175 21.0167 20.1861L13.0722 28.1306Z" fill="#E9E9E9" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg_}>
                                <path d="M4.42444 9.52111C6.18444 12.98 9.02 15.8033 12.4789 17.5756L15.1678 14.8867C15.4978 14.5567 15.9867 14.4467 16.4144 14.5933C17.7833 15.0456 19.2622 15.29 20.7778 15.29C21.45 15.29 22 15.84 22 16.5122V20.7778C22 21.45 21.45 22 20.7778 22C9.30111 22 0 12.6989 0 1.22222C0 0.55 0.55 0 1.22222 0H5.5C6.17222 0 6.72222 0.55 6.72222 1.22222C6.72222 2.75 6.96667 4.21667 7.41889 5.58556C7.55333 6.01333 7.45556 6.49 7.11333 6.83222L4.42444 9.52111Z" fill="#E9E9E9" />
                            </svg>
                        </div>
                        <div className={styles.d2}>
                            <h2>+91 9833895232</h2>
                            <h2>+91 9819542065</h2>
                        </div>
                        <div className={styles.d3}>
                            <button className={styles.c_btn}>Call Now</button>
                        </div>
                    </motion.div>
                    <div className={styles.r_box1}>
                        <div className={styles.d1}>
                            <h1>Location</h1>
                            <svg width="54" height="78" viewBox="0 0 54 78" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                                <path d="M53.8334 27.5C53.8334 23.9762 53.1394 20.4869 51.7909 17.2313C50.4424 13.9757 48.4658 11.0176 45.9741 8.52593C43.4824 6.03422 40.5243 4.05769 37.2688 2.70919C34.0132 1.36069 30.5239 0.666626 27.0001 0.666626C23.4763 0.666626 19.987 1.36069 16.7314 2.70919C13.4758 4.05769 10.5178 6.03422 8.02605 8.52593C5.53434 11.0176 3.55781 13.9757 2.20931 17.2313C0.860812 20.4869 0.166748 23.9762 0.166748 27.5C0.166748 32.8168 1.73458 37.7618 4.40258 41.9325H4.37192L27.0001 77.3333L49.6283 41.9325H49.6014C52.3648 37.626 53.8336 32.6167 53.8334 27.5ZM27.0001 39C23.9501 39 21.025 37.7884 18.8684 35.6317C16.7117 33.475 15.5001 30.5499 15.5001 27.5C15.5001 24.45 16.7117 21.5249 18.8684 19.3682C21.025 17.2116 23.9501 16 27.0001 16C30.0501 16 32.9751 17.2116 35.1318 19.3682C37.2885 21.5249 38.5001 24.45 38.5001 27.5C38.5001 30.5499 37.2885 33.475 35.1318 35.6317C32.9751 37.7884 30.0501 39 27.0001 39Z" fill="white" />
                            </svg>
                            <svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg_}>
                                <path d="M19 9.1C19 7.90497 18.7543 6.72164 18.2769 5.61758C17.7994 4.51352 17.0997 3.51034 16.2175 2.66533C15.3354 1.82031 14.2881 1.15001 13.1355 0.692696C11.9829 0.235378 10.7476 0 9.5 0C8.25244 0 7.0171 0.235378 5.86451 0.692696C4.71191 1.15001 3.66464 1.82031 2.78249 2.66533C1.90033 3.51034 1.20056 4.51352 0.723144 5.61758C0.245725 6.72164 -1.85901e-08 7.90497 0 9.1C0 10.9031 0.555071 12.5801 1.49964 13.9945H1.48879L9.5 26L17.5112 13.9945H17.5017C18.48 12.5341 19.0001 10.8353 19 9.1ZM9.5 13C8.42019 13 7.38461 12.5891 6.62106 11.8577C5.85752 11.1263 5.42857 10.1343 5.42857 9.1C5.42857 8.06566 5.85752 7.07368 6.62106 6.34228C7.38461 5.61089 8.42019 5.2 9.5 5.2C10.5798 5.2 11.6154 5.61089 12.3789 6.34228C13.1425 7.07368 13.5714 8.06566 13.5714 9.1C13.5714 10.1343 13.1425 11.1263 12.3789 11.8577C11.6154 12.5891 10.5798 13 9.5 13Z" fill="white" />
                            </svg>
                        </div>
                        <div className={styles.d2}>
                            <h2>S14, Second Floor Pinnacle Business Park Mahakali Caves Road, Andheri - Kurla Rd, M.I.D.C, Andheri East, Mumbai, Maharashtra</h2>
                        </div>
                        <div className={styles.d3}>
                            <button className={styles.c_btn}>Visit Now</button>
                        </div>
                    </div>
                </div>
                <div className={styles.black_wrapper}>
                    <motion.div ref={ref}
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={styles.black_box}>
                        <p>CONTACT FORM</p>
                        <div className={styles.ch_wrap}>
                            <h1>Contact Us</h1>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.</p>
                        </div>

                        <div>
                            <form className={styles.form}>
                                <div>
                                    <p>Name</p>
                                    <input type='text'></input>
                                </div>
                                <div className={styles.f_email}>
                                    <div className={styles.f_email1}>
                                        <p>Email</p>
                                        <input type='text' />
                                    </div>
                                    <div className={styles.f_email1}>
                                        <p>Phone No.</p>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div>
                                    <p>Company Name</p>
                                    <input type='text' />
                                </div>
                                <div>
                                    <p>Choose Event</p>
                                    <div className={styles.r_wrap}>
                                        <div className={styles.r_wrap1}>
                                            <div className={styles.r}>
                                                <input type='radio' id='radio1' name='group1' className={styles.radioInput} />
                                                <label htmlFor='radio1' className={styles.radioLabel}></label>Lorem Ipsum
                                            </div>
                                            <div className={styles.r}>
                                                <input type='radio' id='radio2' name='group1' className={styles.radioInput} />
                                                <label htmlFor='radio2' className={styles.radioLabel}></label>Lorem Ipsum
                                            </div>
                                            <div className={styles.r}>
                                                <input type='radio' id='radio3' name='group1' className={styles.radioInput} />
                                                <label htmlFor='radio3' className={styles.radioLabel}></label>Lorem Ipsum
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styles.r}>
                                                <input type='radio' id='radio4' name='group1' className={styles.radioInput} />
                                                <label htmlFor='radio4' className={styles.radioLabel}></label>Lorem Ipsum
                                            </div>
                                            <div className={styles.r}>
                                                <input type='radio' id='radio5' name='group1' className={styles.radioInput} />
                                                <label htmlFor='radio5' className={styles.radioLabel}></label>Lorem Ipsum
                                            </div>
                                            <div className={styles.r}>
                                                <input type='radio' id='radio6' name='group1' className={styles.radioInput} />
                                                <label htmlFor='radio6' className={styles.radioLabel}></label>Lorem Ipsum
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.text} >
                                    <p>Message</p>
                                    <input type='textarea' className={styles.textarea} style={{ height: '100%' }} />
                                </div>
                                <button className={styles.c_btn1}>Send</button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Csection1