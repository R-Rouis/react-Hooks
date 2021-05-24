import React from "react";
import { Card , Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from 'react-rating-stars-component';



const MovieCard = ({movieCard,rate}) => {
  
  return (
    <div style={{ margin: "50px", paddingTop: "20px" , textALign : "center" , opacity : "80%"}}>
      <Card style={{ width: "300px", height:"600px" ,borderStyle:'outset' , textALign : "center" , boxShadow :' 1px 2px 5px 1px rgb(100, 100, 100)' }}>
        <Card.Img variant="top" src={movieCard.posterUrl}  style={{ height: "320px", width:'295px', borderRadius : "5px", boxShadow :'3px 3px 6px 3px rgb(100, 100, 100)' }} />
        <Card.Body style={{ height: "240px" }}>
          <Card.Title>{movieCard.title}</Card.Title>
          <Card.Text style={{ fontSize: "10px", textAlign: "center" }}>
            {movieCard.description}
          </Card.Text>
          <StarRating value={movieCard.rating}/>
          <Card.Text style={{ fontSize: "15px", textAlign: "center" }}>
            {movieCard.year} </Card.Text>
        </Card.Body>
        <Button variant="outline-primary" style={{ margin: "20px"}}> Download </Button>
      </Card>
    </div>
  );
};

export default MovieCard;