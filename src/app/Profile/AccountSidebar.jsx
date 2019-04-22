import React from 'react';
import Rating from './../Reviews/Rating';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import defaultPic from './man.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const AccountSidebar = (props) => {


  return(
    <Card className="mb-auto shadow-sm">
      <div className="p-2 position-relative">
        <Card.Img variant="top" src={defaultPic} />
				{/*
        <Button variant= "outline-primary"
                className="btn-sm m-2"
                style={{position: 'absolute',
                        right:0,
                        bottom:0}}>
            edit<i className="far fa-edit float-right m-1"></i>
        </Button>
				*/}

      </div>
      <Card.Header className="text-center"><Card.Title>{`${props.first_name}'s account`}</Card.Title></Card.Header>
      <Card.Body className="p-3">

          <div>
            <ul className="list-group mb-3">
              <li className="list-group-item text-left"><span className=" mr-2"><strong>Name:</strong></span>{props.first_name} {props.last_name}</li>
              <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Joined:</strong></span>{props.date_joined}</li>
              <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Listings:</strong></span>{props.cars_listed}</li>
              <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Sales:</strong></span> {props.cars_sold}</li>
              <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Purchases:</strong></span>{props.cars_purchased}</li>
              <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Rating:</strong></span><Rating value={props.ranking}/></li>
            </ul>
          </div>

          <button type="button" className="btn btn-primary btn-lg btn-block">View Cars</button>
          <button type="button"
                  className="btn btn-secondary btn-lg btn-block"
                  data-toggle="collapse"
                  data-target={`#${props.keyId}`}
                  aria-expanded="false"
                  aria-controls={props.keyId}>Seller Feedback</button>

      </Card.Body>
      <div className="collapse p-3" id={`${props.keyId}`}>
          <div className="card card-body">
              <div className="m-1">
                <div className="float-right">
                  <Rating value={5}/>
                </div>
                <h6><strong>John-</strong></h6>
                <hr/>
                  <p>"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."</p>
              </div>

              <div className="m-1">
                <div className="float-right">
                  <Rating value={3}/>
                </div>
                <h6><strong>Sarah- </strong></h6>
                <hr/>
                <p>"Eiusmod high life accusamus terry richards onnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer"</p>
              </div>


            <button className="btn btn-block btn-outline-danger"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${props.keyId}`}
                    aria-controls={props.keyId}>collapse feedback</button>
          </div>
      </div>
    </Card>
  )
}

export default AccountSidebar;
