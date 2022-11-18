import React from 'react'
import "./header.css"
import Navbar from './navbar/Navbar'
import Hero from "./hero/Hero"

const Header = () => {
  return (
    <section className='header'>
      <Navbar />
      <Hero />
    </section>
  )
}

export default Header
