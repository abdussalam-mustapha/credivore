import React,{ useState , useEffect} from 'react'
import Faq from "react-faq-component"

import "./faqs.css"

const data = {
  title: "Q&A",
  rows: [
    {
      title: "lorem ipsum dolomet",
      content: "lorem ipsum dolomet reo hola condora maniola jim"
    },
    {
      title: "lorem ipsum dolomet",
      content: "lorem ipsum dolomet reo hola condora maniola jim"
    },
    {
      title: "lorem ipsum dolomet",
      content: "lorem ipsum dolomet reo hola condora maniola jim"
    },
  ]
};

  const styles = {
    bgColor: 'rgb(230, 240, 243)',
    arrowColor: "#fff",
    rowContentColor: "grey"
  };
  const config = {
    animate: true,
    tabFocus: true
  }


const Faqs = () => {
  return (
    <div className='faq-section center'>
      <p className="text-main">FAQS</p>
      <h3 className="text-header">Frequently Asked Questions</h3>
      <div className="faqDiv">
        <Faq data={data} style={styles} config={config} />
      </div>
    </div>
  )
}

export default Faqs
