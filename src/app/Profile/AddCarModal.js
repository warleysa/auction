import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AddImages	from './AddImages';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Car from './../../models/car';



class AddCarModal extends Component {

	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			make:	"",
			model: "",
			year:	"",
			mileage:	"",
			zip:	"",
			description:	"",
			auction_end_date: "",
			auction_reserve_price: "",
			images: []
		};
	}

	handleClose() {
    this.setState({ modalShowState: false });
  }

  handleShow() {
    this.setState({ modalShowState: true });
  }

	handleInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  };

	onSubmit(){
		this.props.onCarAdded(new Car(this.state.make,
																	this.state.model,
																	this.state.year,
																	this.state.mileage,
																	this.state.zip,
																	this.state.description,
																	this.state.auction_end_date,
																	this.state.auction_reserve_price));
		this.setState(
			{
				make:	"",
				model: "",
				year:	"",
				mileage:	"",
				zip:	"",
				description:	"",
				auction_end_date: "",
				auction_reserve_price: "",
				images: [],
				modalShowState: false
			}
		)
	}

  render() {


    return (
			<>
			<Button variant="success" size="lg" onClick={this.handleShow}>
				Add Car<i className="fas fa-car ml-2"></i>
			</Button>

			<Modal
					size="lg"
					show={this.state.modalShowState}
					onHide={this.handleClose}
					aria-labelledby="add-car-modal"
				>
					<Modal.Header closeButton>
						<Modal.Title id="add-car-title"> Add a Car </Modal.Title>

					</Modal.Header>

					<Modal.Body>
						<Form>
							<Form.Row>
								<Form.Group as={Col} controlId="carFormGridMake">
									<Form.Label>Make</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-landmark"></i></InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control placeholder="Audi"
										 							type="text"
																	name="make"
																	value={this.state.make}
																	onChange={this.handleInputChange}/>
									</InputGroup>
								</Form.Group>

								<Form.Group as={Col} controlId="carFormModel">
									<Form.Label>Model</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-car-side"></i></InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control placeholder="A5"
																	type="text"
																	name="model"
																	value={this.state.model}
																	onChange={this.handleInputChange}/>
									</InputGroup>
								</Form.Group>
							</Form.Row>

							<Form.Row>
								<Form.Group as={Col} controlId="carFormYear">
									<Form.Label>Year</Form.Label>
									<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-history"></i></InputGroup.Text>
									</InputGroup.Prepend>
										<Form.Control placeholder="2006"
																	type="text"
																	name="year"
																	value={this.state.year}
																	onChange={this.handleInputChange} />
									</InputGroup>
								</Form.Group>

								<Form.Group as={Col} controlId="carFormMileage">
									<Form.Label>Mileage</Form.Label>
									<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-tachometer-alt"></i></InputGroup.Text>
									</InputGroup.Prepend>
										<Form.Control placeholder="22300"
																	type="text"
																	name="mileage"
																	value={this.state.mileage}
																	onChange={this.handleInputChange}/>
									</InputGroup>
								</Form.Group>
							</Form.Row>


							<Form.Row>
								<Form.Group as={Col} sm='4' controlId="carFormZip">
									<Form.Label>Zip</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-location-arrow"></i></InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control placeholder="54321"
																	type="text"
																	name="zip"
																	value={this.state.zip}
																	onChange={this.handleInputChange}/>
									</InputGroup>
								</Form.Group>
							</Form.Row>

							<Form.Group controlId="carFormDescription">
								<Form.Label>Vehicle description</Form.Label>
								<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-edit"></i></InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control as="textarea"
															rows="3"
															name="description"
															value={this.state.description}
															onChange={this.handleInputChange}/>
								</InputGroup>
							</Form.Group>


							<Form.Row>
								<Form.Group as={Col} controlId="carFormAuctionEndDate">

									<Form.Label>Auction end date </Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-calendar-day mr-2"></i> 12:00PM CST on</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control placeholder="2019-04-09"
																	type="date"
																	name="auction_end_date"
																	value={this.state.auction_end_date}
																	onChange={this.handleInputChange} />
									</InputGroup>
								</Form.Group>

								<Form.Group as={Col} controlId="carFormAuctionReservePrice">
									<Form.Label >Auction reserve price</Form.Label>
									<InputGroup>
              			<InputGroup.Prepend>
                			<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-dollar-sign"></i></InputGroup.Text>
              			</InputGroup.Prepend>
									<Form.Control placeholder="2500"
																type="text"
																name="auction_reserve_price"
																value={this.state.auction_reserve_price}
																onChange={this.handleInputChange}/>
									</InputGroup>
								</Form.Group>
							</Form.Row>

							<AddImages/>


						</Form>
					</Modal.Body>

					<Modal.Footer>
						<Form.Group as={Col} id="auctionByDate">
							<Form.Check type="checkbox" label="I agree to the terms and conditions" />
						</Form.Group>

						<ButtonToolbar style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
							<Button variant="success" type="submit" onClick={e => this.onSubmit(e)}>
								Publish Car!
							</Button>
	          </ButtonToolbar>
					</Modal.Footer>
			</Modal>
			</>

    );
  }
}

export default AddCarModal;
