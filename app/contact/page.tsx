import ContactClair from '@/components/Contact'
import Slide from '@/components/contact/ContactSlide'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Slide/>
        <ContactClair/>
        <Footer/>
    </div>
  )
}
