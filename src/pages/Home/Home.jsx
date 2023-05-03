import React,{ useEffect, useState, useContext} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';

const Home = () => {

    const [countrys,setCountrys] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/countrys')
            .then(res=> res.json())
            .then(data => setCountrys(data))
            .catch(error => console.error(error))

    })

    return (
        <div className='w-75 mx-auto '>
            <Banner></Banner>
            <Container className='my-5'>
                <Row>
                    <Col lg={3} className=' border-secondary border-1 border-end'>
                        <h3>All the Country</h3>
                        {
                            countrys.map(country => 
                            <p key={country.id}>
                                <Link to={`country/${country.id}`} className=' text-decoration-none text-dark fw-semibold'>{country.country}</Link>
                            </p>)
                        }
                    </Col>
                    <Col lg={9} className=''>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;







