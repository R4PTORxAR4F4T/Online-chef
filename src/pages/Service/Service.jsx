import React from 'react';
import { Image } from 'react-bootstrap';
import './Service.css';

const Service = () => {
    return (
        <div className='p-4 my-4 '>
            <div>
              <p className=" fs-2 fw-bold">Thingn we provide</p>
            </div>
            <div className="provide_card_body">
              <div className="border p-4 rounded-2 border-secondary provide_card">
                <Image className='provide-img' src="/public/foodDelivery.png" alt=""></Image>
                <div className=" fs-6 fw-bolder">Awards Winnings</div>
              </div>
              <div className="border p-4 rounded-2 border-secondary provide_card">
                <Image className='provide-img' src="/public/takeOut.png" alt=""></Image>
                <div className=" fs-6 fw-bolder">Project Finished</div>
              </div>
              <div className="border p-4 rounded-2 border-secondary provide_card">
                <Image className='provide-img' src="/public/dineIn.png" alt=""></Image>
                <div className=" fs-6 fw-bolder">Clients Worked</div>
              </div>
              <div className="border p-4 rounded-2 border-secondary provide_card">
                <Image className='provide-img' src="/public/catering.png" alt=""></Image>
                <div className=" fs-6 fw-bolder">Email Send</div>
              </div>
            </div>
        </div>
    );
};

export default Service;