import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const Carosalitem = (customer) => {

    console.log(customer.customer);
    const {customer_image, customer_name, review} = customer.customer;

    return (
        <Carousel.Item interval={5000}>
            <Image className="d-block w-100" src={customer?.customer?.customer_image}></Image>
            <Carousel.Caption>
            <h3>{customer_name}</h3>
            <p>{review}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export default Carosalitem;