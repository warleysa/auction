import React, { Component } from 'react';
import Rating from './../Reviews/Rating';
import defaultPic from '../Profile/images/man.png';
import Card from 'react-bootstrap/Card';
import { RealRepo } from '../../api/realRepo';
import Modal from 'react-bootstrap/Modal';
import SellerReviewForm from '../Reviews/SellerReviewForm';
import {NavLink} from 'react-router-dom';

class UserTile extends Component {
    realRepo = new RealRepo();

    state = {
        user: [],
        showModal: false,
        activeUserId: this.props.activeUserId,
        sellerFeedback: [],
        feedbackLoaded: false,
        showFeedback: false
    }

    updateFeedback(userId) {
        console.log("running updateFeedback");
        if(userId){
            this.realRepo.getUserFeedback2(userId)
            .then(fb => {
                this.setState({
                    sellerFeedback: fb,
                    feedbackLoaded: true
                });
            });

        }else{
            console.log("could not find user");
        }
    }

	handleModalClose = () => {
        this.setState({ showModal: false });
    }


    handleModalShow = () => {
        this.setState({ showModal: true });
    }


    onSubmit = () => {

    }

    toggleCollapse = () => {
        this.setState(state => ({ showFeedback: !state.showFeedback }));
    }

    render(){
    const feedbackModalContent = () => {
			if(this.state.activeUserId){
				return (
					<SellerReviewForm sellerUserId={+this.props.user.UserId} activeUserId={+this.props.activeUserId}/>
				)
			}else{
				return (
					<Card>
                        <Card.Header>You must be logged in to leave a review</Card.Header>
                        <Card.Body>
                            <NavLink to="/login" className="nav-item nav-link btn btn-success my-2" activeClassName="active">
                                <i className="fa fa-sign-in"></i>&nbsp;
                                Login
                            </NavLink>

                            <NavLink to="/register" className="nav-item nav-link btn btn-primary my-2" activeClassName="active">
                                <i className="fa fa-edit"></i>&nbsp;
                                Register
                            </NavLink>
                        </Card.Body>
					</Card>
				)
			}
        };

        const displayReviews = () => {
            if(this.state.feedbackLoaded){
                if(this.state.sellerFeedback.length){
                    return(
                        <div className="overflow-auto"
                            style={{"max-height": "275px"}}>
                        {
                            this.state.sellerFeedback.map((review, i) =>
                                <div className="m-1 m-3" key={`review${i}`}>
                                    <div className="float-right">
                                        <Rating value={review.Rating}/>
                                    </div>
                                    <h6><strong>{review.FirstName}-</strong></h6>

                                    <p>"{review.Description}"</p>
                                    <hr/>
                                </div>
                            )
                        }
                        </div>
                    );
                }else{
                    return(<div className="text-center mb-1">Seller doesn't have any reviews</div>);
                }
            }else{
                return(
                    <div className="text-center mb-1">Seller doesn't have any reviews</div>
                );
            }
        }

        return(
            <Card className="mb-auto shadow-sm m-3 p-0 ">
            <div className="p-2 position-relative">
                <Card.Img variant="top" className="rounded-circle" src={this.props.user.ProfilePicture || defaultPic}  />
            </div>
            <Card.Header className="text-center"><Card.Title>{`${this.props.user.FirstName}'s account`}</Card.Title></Card.Header>
            <Card.Body className="p-1 m-3">

                <div>
                    <ul className="list-group mb-3">
                    <li className="list-group-item text-left"><span className=" mr-2"><strong>Name:</strong></span>{this.props.user.FirstName} {this.props.user.LastName}</li>
                    <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Joined:</strong></span>{this.props.user.DateCreated}</li>
                    <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Listings:</strong></span>{this.props.user.CarsListed}</li>
                    <li className="list-group-item text-left"><span className="pull-left mr-2"><strong>Rating:</strong></span><Rating value={this.props.user.AvgRating}/></li>
                    </ul>
                </div>

                <div className="row">
                    <div className="col py-1">
                        <NavLink to={`/profile/${this.props.user.UserId}`} className="btn btn-primary btn-block">View Cars</NavLink>
                    </div>
                </div>

                <div className="row ">
                    <div className=" col-9 pr-1 py-1">
                    <button type="button"
                            className="btn btn-secondary  btn-block "
                            data-toggle="collapse"
                            data-target={`#feedback${this.props.user.UserId}`}
                            aria-expanded="false"
                            aria-controls={`feedback${this.props.user.UserId}`}
                            onClick={e => this.updateFeedback(this.props.user.UserId)}>Seller Feedback</button>

                    </div>
                    <div className="col-3 pl-1 py-1">
                        <button className="btn btn-success btn-block text-center"
                                onClick={this.handleModalShow}>+</button>
                    </div>
                </div>

            </Card.Body>

            <div className="collapse collapsed p-3" id={`feedback${this.props.user.UserId}`}>
                <div className="card card-body" >
                    {displayReviews()}


                    <button className="btn btn-block btn-outline-danger mt-2"
                            type="button"
                            data-toggle="collapse"
                            data-target={`#feedback${this.props.user.UserId}`}
                            aria-controls={`feedback${this.props.user.UserId}`}>collapse feedback</button>
                </div>
            </div>
            <Modal  size="md"
					show={this.state.showModal}
					onHide={this.handleModalClose}
					aria-labelledby="add-review-modal">
					<Modal.Header closeButton>
						<Modal.Title id="add-review-title"> Leave {this.props.user.FirstName} a review</Modal.Title>
					</Modal.Header>

					<Modal.Body>{feedbackModalContent()}</Modal.Body>
            </Modal>
            </Card>
        )
    }
}

export default UserTile;
