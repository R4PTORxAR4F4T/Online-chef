import React from 'react';
import { Card, Image, NavLink } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const chefCard = (chef) => {

    const {chef_id, name, chef_image, experience, recipe_number,title, description, rating} = chef.chef;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={chef_image} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{title}</p>
                </div>
                <div>
                    {experience}
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Img variant="top" src={chef_image} />
                <Card.Text>
                    <p>{description}</p>
                    <p>i have {recipe_number} unique recipy </p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center'>
                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className='ms-2'> {rating?.number}</span>
                </div>
                <div>
                    <Link to={`/chefDetails/${chef_id}`} className=' text-decoration-none text-dark fw-semibold border border-dark p-1 rounded-1'>View Recipes</Link>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default chefCard;