import React from 'react';
import { Image } from 'react-bootstrap';
import {useParams, useLoaderData} from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Recipy from '../Recipy/Recipy';
import './Details.css';


const Details = () => {
    
    const {id} = useParams();
    const chefDetail = useLoaderData();
    const{chef_image, description, experience, name, rating, recipe_number, title, recipes} = chefDetail
    
    return (
        <div className='w-75 mx-auto p-4 border d-flex flex-column gap-5 '>
            <div className='d-flex gap-4 p-5 border-bottom border-secondary'>
                <Image className='w-50 rounded-3' src={chef_image}></Image>
                <div>
                    <p className=' fw-bolder fs-1'>{name}</p>
                    <p className=' fw-bolder fs-6'>{title}</p>
                    <p className=' fw-bolder fs-6'>{experience}</p>
                    <p className=' fw-semibold '>{description}</p>
                    <div className=' d-flex gap-5'>
                        <div>
                            <span className=' fw-semibold'>Rating : </span>
                            <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                        </div>
                        <div>
                            <span className=' fw-semibold'>Recipy : {recipe_number}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center recipe-cards'>
                {
                recipes.map((recipe) => {

                    return <Recipy 
                        key={recipe.recipe_id}
                        recipe={recipe}
                    ></Recipy>
                    
                })
                }
            </div>
        </div>
    );
};

export default Details;