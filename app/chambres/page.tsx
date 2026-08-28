"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AboutRooms from '@/components/Room/AboutRooms';
import RoomAmenities from '@/components/Room/RoomAmenities';
import RoomSlide from '@/components/Room/RoomSlide';
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <RoomSlide/>
      <RoomAmenities/>
      <AboutRooms/>
      <Footer/>
    </div>
  )
}
