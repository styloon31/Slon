import Asection1 from '@/components/about us/section1/Asection1'
import Asection2 from '@/components/about us/section2/Asection2'
import Asection3 from '@/components/about us/section3/Asection3'
import Asection3m from '@/components/about us/section3m/Asection3m'
import Asection4 from '@/components/about us/section4/Asection4'
import Asection5 from '@/components/about us/section5/Asection5'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const aboutus = () => {
  return (
    <>
    <Navbar />
    <Asection1 />
    <Asection2 />
    <Asection3 />
    <Asection3m />
    <Asection4 />
    <Asection5 />
    <Footer />
    </>
  )
}

export default aboutus