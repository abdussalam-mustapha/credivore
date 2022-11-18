import React, { useEffect } from 'react'
import "./navbar.css"
import AOS from "aos"
import "aos/dist/aos.css"

import {MdCreditScore} from "react-icons/md"
import Navlinks from './subcomponents/Navlinks'



const Navbar = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <section className='navbar' data-aos="fade-up" data-aos-duration="1500">
      <div className="logoDiv">
        <MdCreditScore className='icon'/>
        <h1 className='logoText'>Credit</h1>
      </div>
      <div className="navSection">
        <Navlinks />
      </div>
    </section>
  )
}

export default Navbar
