
import React from "react";
import './Footer.css';
// import { assets } from "../../assets/assets";
import {assets} from '../../assets/assets';

const Footer = ()=>{
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                <img className="tomato" src={assets.logo} alt="" />
                <p>Our mission is to satisfy your cravings and elevate your dinning experience. one delicious meal at a time.</p>
                <div className="social-media-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <li>+93-0050-50</li>
                    <li>Rj@gmail.com</li>
                </div>
            </div>
            <hr />
            <p className="footer-copy-right">Copyright 2024 &copy; All Right Reserved </p>
        </div>
    )
}
export default Footer;