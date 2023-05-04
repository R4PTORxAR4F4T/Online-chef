import React from 'react';
import { Image } from 'react-bootstrap';
import { FaPhoneAlt, FaLocationArrow, FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './Footer.css';

const Footer = () => {
    return (
        <div className='w-75 mx-auto bg-black text-light mb-5 '>
            <div className='d-flex p-5 justify-content-between align-items-center'>
                <div>
                    <Image className='footer-logo' src='/headerLogo.png'></Image>
                    <p className=' fs-3 fw-bolder'>Chef</p>
                </div>
                <div>
                    <p><FaFacebookF></FaFacebookF> Facebook</p>
                    <p><FaTwitter></FaTwitter> Twitter</p>
                    <p><FaInstagram></FaInstagram> Instagram</p>
                </div>
                <div>
                    <p><FaPhoneAlt></FaPhoneAlt>+880 49846279</p> 
                    <p><SiGmail></SiGmail> example@gmail.com</p>
                    <p><FaLocationArrow></FaLocationArrow> 123 Main St, Anytown USA</p>
                </div>
            </div>
            <div className=' text-center border-top p-3'>copyright</div>
        </div>
    );
};

export default Footer;