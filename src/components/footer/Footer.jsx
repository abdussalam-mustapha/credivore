import React, { useEffect } from 'react'
import "./footer.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Footer = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh()
    }, [])


    return (
        <section className="footer center">
            <div className="newsletter">
                <h3 className="text-header" data-aos="fade-up" data-aos-duration="1000">Get In Touch With Us</h3>
                <p className="text-two" data-aos="fade-up" data-aos-duration="1500">
                    This is a big one and i consider it one of the most important things for designer
                </p>
                <div className="newsletter-section">
                    <input type="text" data-aos="fade-up" data-aos-duration="1800"/>
                    <button className="newsletter-btn btn" data-aos="fade-up" data-aos-duration="1800">Get Started</button>
                </div>
            </div>
            <hr data-aos="fade-up" data-aos-duration="2000"/>
            <div className="footer-nav">
                <div className="cols compare" data-aos="fade-up" data-aos-duration="1500">
                    <h3>compareoffers</h3>
                    <p>
                    For artistes and poets,
                    cheating space lamp,
                    for we last but arrange height flow future initial place someone. 
                    </p>
                </div>
                <div className="cols" data-aos="fade-up" data-aos-duration="1500">
                    <span>Quick Links</span>
                    <ul>
                        <li><a href="goal.com">Home</a></li>
                        <li><a href="goal.com">Portfolio</a></li>
                        <li><a href="goal.com">Services</a></li>
                    </ul>
                </div>
                <div className="cols" data-aos="fade-up" data-aos-duration="1500">
                    <span>Company</span>
                    <ul>
                        <li><a href="goal.com">About</a></li>
                        <li><a href="goal.com">Contact</a></li>
                        <li><a href="goal.com">Newsletter</a></li>
                    </ul>
                </div>
                <div className="cols" data-aos="fade-up" data-aos-duration="1500">
                    <span>Informations</span>
                    <ul>
                        <li><a href="goal.com">Privacy</a></li>
                        <li><a href="goal.com">Terms & Condition</a></li>
                        <li><a href="goal.com">FAQs</a></li>
                    </ul>
                </div>
            </div>
            <p className="center" data-aos="fade-up" data-aos-duration="1500">&copy; MustySama Inc 2022. Lagos Nigeria</p>
        </section>
    )
}

export default Footer