import Div3 from '@/components/Div3'
import Footer from '@/components/Footer'
import Featured from '@/components/featured/Featured'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <Div3 />
      <Footer />
    </div>
  )
}
