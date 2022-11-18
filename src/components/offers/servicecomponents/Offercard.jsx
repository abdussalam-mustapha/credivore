import React, { useEffect } from 'react'
import "./offercard.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Offercard = () => {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })

  const offers = [
    {
        id: 1,
        backgroundColor: "rgb(247, 19, 57)",
        title: "Answer a few questions",
        note: "Just fill out our simple form and we'll check offers from all the top providers"
    },
    {
        id: 2,
        backgroundColor: "rgb(2, 2, 212)",
        title: "Get matched with top providers",
        note: "Based on the info you provide and your creditworthiness, we match you with the right offers to meet your needs"
    },
    {
        id: 3,
        backgroundColor: "#b19cd9",
        title: "Close the deal",
        note: "Choose the offer with the best term, and if approved get your funds or new accounts right away"
    }
  ]

  useEffect(() => {
    AOS.init();
    AOS.refresh()
   }, [])

  return (
    <div className='card-container'>
     {
         offers.map((offer, index) => {
            const {id, title, note} = offer
    
            return (
                <div className="offer-card" data-aos="fade-up" data-aos-duration="2000">
            <div className="icon" style={{background: offers[index].backgroundColor}} key={index}>0{id}</div>
            <p className="title">{title}</p>
            <p className="note">{note}</p>
          </div>
            )
          })
     }
    </div>
  )
}

export default Offercard
