import React, { useEffect, useState, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, Link, useNavigation } from 'react-router-dom';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import { AuthContext } from '../../providers/AuthProvider';
import Service from '../Service/Service';
import Customer from '../Customer/Customer';
import Spinner from 'react-bootstrap/Spinner';
import './Home.css';

const Home = () => {
  const [countrys, setCountrys] = useState([]);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [outletLoading, setOutletLoading] = useState(true);
  const [serviceLoading, setServiceLoading] = useState(true);

  useEffect(() => {
    fetch('https://assignment-10-server-r4ptorxar4f4t.vercel.app/countrys')
      .then((res) => res.json())
      .then((data) => {
        setCountrys(data);
        setBannerLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const { loading } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <div className="home-body">
      <div>
        {bannerLoading && (
          <div className="text-center my-3">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
      </div>
      <Banner setLoading={setBannerLoading}></Banner>
      <Container className="my-5">
        <Row>
          <Col lg={3} className="border-secondary border-1 border-end">
            <h3>All the Country</h3>
            {countrys.map((country) => (
              <p key={country.id}>
                <Link
                  to={`country/${country.id}`}
                  className="text-decoration-none text-dark fw-semibold"
                >
                  {country.country}
                </Link>
              </p>
            ))}
          </Col>
          <Col lg={9} className="">
            {/* <div>
              {outletLoading && (
                <div className="text-center my-3">
                  <Spinner animation="border" variant="secondary" />
                </div>
              )}
            </div> */}
            <Outlet ></Outlet>
          </Col>
        </Row>
      </Container>
      {/* <div>
        {serviceLoading && (
          <div className="text-center my-3">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
      </div> */}
      <Service ></Service>
      <Customer></Customer>
    </div>
  );
};

export default Home;
