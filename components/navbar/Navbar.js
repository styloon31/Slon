import React, { useEffect, useState } from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    })
  }, []);
  return (
    <nav className={`${styles.navContainer} ${sticky ? styles.dark_nav : ''} container`}>
      <div>
        <Link href="/" className='link'><img src={`${sticky ? "./images/logo1.png" : "./images/logo2.png"}`} alt='' /></Link>
      </div>
      <div className={`${styles.navLinksContainer}`}>
        <ul className={`${styles.navLinks}`}>
          <li ><Link href="/" className='link'>Home</Link></li>
          <li ><Link href="/aboutus" className='link'>About Us</Link></li>
          <li ><Link href="/services" className='link'>Services</Link></li>
          <li>Blogs</li>
        </ul>
        <button className={`${styles.contact_btn} ${sticky ? styles.dark_btn : ''}`}><Link href="/contact" className='link'>Contact Us</Link></button>
      </div>
    </nav>
  )
}

export default Navbar