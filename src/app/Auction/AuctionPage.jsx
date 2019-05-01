/* eslint eqeqeq: "off" */
import React, { Component } from 'react';
import ReviewForm from './../Reviews/ReviewForm';
import ReviewList from './../Reviews/ReviewList';
import { RealRepo } from '../../api/realRepo';
import { Link } from 'react-router-dom';


export class AuctionPage extends Component {
	realRepo = new RealRepo();
	state = {
		reviews: [],
		auction: {
			name: '',
			image: '',
			price: '',
			color: ''
		}
  }

  onNewReview(review) {
    this.setState(state => {
      state.reviews.push(review);
      return state;
    });
	};

	render () {
		return (
			<>
			<div className="m-4">
				<header className="mb-4">
					<nav aria-label="breadcrumb">
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item">
								<Link to="/auctions" className="a">
										Auctions
								</Link>
							</li>
					    <li className="breadcrumb-item active" aria-current="page">{ this.state.auction.name }</li>
					  </ol>
					</nav>
			  </header>
				<div className="jumbotron bg-light">
					<div className="row">
						<div className="col-md-4">
							<img width="70%" src={ this.state.auction.image } alt="Auction URL" />
						</div>
						<div className="col-md-8">
						  <h1 className="">{ this.state.auction.name }</h1>
						  <h3><span className="badge badge-primary">${ this.state.auction.price }</span></h3>
							<p className="text-muted">{ this.state.auction.color }</p>
						</div>
					</div>
				</div>
				<div>
					{ <ReviewList reviews={ this.state.reviews }/>}
					{ <ReviewForm onNewReview={ r => this.onNewReview(r) }/> }
				</div>
			</div>
			</>
		)
	}
	componentDidMount() {
		console.log("Auction Mount Function");
		let auctionId = +this.props.match.params.auctionId;
		console.log(auctionId);
		// if (auctionId) {
		// 	this.realRepo.getAuction(auctionId)
		// 		.then(a => this.setState({ auction: a }));
		// }
	}
};
