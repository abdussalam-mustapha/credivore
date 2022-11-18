import React, { useState, useEffect } from 'react'
import "./navlinks.css"

// import {GrClose} from "react-icons/gr"
import {GiHamburgerMenu} from "react-icons/gi"

 const Navlinks = () => {

//     const links = [
//         {
//           id: 1,
//           link: "Home",
//         },
//         {
//           id: 2,
//           link: 'About',
//         },
//         {
//           id: 3,
//           link: 'Services'
//         },
//         {
//           id: 3,
//           link: 'Offers'
//         }
//       ]

    const [toggleMenu, setToggleMenu] = useState(true)
    const [screenWidth, setScreenWidth] = useState(window.innerwidth)

   const toggleNav = () => {
         setToggleMenu(!toggleMenu)
    }


    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener('resize', changeWidth)

      return () => {
        window.removeEventListener('resize', changeWidth)
      }
    }, [])

      
  // const removeNavbar = () => {
  //       setActive("links")
  // }

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
        <li className="items">Home</li>
        <li className="items">About</li>
        <li className="items">Services</li>
        <li className="items">Offers</li>
      </ul>
      )}

      <GiHamburgerMenu onClick={toggleNav} className='toggle' />
    </nav>
  )
}

export default Navlinks
