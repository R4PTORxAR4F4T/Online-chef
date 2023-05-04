import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './Banner.css';
import Marquee from "react-fast-marquee";
import { CiDiscount1 } from "react-icons/ci";

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bhartenduassociates.com/wp-content/uploads/2023/01/1-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
            <div className='banner-text'>
                <p className='text-center fs-2 text-warning-emphasis'>Welcome to </p>
                <p className='text-center fs-2 fw-bolder text-warning-emphasis'>
                <Image className='banner-logo' src="/headerLogo.png" fluid />
                Chefs Kitchen
                </p>

                <p className='text-center fs-1 fw-bolder'>Fine Dining</p>
                <p className='text-center fs-2 fw-bolder text-warning-emphasis'>Explore Global Cuisine at Our Restaurant</p>
                <p className='text-center'>Satisfy Your Taste Buds with a Wide Range of International Dishes</p>
            </div>

            <div className='bottom-0 p-5 text-white d-flex gap-2'>
                    <p className=' fs-1'><CiDiscount1 /></p>
                    <Marquee speed={30} pauseOnHover={true}>Enjoy 10% Off Your Food Orders with Premium Credit Card! Satisfy your cravings and save money with our premium credit card offer! Don't miss out on this delicious deal.</Marquee>
                </div>

        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

    );
};

export default Banner;