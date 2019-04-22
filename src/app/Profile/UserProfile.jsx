import React, { Component } from 'react';

import { Container, Form, Row, Col, Button, Tabs, Tab, ButtonToolbar, Alert } from 'react-bootstrap';
import './UserProfile.css';
import MyCarsList from './MyCarsList';

import AddCarModal from './AddCarModal';
import AccountSidebar from './AccountSidebar';
import ChangePassword from './ChangePassword';
import UserList from './../Other/UserList';
import { User } from './../../models/user';
import { RealRepo } from '../../api/realRepo';
var zipcodes = require('zipcodes');



class UserProfile extends React.Component {
	apiRepo = new RealRepo();

	state = {
		profile: [],
		tester: '',
		cars_listed: '1',
		cars_sold: '0',
		cars_purchased: '0',
		ranking: 4,
		cars: [],
		showWelcomeAlert: true,
		form_readOnly: true,
		modalShowState: false,
		passwordModalShowState: false,
	}

  handleInputChange(e) {
		const { name, value } = e.target;
		if(name == "zip") {
			const zipInfo = zipcodes.lookup(value);
			if(zipInfo) {
				this.setState(() => ({
			    profile: {
			        ...this.state.profile,
			        [name]: value,
							city: zipInfo.city,
							state_code: zipInfo.state
			    }
				}));
				return this.state;
			}
		}
		this.setState(() => ({
	    profile: {
	        ...this.state.profile,
	        [name]: value
	    }
		}));
  };

  onCarAdded(newCar) {
		console.log("Car Object:");
		console.log(newCar);
		this.apiRepo.postAuction(newCar)
			.then(user => {
				console.log("Car Auction submitted");
				this.setState(state => {
		      state.cars.push(newCar);
		      return state;
		    });
			}
		 );
  };

	onDismissAlert() {
		this.setState({ showWelcomeAlert: false });
	};

	toggleEditing() {
		let userEditing = !this.state.form_readOnly;
		this.setState({
			form_readOnly: userEditing,
		})
	};


	onSave() {
		let editedUser = new User(this.state.profile.userId, this.state.profile.username, this.state.profile.first_name, this.state.profile.last_name, this.state.profile.address, this.state.profile.city, this.state.profile.state_code, this.state.profile.zip, this.state.profile.register_date);
		this.props.setProfileInfo(editedUser);
		this.setState({
			profile: editedUser,
			form_readOnly: true,
		});
	};

	onCancel() {
		console.log("Canceling");
		console.log(this.props);
		this.setState({
			form_readOnly: true,
			profile: {
				userId: this.props.userInfo.userId,
				first_name: this.props.userInfo.first_name,
				last_name: this.props.userInfo.last_name,
				address: this.props.userInfo.address || '',
				city: this.props.userInfo.city || '',
				state_code: this.props.userInfo.state_code || '',
				zip: this.props.userInfo.zip || '',
				register_date: this.props.userInfo.register_date || ''
			}
		});
	}


