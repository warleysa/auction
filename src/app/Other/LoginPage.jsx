import React, { Component } from 'react';
import User from '../../models/user';
import luigi from './../Luigi.png';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { TestRepo } from '../../api/testRepo';
import { Header } from './../Header';
import { Link } from 'react-router-dom';

export class LoginPage extends Component {
		testRepo = new TestRepo;

  state = {
		id: -1,
    username: '',
    password: '',
		redirect: '',
		loginAuth: 0
  }

  onSubmit() {
		console.log("Submitting login information");
		if ((!this.state.username == '') && (!this.state.password == '')) {
			console.log("Both password and username entered!");
			this.testRepo.loginUser(this.state.username, this.state.password)
				.then(user => this.setState({user}));
			if(this.state.loginAuth == 0) {
				window.alert('Incorrect Password Entered!');
			} else {
				console.log("Correct Password Entered")
			}
		}
  }

	hideLoginModal() {
		console.log("Closing Modal");
		this.props.hideLoginModal(false);
	}

  render () {
		console.log("Show Status Login: " + this.props.show);
    return (
			<>
			<Header/>
			<div className="row h-75 m-1">
				<Col className="col-sm-4 my-auto mx-auto">
					<Card onHide={ this.props.hideLoginModal }>
		          <Card.Header closeButton>
		            <Card.Title className="text-center my-auto">Car Auction - Login page</Card.Title>
		          </Card.Header>
							<img src={ luigi } className="mx-auto p-2" alt="Luigi" height="100" width="100"/>
		          <Card.Body>
								<form>
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

								</form>
								<Button variant="success"
									className="form-control"
									disabled= { (this.state.username == '') || (this.state.password== '') }
									onClick={e => this.onSubmit()}>
		              Login
		            </Button>
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

// <div className="modal-dialog modal-dialog-centered" role="document">
// 	<div className="modal-content">
// 		<div className="modal-header">
// 			<h5 className="modal-title" id="modalLoginTitle">Login</h5>
// 			<button type="button" className="close" data-dismiss="modal" aria-label="Close">
// 				<span aria-hidden="true">&times;</span>
// 			</button>
// 		</div>
// 		<div className="modal-body">
			// <form>
			// 	<div className="form-group">
			// 		<label htmlFor="username">Username:</label>
			// 		<input type="text"
			// 			id="username"
			// 			name="username"
			// 			className="form-control"
			// 			value={this.state.username}
			// 			onChange={ e => this.setState({ username: e.target.value }) }/>
			// 	</div>
			//
			// 	<div className="form-group">
			// 		<label htmlFor="password">Password:</label>
			// 		<input type="text"
			// 			id="password"
			// 			name="password"
			// 			className="form-control"
			// 			value={this.state.password}
			// 			onChange={ e => this.setState({ password: e.target.value }) }/>
			// 	</div>
			//
			// </form>
// 			<div>
// 				<button onClick={e => this.onSubmit()}
// 					className="btn btn-primary form-control">
// 					Login
// 				</button>
// 			</div>
// 		</div>
// 		<div className="modal-footer">
// 			<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
// 			<button type="button" className="btn btn-primary">Save changes</button>
// 		</div>
// 	</div>
// </div>
