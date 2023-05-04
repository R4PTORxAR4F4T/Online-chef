import React,{ useEffect, useState, useContext} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import { AuthContext } from '../../providers/AuthProvider';
import Service from '../Service/Service';
import Customer from '../Customer/Customer';

const Home = () => {

    const [countrys,setCountrys] = useState([]);

    useEffect(()=>{
        fetch('https://assignment-10-server-r4ptorxar4f4t.vercel.app/countrys')
            .then(res=> res.json())
            .then(data => setCountrys(data))
            .catch(error => console.error(error))

    })

    const {loading} = useContext(AuthContext);
    
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
            <Service></Service>
            <Customer></Customer>
        </div>
    );
};

export default Home;







