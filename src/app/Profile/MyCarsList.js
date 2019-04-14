import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const MyCarsList = (props) => {

  var carCount = 0;
  if(props.cars.length){
    carCount = props.cars.length;
  }

  const CheckForCars = () => {
    if(carCount < 1){
      return (
          <div className="card mb-3">
            <div className="card-header">You haven't listed any cars yet! Add your first car now!</div>
          </div>
        )
    }
    return null
  }

  return(
    <>
      <h4>My Cars <span className="text-muted">({carCount})</span></h4>
      <CheckForCars/>

      {props.cars.map( (car, i) =>
        <div className="card text-center my-3">
          <div className="card-header">
            <h4>  {car.year} {car.make} {car.model} </h4>
          </div>
          <div className="card-body">
            <Row>
              <Col>
                  <img src={car.imageURL} width='100%' />
              </Col>
              <Col className="text-left">
                  <h5 className="card-title">Car details</h5>
                  <p className="card-text">{car.description}</p>
              </Col>
            </Row>


          </div>
          <div className="card-footer text-muted text-left">
          <Row>
            <Col>
              <Row className="ml-2">
                <p> <strong> Auction end date: </strong>{car.auction_end_date} </p>
                <p> <strong> Auction reserve price: </strong>{car.auction_reserve_price} </p>
              </Row>
              <Row>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-location-arrow"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text"
                                  name="zip"
                                  value={car.zip}
                                  readOnly="true"/>
                  </InputGroup>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form>
                <Form.Group as={Col} controlId="carFormAuctionReservePrice">
                  <Form.Label ><strong>Current bid:</strong></Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-dollar-sign"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="no bids yet!"
                                  type="text"
                                  name="current_bid"
                                  value="2950"
                                  readOnly="true"/>
                  </InputGroup>
                </Form.Group>
              </Form>
              <a href="#" className="btn btn-primary float-right">View</a>
            </Col>
          </Row>
          </div>
        </div>
      )}

    </>
  )
}

export default MyCarsList;
