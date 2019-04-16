/* eslint eqeqeq: "off" */
import React, { Component } from 'react';
import luigi from './../Luigi.png';
import { Card, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TestRepo } from '../../api/testRepo';

export class RegisterPage extends Component {
	testRepo = new TestRepo();

	state = {
		id: -1,
		username: '',
		password: '',
		first_name: '',
		last_name: '',
		usernameNotAvailable: false,
		userAvailable: 1
	}

	onRegister() {
		console.log("Submitting Register information");
		if ((!this.state.username == '') && (!this.state.password == '') && (!this.state.first_name == '') && (!this.state.last_name == '')) {
			console.log("Both password and username entered!");
			this.testRepo.registerUser({
				username: this.state.username,
				password: this.state.password,
				first_name: this.state.first_name,
				last_name: this.state.last_name
			})
				.then(user => {
					console.log("Register submitted");
					this.setState({
						username: user.username,
						password: user.password,
						first_name: user.first_name,
						last_name: user.last_name
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
		this.testRepo.checkUsername({username: e.target.value})
			.then(u => {
				this.setState(u);
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
											<label htmlFor="first_name">First Name:</label>
											<input type="text"
												id="first_name"
												name="first_name"
												className="form-control"
												value={this.state.first_name}
												onChange={ e => this.setState({ first_name: e.target.value }) }/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="last_name">Last Name:</label>
											<input type="text"
												id="last_name"
												name="last_name"
												className="form-control"
												value={this.state.last_name}
												onChange={ e => this.setState({ last_name: e.target.value }) }/>
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
