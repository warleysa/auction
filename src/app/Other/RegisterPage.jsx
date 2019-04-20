/* eslint eqeqeq: "off" */
import React, { Component } from 'react';
import luigi from './../Luigi.png';
import { Card, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RealRepo } from '../../api/realRepo';

export class RegisterPage extends Component {
	apiRepo = new RealRepo();

	state = {
		id: -1,
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		usernameNotAvailable: false,
		userAvailable: 1
	}

	onRegister() {
		console.log("Submitting Register information");
		if ((!this.state.username == '') && (!this.state.password == '') && (!this.state.firstName == '') && (!this.state.lastName == '')) {
			console.log("Both password and username entered!");
			this.apiRepo.registerUser({
				username: this.state.username,
				password: this.state.password,
				firstName: this.state.firstName,
				lastName: this.state.lastName
			})
				.then(user => {
					console.log("Register submitted");
					this.setState({
						username: user.username,
						password: user.password,
						firstName: user.firstName,
						lastName: user.lastName
					});
					if(this.state.errorCode == -1) {
		 				window.alert('This username has already been taken! Please choose another!');
		 			} else {
		 				console.log(this.state);
		 				console.log(this.state.username);
		 				console.log("Correct Password Entered");
		 			}
				}
			 );
		}
  }

	onDismiss() {
    this.setState({ visibleUsernameAlert: false });
  }

	usernameCheck(e) {
		this.setState({ username: e.target.value });
		console.log("Username check: -> " + e.target.value);
		if(e.target.value) {
			this.apiRepo.checkUsername(e.target.value)
				.then(u => {
					this.setState(u);
					console.log(u);
					console.log(this.state);
					if(this.state.userAvailable == 0) {
						this.setState(state => ({
							usernameNotAvailable: true
						}))
					} else {
						this.setState(state => ({
							usernameNotAvailable: false
						}))
					}
				});
		}
	}

	hideLoginModal() {
		console.log("Closing Modal");
		this.props.hideLoginModal(false);
	}

  render () {
    return (
			<>
			<div className="row h-75 m-1">
				<Col className="col-sm-6 my-auto mx-auto">
					<Card onHide={ this.props.hideLoginModal }>
		          <Card.Header closeButton>
		            <Card.Title className="text-center my-auto">Car Auction - Register Page</Card.Title>
		          </Card.Header>
							<img src={ luigi } className="mx-auto p-2" alt="Luigi" height="100" width="100"/>
		          <Card.Body>
								<form>
									<Row className="my-auto">
										<div className="form-group col-md-6">
											<label htmlFor="firstName">First Name:</label>
											<input type="text"
												id="firstName"
												name="firstName"
												className="form-control"
												value={this.state.firstName}
												onChange={ e => this.setState({ firstName: e.target.value }) }/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="lastName">Last Name:</label>
											<input type="text"
												id="lastName"
												name="lastName"
												className="form-control"
												value={this.state.lastName}
												onChange={ e => this.setState({ lastName: e.target.value }) }/>
										</div>
									</Row>
									<div className="form-group">
										<label htmlFor="username">Username:</label>
										<input type="text"
											id="username"
											name="username"
											className="form-control"
											value={this.state.username}
											onChange={ e => this.usernameCheck(e) }/>
									</div>
									<Alert variant="danger" show={ this.state.usernameNotAvailable } >
						        Username is already taken! Please choose another...
						      </Alert>

									<div className="form-group">
										<label htmlFor="password">Password:</label>
										<input type="password"
											id="password"
											name="password"
											className="form-control"
											value={this.state.password}
											onChange={ e => this.setState({ password: e.target.value }) }/>
									</div>

								</form>
								<Button variant="success"
									className="form-control"
									disabled={ this.state.usernameNotAvailable || (this.state.username == '') || (this.state.password == '') }
									onClick={e => this.onRegister()}>
		              Register
		            </Button>
								<hr/>
								<p className="text-muted">Already have an account? Login below!</p>
								<Link to="/login" className="btn btn-primary form-control mb-2">
										<i className="fa fa-sign-in"></i>&nbsp;
										Login
								</Link>
							</Card.Body>
		        </Card>
					</Col>
					</div>
			</>

    )
  }

}
