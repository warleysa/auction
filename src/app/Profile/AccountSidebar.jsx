import React from 'react';
import Rating from './../Reviews/Rating';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import defaultPic from './man.png';
import Card from 'react-bootstrap/Card';



const AccountSidebar = (props) => {


  return(
    <Card className="mb-3 shadow-sm">
      <div className="p-2">
        <Card.Img variant="top" src={defaultPic} />
      </div>
      <Card.Header><Card.Title>{props.first_name}'s account</Card.Title></Card.Header>
      <Card.Body className="p-3">

          <div>
            <ul className="list-group">
              <li className="list-group-item text-left"><span className=" mr-2"><strong>Name:</strong></span>{props.first_name} {props.last_name}</li>
              <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Date Joined:</strong></span>{props.date_joined}</li>
              <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Cars Listed:</strong></span>{props.cars_listed}</li>
              <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Cars Sold:</strong></span> {props.cars_sold}</li>
              <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Cars Purchased:</strong></span>{props.cars_purchased}</li>
              <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Rating:</strong></span><Rating value={props.ranking}/></li>
            </ul>
          </div>

      </Card.Body>
    </Card>
  )
}

export default AccountSidebar;
