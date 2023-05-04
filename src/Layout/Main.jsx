import {React,useContext} from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Home from '../pages/Home/Home';
import Banner from '../pages/Shared/Banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider';



const Main = () => {
    
    return (
        <div>
            <Header></Header>
                <Outlet></Outlet>
            <Footer></Footer> 
        </div>
    );
};

export default Main;