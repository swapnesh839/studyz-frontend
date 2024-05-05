import React from 'react'
import { Button, Card } from "react-bootstrap";
import Rating from "react-rating"
import { Link,useSearchParams,useParams } from 'react-router-dom';

const CustomCard = ({Ratting,Cost,id}) => {
  return (
    <Card>
        <Card.Img className='p-2' variant="top" src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" />
        <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
                <span className="fs-4 text-danger">Javascript</span>
                <span className='bg-primary-subtle rounded-1 px-1'>live</span>
            </div>
            <div className="d-flex my-3 justify-content-between align-items-center">
                <Rating readonly initialRating={Ratting}/>
                <span>{Cost}/-</span>
            </div>
                <p>people have not enrolled in recently</p>
                <Button as={Link} to={`/coursedetails?type=course&id=${id}`} style={{backgroundColor:"#112244"}} className='w-100'>View Details</Button>
        </Card.Body>
    </Card>
  )
}

export default CustomCard