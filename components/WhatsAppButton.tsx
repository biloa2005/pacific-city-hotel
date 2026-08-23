import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber="237696127469"
  const message="Bonjour je souhaite avoir plus d informations.";
  const whatsappurl=`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
    <a
    href={whatsappurl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Nous contacter par whatsapp"
    className="fixed bottom-30 right-6 z-50 flex h-14 w-14 items-center justify-center 
    rounded-full bg-green-500 text-white shadow-lg transition-all duracion-300
    hover:scale-110 hover:bg-green-600"
    >
<FaWhatsapp size={30}/>
    </a>
  )
}
