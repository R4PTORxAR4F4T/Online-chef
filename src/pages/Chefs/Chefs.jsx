import React from 'react';
import {useParams, useLoaderData} from 'react-router-dom';
import Chef from '../Chef/Chef';
import './Chefs.css';

const Chefs = () => {

    const {id} = useParams();
    const countryChefs = useLoaderData();
    
    return (
        <div>
            <h3>chef from all over the world  : {countryChefs.length}</h3>
            <div className='chef-cards'>
            {
                // <Chef></Chef>
                countryChefs.map( chef => <Chef
                key={chef.chef_id}
                chef={chef}
                ></Chef>)
            }
            </div>
        </div>
    );
};

export default Chefs;