import RoomSlide from '@/components/gallerie/GallerieSlide'
import RestaurantGrid from '@/components/gallerie/GallerieGrid'
import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <div>
        <Navbar/>
        <RoomSlide/>
        <RestaurantGrid/>
        <Footer/>
    </div>
  )
}
