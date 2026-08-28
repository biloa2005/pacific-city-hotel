"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PacificDescription from '@/components/Restautant/RestaurantDescription';
import RestaurantGrid from '@/components/Restautant/RestaurantGrid';
import RestaurantHero from '@/components/Restautant/RestaurantHero';
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <RestaurantHero/>
      <PacificDescription/>
      <RestaurantGrid/>
      <Footer/>
      
    </div>
  )
}
