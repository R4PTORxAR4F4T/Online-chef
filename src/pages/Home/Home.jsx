import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './Home.css';
import Marquee from "react-fast-marquee";
import { CiDiscount1 } from "react-icons/ci";

const Home = () => {
    return (
        <div className='w-75 mx-auto position-relative'>
            <Image
                className=" position-relative"
                src="https://www.bhartenduassociates.com/wp-content/uploads/2023/01/1-1.jpg"
                fluid
            />
            
            <div className='position-absolute top-0 start-50 translate-middle-x banner-text'>
                <p className='text-center fs-1 fw-bolder'>Fine Dining</p>
                <p className='text-center fs-2 fw-bolder text-warning-emphasis'>Explore Global Cuisine at Our Restaurant</p>
                <p className='text-center'>Satisfy Your Taste Buds with a Wide Range of International Dishes</p>
            </div>

            <div className='position-absolute bottom-0 p-5 mb-5 text-white d-flex gap-2'>
            <p className=' fs-1'><CiDiscount1 /></p>
            <Marquee speed={30} pauseOnHover={true}>Enjoy 10% Off Your Food Orders with Premium Credit Card! Satisfy your cravings and save money with our premium credit card offer! Don't miss out on this delicious deal.</Marquee>
            </div>
            
        </div>
    );
};

export default Home;







