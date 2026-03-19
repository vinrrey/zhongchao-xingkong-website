'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Advantages from '@/components/Advantages'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <Header scrolled={scrolled} />
      <Hero />
      <Services />
      <About />
      <Advantages />
      <Contact />
      <Footer />
    </main>
  )
}
