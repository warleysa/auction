import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import {NavLink} from 'react-router-dom';


const UserCarsList = (props) => {

  const CheckForCars = () => {
    if(props.cars.length < 1){
      return (
          <div className="card mb-3">
            <div className="card-header">
                <div> {props.profile.FirstName} hasn't listed any cars yet! </div>
                <div >
                    <NavLink to="/users" className="btn btn-success btn-block my-3 ">
                        <i className="fas fa-users mr-2"></i>Back to users
                    </NavLink>
                </div>
            </div>
          </div>
        )
    }
    return null
  }

  const CarList = () => {
      if(props.profile){
          return(
            <>
                <h4>{props.profile.FirstName}'s Cars <span className="text-muted">({props.cars.length})</span></h4>
                <CheckForCars/>

            { 
                props.cars.map( (car, i) =>
                    <div className="card text-center my-3">
                        <div className="card-header">
                            <h4>  {car.year} {car.make} {car.model} </h4>
                        </div>
                        <div className="card-body">
                            <Row>
                                <Col>
                                    <img src={car.image} alt="not available" width='100%' />
                                </Col>
                                <Col className="text-left">
                                    <h5 className="card-title">Car details</h5>
                                    <p className="card-text">{car.description}</p>
                                </Col>
                            </Row>


                        </div>
                        <div className="card-footer text-left">
                        <dl class="row">
                            <dt class="col-sm-5">Time/Location Information </dt>
                            <dd class="col-sm-7 text-muted">
                                            <dl class="row">
                                                <dt class="col-sm-3 ml-1">Start date: </dt>
                                                <dd class="col-sm-8">{car.start_date_readable}</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-3 ml-1">End date: </dt>
                                                <dd class="col-sm-8">{car.end_date_readable}</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-3 ml-1">Time Left: </dt>
                                                <dd class="col-sm-8"><em>{moment(car.end_date).fromNow(true)}</em></dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-4">Zip Code:  </dt>
                                                <dd>
                                                    <InputGroup>
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-location-arrow"></i></InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <Form.Control type="text"
                                                                    name="zip"
                                                                    value={car.zip}
                                                                    readOnly={true}/>
                                                    </InputGroup>
                                                </dd>
                                            </dl>
                                    </dd>
                                    </dl>
                                    <dl class="row">
                            <dt class="col-sm-3">Pricing and Bids </dt>
                            <dd class="col-sm-9">
                                            <dl class="row">
                                                <dt class="col-sm-4">Minimum Asking price: </dt>
                                                <dd class="col-sm-8">${car.auction_reserve_price}</dd>
                                            </dl>
                                    </dd>
                                    </dl>
                            <Col>
                                <NavLink to="/" className="btn btn-primary float-right">View Auction</NavLink>
                            </Col>
                        </div>
                    </div>
                )}
            </>
          )
      }else{
          return(
              <div>No cars to show</div>
          )
      }
  }

  return(
    <CarList/>
  )

}
export default UserCarsList;