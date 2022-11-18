import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <section className="footer center">
            <div className="newsletter">
                <h3 className="text-header">Get In Touch With Us</h3>
                <p className="text-two">
                    This is a big one and i consider it one of the most important things for designer
                </p>
                <div className="newsletter-section">
                    <input type="text" />
                    <button className="newsletter-btn btn">Get Started</button>
                </div>
            </div>
            <hr />
            <div className="footer-nav">
                <div className="cols compare">
                    <h3>compareoffers</h3>
                    <p>
                    For artistes and poets,
                    cheating space lamp,
                    for we last but arrange height flow future initial place someone. 
                    </p>
                </div>
                <div className="cols">
                    <span>Quick Links</span>
                    <ul>
                        <li><a href="goal.com">Home</a></li>
                        <li><a href="goal.com">Portfolio</a></li>
                        <li><a href="goal.com">Services</a></li>
                    </ul>
                </div>
                <div className="cols">
                    <span>Company</span>
                    <ul>
                        <li><a href="goal.com">About</a></li>
                        <li><a href="goal.com">Contact</a></li>
                        <li><a href="goal.com">Newsletter</a></li>
                    </ul>
                </div>
                <div className="cols">
                    <span>Informations</span>
                    <ul>
                        <li><a href="goal.com">Privacy</a></li>
                        <li><a href="goal.com">Terms & Condition</a></li>
                        <li><a href="goal.com">FAQs</a></li>
                    </ul>
                </div>
            </div>
            <p className="center">&copy; MustySama Inc 2022. Lagos Nigeria</p>
        </section>
    )
}

export default Footer