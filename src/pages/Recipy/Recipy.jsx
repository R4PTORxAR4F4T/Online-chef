import { Button, Card } from 'react-bootstrap';
import { FaBookmark, FaRegStar, FaStar } from "react-icons/fa";
import { useState } from 'react';
import Rating from 'react-rating';


const Recipe = ({ recipe }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSaveButtonClick = () => {
    setIsDisabled(true);
    // Your save logic goes here...
  };

  const { image, ingredients, instructions, rating, recipe_name } = recipe;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='h-25' variant="top" src={image} />
      <Card.Body className='text-start'>
        <Card.Title>
          {recipe_name} 
        </Card.Title>
        <Card.Text>
          <span className=' fw-semibold text-primary'>Ingredients : </span>
          {ingredients}
        </Card.Text>
        <Card.Text>
          <span className=' fw-semibold text-primary'>Instructions : </span>
          {instructions}
        </Card.Text>
        <div className='d-flex justify-content-between'>
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
                <Button
                className='save_btn ms-1'
                variant="outline-dark"
                disabled={isDisabled}
                onClick={handleSaveButtonClick}
                >
                <FaBookmark />
                </Button>
            </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
