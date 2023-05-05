import React,{ useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;