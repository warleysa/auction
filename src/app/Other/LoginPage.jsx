/* eslint eqeqeq: "off" */
import React, { Component } from 'react';
import luigi from './../Luigi.png';
import { Card, Button, Col, Alert, Container } from 'react-bootstrap';
import { TestRepo } from '../../api/testRepo';
import { Link, Redirect } from 'react-router-dom';

export class LoginPage extends Component{
	testRepo = new TestRepo();

	state = {
		id: -1,
		username: '',
		password: '',
		loginAuth: 0,
		redirect: '',
		loginAlertShow: false
	}

	onSubmit() {
		if ((!this.state.username == '') && (!this.state.password == '')) {
			this.testRepo.loginUser(
				{ username: this.state.username, password: this.state.password }
			)
			.then(user => {
				this.setState(user)
				if(this.state.loginAuth == 0) {
					this.setState(
						{
							loginAlertShow: true
						}
					)
				} else {
					this.props.setAuthState(true, this.state.id);
					this.setState(
						{
							redirect: `/profile/${ this.state.id }`,
							authId: this.state.id
						}
					)
				}
			});
		}
	}

	hideLoginAlert() {
		this.setState(
			{
				loginAlertShow: false
			}
		)
	}

	render () {
		if(this.state.redirect) {
			return <Redirect to={this.state.redirect}/>
		}
		return (
			<>
			<Alert dismissible variant="danger" show={ this.state.loginAlertShow } onClose={() => this.hideLoginAlert()} className="text-center fixed-top w-75 mx-auto mt-3">
				Username and Password are incorrect!
			</Alert>
			<div className="row h-75 mt-5">
				<Col className="col-sm-4 my-auto mx-auto">
					<Card>
						<Card.Header>
							<Card.Title className="text-center my-auto">Car Auction - Login page</Card.Title>
						</Card.Header>
						<img src={ luigi } className="mx-auto p-2" alt="Luigi" height="100" width="100"/>
						<Card.Body>
							<form onSubmit={e => this.onSubmit()} action="javascript:myFunction(); return false;">
								<div className="form-group">
									<label htmlFor="username">Username:</label>
									<input type="text"
										id="username"
										name="username"
										className="form-control"
										value={this.state.username}
										onChange={ e => this.setState({ username: e.target.value }) }/>
								</div>

								<div className="form-group">
									<label htmlFor="password">Password:</label>
									<input type="password"
										id="password"
										name="password"
										className="form-control"
										value={this.state.password}
										onChange={ e => this.setState({ password: e.target.value }) }/>
								</div>
								<Button variant="success"
									type="submit"
									className="form-control"
									disabled= { (this.state.username === '') || (this.state.password === '') }>
									Login
								</Button>

							</form>
							<hr/>
							<p className="text-muted">Don't have an account? Register Today!</p>
							<Link to="/register" className="btn btn-primary form-control mb-2">
								<i className="fa fa-edit"></i>&nbsp;
									Register
								</Link>
							</Card.Body>
						</Card>
					</Col>
				</div>
				</>

		)
	}

}
