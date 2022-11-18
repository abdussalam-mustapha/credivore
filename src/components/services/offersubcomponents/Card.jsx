import React from 'react'
import "./card.css"

import {MdTravelExplore} from  "react-icons/md"
import {GiTakeMyMoney} from  "react-icons/gi"
import {BsStickiesFill} from  "react-icons/bs"
import {GrAtm} from  "react-icons/gr"
import {MdSavings} from  "react-icons/md"
import {BsFillPersonCheckFill} from  "react-icons/bs"

const Card = () => {

  
   const contents = [
    {
        id: 0,
        Icon: GiTakeMyMoney,
        color: "blue",
        backgroundColor: "#c8e2f2",
        title: "PERSONAL LOAN",
        note: "Filter and choose from our top offers below and see if you qualify. if not we would match you with a more appropriate offer."
    },
    {
        id: 1,
        Icon: BsStickiesFill,
        backgroundColor: "#ffe6ee",
        color:"pink",
        title: "LIFE INSURANCE",
        note: "Get a life insurance policy fit to your needsfrom our top providers."
    },
    {
        id: 2,
        Icon: GrAtm,
        color: "purple",
        backgroundColor: "#ebecf0",
        title: "CREDIT CARD",
        note: "Compare and choose offers from top providers to find the credit card that suit your needs"
    },
    {
        id: 3,
        Icon: MdSavings,
        color: "pink",
        backgroundColor: "#ffe6ee",
        title: "SAVINGS ACCOUNT",
        note: "Choose from the top high-yield savings account offers from the top institutions."
    },
    {
        id: 4,
        Icon: BsFillPersonCheckFill,
        color: "purple",
        backgroundColor: "#f5e1fd",
        title: "STUDENT LOANS",
        note: "Find a professional loan to refinance your student loan debt"
    },
    {
        id: 5,
        Icon: MdTravelExplore,
        color: "blue",
        backgroundColor: "#c8e2f2",
        title: "TRAVEL INSURANCE",
        note: "Filter and choose from our best travel offers"
    }
   ]


  return (
    <section className='cardSection'>
      
         {
            contents.map((content, index) => {
            const {title, note, Icon, } = content

                return (
        <div className="card">
            <div className="card-icon" style={{background: contents[index].backgroundColor}} key={index}>
                <Icon className="icon" style={{color: contents[index].color}} key={index}/>
            </div>
                <p className="para-card">{title}</p>
                <p className="card-text">{note}</p>
         </div>
                )
            })
         }
    </section>
  )
}

export default Card
