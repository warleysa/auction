import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Alert from 'react-bootstrap/Alert';
import './UserProfile.css';
import Card from 'react-bootstrap/Card';
import defaultPic from './man.png';
import Rating from './../Reviews/Rating';
import MyCarsList from './MyCarsList';

import AddCarModal from './AddCarModal';
import AccountSidebar from './AccountSidebar';
import ChangePassword from './ChangePassword';
import UserList from './../Other/UserList';



class UserProfile extends Component {

	state = {
		first_name:'Tate',
		last_name: 'Hakert',
		email:  'tatehakert@gmail.com',
		address: '2900 McKinnon St., Unit 1701',
		city:   'Dallas',
		state_code:  'TX',
		zip:  '75201',
		register_date: '3-3-19',
		cars_listed: '1',
		cars_sold: '0',
		cars_purchased: '0',
		ranking: 4,
		cars: [],
		showWelcomeAlert: true,
		form_readOnly: true,
		temp_first_name: 'Tate',
		temp_last_name: 'Hakert',
		temp_address: '2900 McKinnon St., Unit 1701',
		temp_city:   'Dallas',
		temp_state_code:  'TX',
		temp_zip:  '75201',
		modalShowState: false,
		passwordModalShowState: false
	}



  handleInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };

  onCarAdded(newCar){
    this.setState(state => {
      state.cars.push(newCar);
      return state;
    });
  };


  render() {

    const onDismissAlert = () => this.setState({showWelcomeAlert: false});

    const toggleEditing = () =>  {
      var userEditing = !this.state.form_readOnly
      this.setState({
        form_readOnly: userEditing,
        temp_first_name: this.state.first_name,
        temp_last_name: this.state.last_name,
        temp_address: this.state.address,
        temp_city: this.state.city,
        temp_state_code: this.state.state_code,
        temp_zip: this.state.zip
      })
    };

    const editSaveButton = () => {
      if(this.state.form_readOnly){
        return (
          <Button variant="outline-primary"
                  onClick={toggleEditing}
									className='m-1'>
          <i className="m-1 far fa-edit"></i>  Edit Details
          </Button>
        )
      }else{
        return (
          <>
          <Button variant="danger"
                  onClick={onCancel}
                  className="m-1">
            Cancel
          </Button>

          <Button variant="success"
                  onClick={onSave}
                  className="m-1">
            Save
          </Button>

          </>
        )
      }
    };

    const onSave = () => {
      var tempVals = [
        this.state.temp_first_name,
        this.state.temp_last_name,
        this.state.temp_address,
        this.state.temp_city,
        this.state.temp_state_code,
        this.state.temp_zip,
      ]
      this.setState({
        form_readOnly:  true,
        first_name: tempVals[0],
        last_name: tempVals[1],
        address: tempVals[2],
        city: tempVals[3],
        state_code: tempVals[4],
        zip: tempVals[5],
        temp_first_name: tempVals[0],
        temp_last_name: tempVals[1],
        temp_address: tempVals[2],
        temp_city: tempVals[3],
        temp_state_code: tempVals[4],
        temp_zip: tempVals[5]
      })

    };

    const onCancel = () => {
      this.setState({
        form_readOnly: true,
        temp_first_name: this.state.first_name,
        temp_last_name: this.state.last_name,
        temp_address: this.state.address,
        temp_city: this.state.city,
        temp_state_code: this.state.state_code,
        temp_zip: this.state.zip
      })
    }





    return (
      <Container className="mt-4">

		      <Alert variant='success' show={this.state.showWelcomeAlert} >
		        <Alert.Heading>
		          Welcome back {this.state.first_name} !
		          <Button className="close" onClick={onDismissAlert}>x</Button>
		        </Alert.Heading>
		      </Alert>

      {/* ---Profile overview (left sidebar)--- */}

		      <Row>
		        <Col md={5} lg={4} xl={3}>
							<AccountSidebar first_name={this.state.first_name}
		                            last_name={this.state.last_name}
		                            date_joined={this.state.register_date}
		                            cars_listed={this.state.cars_listed}
		                            cars_purchased={this.state.cars_purchased}
		                            cars_sold={this.state.cars_sold}
		                            ranking={this.state.ranking}
																keyId="hello"/>
		        </Col>

		        <Col md={7} lg={8} xl={9}>
		          <ButtonToolbar style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
		            <AddCarModal modalShowState={ this.state.modalShowState } onCarAdded= {car => this.onCarAdded(car)}/>
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
		                                        name="temp_first_name"
		                                        value={this.state.temp_first_name}
		                                        placeholder="Enter first name"
		                                        readOnly= {this.state.form_readOnly}
		                                        onChange={this.handleInputChange}/>
		                        </Col>
		                    </Form.Group>
		                </Col>

		                <Col>
		                    <Form.Group as={Row} controlId="formLastName">
		                      <Form.Label column sm='4'>Last:</Form.Label>
		                      <Col sm='8'>
		                        <Form.Control type="text"
		                                      name="temp_last_name"
		                                      placeholder="Enter last name"
		                                      value={this.state.temp_last_name}
		                                      readOnly= {this.state.form_readOnly}
		                                      onChange={this.handleInputChange}/>
		                      </Col>
		                    </Form.Group>
		                </Col>
		              </Row>

		              <Form.Group as={Row} controlId="formAddressl1">
		                <Form.Label column sm='2'>Address</Form.Label>
		                <Col sm='10'>
		                  <Form.Control placeholder="1234 Main St"
		                                type="text"
		                                name="temp_address"
		                                value={this.state.temp_address}
		                                readOnly= {this.state.form_readOnly}
		                                onChange={this.handleInputChange}/>
		                </Col>
		              </Form.Group>



		              <Form.Row>
		                <Form.Group as={Col} controlId="formCity">
		                  <Form.Label>City</Form.Label>
		                  <Form.Control placeholder="enter a city"
		                                type="text"
		                                name="temp_city"
		                                value={this.state.temp_city}
		                                readOnly= {this.state.form_readOnly}
		                                onChange={this.handleInputChange}/>
		                </Form.Group>

		                <Form.Group as={Col} controlId="formState">
		                  <Form.Label>State</Form.Label>
		                  <Form.Control placeholder="enter a state"
		                                type="text"
		                                name="temp_state_code"
		                                value={this.state.temp_state_code}
		                                readOnly= {this.state.form_readOnly}
		                                onChange={this.handleInputChange}/>
		                </Form.Group>

		                <Form.Group as={Col} controlId="formZip">
		                  <Form.Label>Zip</Form.Label>
		                  <Form.Control placeholder="54321"
		                                type="text"
		                                name="temp_zip"
		                                value={this.state.temp_zip}
		                                readOnly= {this.state.form_readOnly}
		                                onChange={this.handleInputChange}/>
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
		              <MyCarsList cars={this.state.cars}/>
		            </Tab>

		          </Tabs>
		        </Col>
		      </Row>

					<UserList/>

      </Container>
    );
  }
}

export default UserProfile;
