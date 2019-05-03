import React from 'react';
import Rating from './../Reviews/Rating';
import { Row, FormControl, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import defaultPic from './images/man.png';
import './style/sidebar.css';
import { RealRepo } from '../../api/realRepo';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FileBase64 from 'react-file-base64';
var base64Img = require('base64-img');


class AccountSidebar extends React.Component {
	realRepo = new RealRepo;

	state = {
		profile: []
	}

	handleChange(selectorFiles: FileList) {
			let changedFile = selectorFiles[0].toString('base64');
			let idCardBase64 = '';
			this.getBase64(selectorFiles[0], (result) => {
		     idCardBase64 = result;
				 this.realRepo.setProfileImage({
					 												profilePicture: idCardBase64,
					  											userId: this.props.profile.userId
																})
				 .then(p => {
					 this.setImage(idCardBase64);
				 });
			 });
  }

	getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
	}

	setImage(image){
		this.setState({ image: image })
	}

	render() {


		return(
			<Card className="mb-auto shadow-sm">
				<div className="p-2 position-relative">
					<Card.Img variant="top" className="rounded-circle" src={ this.state.image || this.props.profile.image || defaultPic } />
						<label class="btn btn-outline-primary btn-xs mt-2 w-100" id="profilePictureUpload">
							Profile Picture
							<i className="far fa-edit float-right m-1"></i>
							<input type="file" className="d-none" onChange={ (e) => this.handleChange(e.target.files) } />
						</label>


					</div>
					<Card.Header className="text-center"><Card.Title>{`${this.props.profile.first_name}'s account`}</Card.Title></Card.Header>
					<Card.Body className="p-3">

						<div>
							<ul className="list-group mb-3">
								<li className="list-group-item text-left"><span className=" mr-2"><strong>Name:</strong></span>{this.props.profile.first_name} {this.props.profile.last_name}</li>
								<li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Joined:</strong></span>{this.props.profile.register_date}</li>
								<li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Listings:</strong></span>{this.props.carsListed}</li>
								<li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Rating:</strong></span><Rating value={this.props.profile.ranking}/></li>
							</ul>
						</div>

					</Card.Body>
				</Card>
			)
		}

	}

	export default AccountSidebar;
