import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Col, Dropdown } from 'react-bootstrap';
import Datetime from 'react-datetime';
import Button from 'react-bootstrap/Button';
import AddImages	from './AddImages';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Car from './../../models/car';
import carData from './json/carData.json';
import moment from 'moment';
import './style/UserProfile.css';

import { CirclePicker } from 'react-color';




class AddCarModal extends Component {

	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			userId: "",
			make:	"",
			model: "",
			year:	0,
			mileage:	"",
			zip:	"",
			description:	"",
			duration: '',
			auction_reserve_price: "",
			images: "",
			durationValues: [1,3,7,14,30],
			modelInputDiasbled: true,
			modelOptions: [],
			defaultColors: ['#8ed1fc', '#01579b', '#0000ff', '#7b1fa2', '#f78da7', '#ff0404', '#b71c1c', "#ffffff" ,'#abb8c3', '#607d8b',
											'#555555', '#000000', '#194d33', '#4caf50', '#00d084', '#ffeb3b', '#ff9800']
		};
	}

	handleClose() {
    this.setState({ modalShowState: false });
  }

	setImage(image) {
		this.setState({ image: image });
	}

  handleShow() {
    this.setState({ modalShowState: true });
  }

	handleInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  };

	handleModelChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
				modelInputDiasbled: false,
				modelOptions: carData.find( value => value.brand === event.target.value ).models
    })
  };

	onSubmit(){
		let date_created = new Date();
		let end_date = new Date();
		end_date.setDate(date_created.getDate()+(+this.state.duration));
		console.log(end_date);
		console.log(date_created);
		this.props.onCarAdded(new Car(this.state.userId,
																	this.state.make,
																	this.state.model,
																	this.state.year,
																	this.state.mileage,
																	this.state.color,
																	this.state.zip,
																	this.state.description,
																	this.state.auction_reserve_price,
																	date_created,
																	end_date,
																	0,
																	this.state.image
																));
		this.setState(
			{
				make:	"",
				model: "",
				year:	"",
				mileage:	"",
				color: "",
				zip: this.props.userInfo.zip,
				description:	"",
				duration: "",
				auction_reserve_price: "",
				images: [],
				modalShowState: false
			}
		)
	}

  render() {


    return (
			<>
			<Button variant="success" className="col-lg-2 col-xs-12 m-2" onClick={this.handleShow}>
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
								<Form.Group as={Col} sm={6} controlId="carFormGridMake">
									<Form.Label>Make</Form.Label>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-landmark"></i></InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
													as="select"
													name="make"
													className="custom-select"
													value={this.state.make}
													onChange={this.handleModelChange}>
													<option></option>
													{
														carData.map(obj => <option key={obj.brand} value={obj.brand}>{obj.brand}</option>)
													}
												</Form.Control>
										</InputGroup>
								</Form.Group>

								<Form.Group as={Col} sm={6} controlId="carFormModel">
									<Form.Label>Model</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-car-side"></i></InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
												as="select"
												name="model"
												disabled={this.state.modelInputDiasbled}
												className="custom-select"
												value={this.state.model}
												onChange={this.handleInputChange}>
												{
													this.state.modelOptions.map((model, x) => <option key={x} value={model}>{model}</option>)
												}
											</Form.Control>
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
									<Form.Control
											as="select"
											name="year"
											className="custom-select"
											value={this.state.year}
											onChange={this.handleInputChange}>
											<option></option>
											{
												Array.from( new Array((new Date().getFullYear())-1899), (v,i) =>
									        <option key={i} value={1899+i}>{1899+i}</option>
									      ).reverse()
											}
										</Form.Control>
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
																	min="0" max="10000000"
																	value={this.state.mileage}
																	onChange={this.handleInputChange}/>
									</InputGroup>
								</Form.Group>
							</Form.Row>

							<Form.Row>
								<div className="col-sm-4">
										<p className="m-0">Color</p>
										<div className="card bg-light p-2 my-2">
											<CirclePicker width="100%" color={ this.state.color } colors={this.state.defaultColors} onChangeComplete={ (color, event) => this.setState({ color: color.hex }) } />
										</div>
								</div>
								<div className="col-sm-2 my-auto w-100 h-100">
										<div className="p-5 w-100 h-75 rounded border border-secondary" style={{background: this.state.color}}>
										</div>
								</div>

								<Form.Group as={Col} sm='6' controlId="carFormZip">
									<Form.Label>Zip</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-location-arrow"></i></InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control placeholder="54321"
																	type="text"
																	name="zip"
																	maxLength="9"
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
								<Form.Group as={Col} sm={6} controlId="carFormAuctionDuration">

									<Form.Label>Auction Duration (in Days)</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-calendar-day mr-2"></i></InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
												as="select"
												className="custom-select"
												value={this.state.duration}
												onChange={ e => this.setState({ duration: e.target.value }) }>
												{
													this.state.durationValues.map(x => <option key={x} value={x}>{x}</option>)
												}
											</Form.Control>
									</InputGroup>
								</Form.Group>

								<Form.Group as={Col} sm={6} controlId="carFormAuctionReservePrice">
									<Form.Label >Auction reserve price</Form.Label>
									<InputGroup>
              			<InputGroup.Prepend>
                			<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-dollar-sign"></i></InputGroup.Text>
              			</InputGroup.Prepend>
									<Form.Control placeholder="2500"
																type="text"
																name="auction_reserve_price"
																maxLength="7"
																value={this.state.auction_reserve_price}
																onChange={this.handleInputChange}/>
									</InputGroup>
								</Form.Group>
							</Form.Row>


							<AddImages setImage={(image) => this.setImage(image)}/>


						</Form>
					</Modal.Body>

					<Modal.Footer>
						{/*
						<Form.Group as={Col} id="auctionByDate">
							<Form.Check type="checkbox" label="I agree to the terms and conditions" />
							<Form.Control.Feedback type='invalid'>You must accept the terms and conditions before posting!</Form.Control.Feedback>
						</Form.Group>
						*/}

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
	componentWillReceiveProps(props) {
		// if(this.props.userInfo) {
			this.setState({
				userId: props.userInfo.userId,
				zip: props.userInfo.zip,
			});
		// }
	}
}

export default AddCarModal;
