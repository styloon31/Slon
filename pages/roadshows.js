import Navbar from '@/components/navbar/Navbar'
import Rsection1 from '@/components/road_shows/section1/Rsection1'
import Rsection2 from '@/components/road_shows/section2/Rsection2'
import Rsection3 from '@/components/road_shows/section3/Rsection3'
import Rsection4 from '@/components/road_shows/section4/Rsection4'
import Rsection5 from '@/components/road_shows/section5/Rsection5'
import React from 'react'

const roadshows = () => {
  return (
    <>
        <Navbar />
        <Rsection1 />
        <Rsection2 />
        <Rsection3 />
        <Rsection4 />
        <Rsection5 />
    </>
  )
}

export default roadshows