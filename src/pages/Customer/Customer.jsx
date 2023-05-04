import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import Carosalitem from './Carosalitem';

const Customer = () => {

    const [customers,setCustomers] = useState([]);


    useEffect(()=>{
        fetch('https://assignment-10-server-r4ptorxar4f4t.vercel.app/customers')
            .then(res=> res.json())
            .then(data => setCustomers(data))
            .catch(error => console.error(error))

    },[])

    return (
        <div className='p-4 my-4'>
            <p className=' fs-2 fw-bold'>Customer Review</p>
            <Carousel>
            {
                customers.map( customer => 
                    <Carousel.Item key={customer.customer_id} interval={5000}>
                    <img
                    className="d-block w-100"
                    src="/background.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <img
                    className=" w-25 rounded-circle"
                    src={customer.customer_image}
                    alt="First slide"
                    />
                    <h3 className='text-dark fs-3 fw-bold'>{customer.customer_name}</h3>
                    <p className='text-dark fs-6 fw-bolder'>{customer.review}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                )
            }
            </Carousel>
        </div>
    );
};

export default Customer;