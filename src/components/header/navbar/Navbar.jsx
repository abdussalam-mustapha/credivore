import React from 'react'
import "./navbar.css"

import {MdCreditScore} from "react-icons/md"
import Navlinks from './subcomponents/Navlinks'



const Navbar = () => {
  return (
    <section className='navbar'>
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
