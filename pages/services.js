import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Service2 from '@/components/services/section2services/Service2'
import Service3 from '@/components/services/section3services/Service3'
import Service4 from '@/components/services/section4sevices/Service4'
import Service from '@/components/services/sectionservices/Service'
import React from 'react'

const services = () => {
  return (
    <>
    <Navbar />
    <Service />
    <Service2 />
    <Service3 />
    {/* <Service4 /> */}
    <Footer />
    </>
  )
}

export default services