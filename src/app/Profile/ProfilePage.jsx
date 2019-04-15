import React, { Component } from 'react';
import { TestRepo } from '../../api/testRepo';

import { Card, Button, Row, Col} from 'react-bootstrap';


export class ProfilePage extends Component {
	testRepo = new TestRepo();
	state = {
		profile: {
		}
  }

  onNewReview(review) {
    this.setState(state => {
      state.reviews.push(review);
      return state;
    });
	};

	onEditProfile() {
		//Show a modal for editing profile information
  }

	onEditPassword() {
		//Show a modal for Changing password
  }

	render () {
		return (
			<>
				<div className="row h-75 m-1">
					<Col className="col-sm-8 my-auto mx-auto">
						<Card>
			          <Card.Header>
			            <Card.Title className="text-center my-auto">{ `${this.state.profile.username}'s Profile Page` }</Card.Title>
			          </Card.Header>
			          <Card.Body className="p-2">
										<Row className="mx-auto">
											<div className="form-group col-md-6">
												<h2>{ this.state.profile.first_name } { this.state.profile.last_name } </h2>
											</div>
										</Row>
										<Row className="mx-auto">
											<div className="form-group col-md-6">
												<p><b>Username: </b>{ this.state.profile.username } </p>
												<p><b>Description: </b>{ this.state.profile.username } </p>
												<p><b>Other Information: </b>{ this.state.profile.username } </p>
											</div>
										</Row>
								</Card.Body>
								<Card.Footer>
									<Button variant="primary float-left"
										className=""
										onClick={ e => this.onEditProfile() }>
										Edit Profile
									</Button>
									<Button variant="success float-right"
										className=""
										onClick={e => this.onEditPassword()}>
			              Change Password
			            </Button>
								</Card.Footer>
			        </Card>
						</Col>
						</div>
			</>
		)
	}
	componentDidMount() {
	}
};
