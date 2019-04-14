import React from 'react';
import Rating from './../Reviews/Rating';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import defaultPic from './man.png';
import Card from 'react-bootstrap/Card';



const AccountSidebar = (props) => {


  return(
    <Card className="pt-3">
      <Card.Img variant="top" src={defaultPic}/>
      <Card.Body>
        <Card.Title>My Account</Card.Title>
          <div>
            <ul className="list-group">
              <li className="list-group-item text-left"><span className="pull-left"><strong>Name:</strong></span>{props.first_name} {props.last_name}</li>
              <li className="list-group-item text-left"><span className="pull-left"><strong>Date Joined:</strong></span>{props.date_joined}</li>
              <li className="list-group-item text-left"><span className="pull-left"><strong>Cars Listed:</strong></span>{props.cars_listed}</li>
              <li className="list-group-item text-left"><span className="pull-left"><strong>Cars Sold:</strong></span> {props.cars_sold}</li>
              <li className="list-group-item text-left"><span className="pull-left"><strong>Cars Purchased:</strong></span>{props.cars_purchased}</li>
              <li className="list-group-item text-left"><span className="pull-left"><strong>User Ranking:</strong></span><Rating value={props.ranking}/></li>
            </ul>
          </div>

      </Card.Body>
    </Card>
  )
}

export default AccountSidebar;