  render() {

		const editSaveButton = () => {
			if(this.state.form_readOnly){
				return (
					<Button variant="outline-primary"
									onClick={() => this.toggleEditing()}
									className='m-1'>
					<i className="m-1 far fa-edit"></i>  Edit Details
					</Button>
				)
			}else{
				return (
					<>
					<Button variant="danger"
									onClick={() => this.onCancel()}
									className="m-1">
						Cancel
					</Button>

					<Button variant="success"
									onClick={() => this.onSave()}
									className="m-1">
						Save
					</Button>

					</>
				)
			}
		};


    return (
      <Container className="mt-4">
				<Alert dismissible variant="info" show={this.state.showWelcomeAlert} onClose={() => this.onDismissAlert()} className="">
					<h3>Welcome {this.state.profile.first_name}!</h3>
				</Alert>

      {/* ---Profile overview (left sidebar)--- */}

		      <Row>
		        <Col md={5} lg={4} xl={3}>
							<AccountSidebar first_name={this.state.profile.first_name}
		                            last_name={this.state.profile.last_name}
		                            date_joined={this.state.profile.register_date}
		                            cars_listed={this.state.cars_listed}
		                            cars_purchased={this.state.profile.cars_purchased}
		                            cars_sold={this.state.profile.cars_sold}
		                            ranking={this.state.profile.ranking}
																keyId="hello"/>
		        </Col>

		        <Col md={7} lg={8} xl={9}>
		          <ButtonToolbar style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
		            <AddCarModal userInfo={this.state.profile} modalShowState={ this.state.modalShowState } onCarAdded= {car => this.onCarAdded(car)}/>
		          </ButtonToolbar>

		          <Tabs defaultActiveKey="AccountSettings" id="uncontrolled-tab-example"  >
		            <Tab eventKey="AccountSettings" title="Account Settings" className="p-4 shadow-sm">


		            <Form>
		              <Row>
		                <Col>
		                    <Form.Group as={Row} controlId="formFirstName">
		                      <Form.Label column sm='4'>First:</Form.Label>
		                        <Col sm='8'>
		                          <Form.Control type="text"
		                                        name="first_name"
		                                        value={this.state.profile.first_name}
		                                        placeholder="Enter first name"
		                                        readOnly= {this.state.form_readOnly}
		                                        onChange={e => this.handleInputChange(e)}/>
		                        </Col>
		                    </Form.Group>
		                </Col>

		                <Col>
		                    <Form.Group as={Row} controlId="formLastName">
		                      <Form.Label column sm='4'>Last:</Form.Label>
		                      <Col sm='8'>
		                        <Form.Control type="text"
		                                      name="last_name"
		                                      placeholder="Enter last name"
		                                      value={this.state.profile.last_name}
		                                      readOnly= {this.state.form_readOnly}
		                                      onChange={e => this.handleInputChange(e)}/>
		                      </Col>
		                    </Form.Group>
		                </Col>
		              </Row>

		              <Form.Group as={Row} controlId="formAddressl1">
		                <Form.Label column sm={2}>Address</Form.Label>
		                <Col sm={10}>
		                  <Form.Control placeholder="1234 Main St"
		                                type="text"
		                                name="address"
		                                value={this.state.profile.address || ''}
		                                readOnly= {this.state.form_readOnly}
		                                onChange={e => this.handleInputChange(e)}/>
		                </Col>
		              </Form.Group>



		              <Form.Row>
										<Form.Group as={Col} controlId="formZip">
		                  <Form.Label>Zip</Form.Label>
		                  <Form.Control placeholder="54321"
		                                type="number"
		                                name="zip"
		                                value={this.state.profile.zip  || ''}
		                                readOnly= {this.state.form_readOnly}
		                                onChange={e => this.handleInputChange(e)}/>
		                </Form.Group>
		                <Form.Group as={Col} controlId="formCity">
		                  <Form.Label>City</Form.Label>
		                  <Form.Control placeholder="enter a city"
		                                type="text"
		                                name="city"
		                                value={this.state.profile.city  || ''}
		                                readOnly= {this.state.form_readOnly}
		                                onChange={e => this.handleInputChange(e)}/>
		                </Form.Group>

		                <Form.Group as={Col} controlId="formState">
		                  <Form.Label>State</Form.Label>
		                  <Form.Control placeholder="enter a state"
		                                type="text"
		                                name="state_code"
		                                value={this.state.profile.state_code  || ''}
		                                readOnly= {this.state.form_readOnly}
		                                onChange={e => this.handleInputChange(e)}/>
		                </Form.Group>
		              </Form.Row>

		            </Form>


								<Row className='justify-content-between'>
									<Col className="col-sm-auto"><ChangePassword/></Col>
									<Col className="col-sm-auto" > {editSaveButton()}</Col>
								</Row>


		            </Tab>

		            {/* --My Cars tab -- */}

		            <Tab eventKey="MyCars" title="My Cars" className="p-4">
		              <MyCarsList cars={this.state.cars || []}/>
		            </Tab>

		          </Tabs>
		        </Col>
		      </Row>

					<UserList/>

      </Container>
    );
  }
	componentWillReceiveProps(props) {
		console.log("componentWillReceiveProps");
		console.log(this.state);
		if(props.userInfo) {
			this.setState({
				profile: props.userInfo
			});
		}
		if(props.carData) {
			this.setState({
				cars: props.carData,
				cars_listed: props.carData.length
			});
		}
	}

}

export default UserProfile;
