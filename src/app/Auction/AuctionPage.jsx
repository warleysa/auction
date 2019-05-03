/* eslint eqeqeq: "off" */
import React, { Component } from 'react';
import { RealRepo } from '../../api/realRepo';
import { Link } from 'react-router-dom';
import UserTile from '../Users/UserTile';
import BidList from './Bids/BidList';
import BidForm from './Bids/BidForm';

export class AuctionPage extends Component {
	realRepo = new RealRepo();
	state = {
		reviews: [],
		bids: [],
		UserId: null,
		activeUser: [],
		profile: [],
		auction: {
			name: '',
			image: '',
			price: '',
			color: ''

		}
  }

	onNewBid(bid) {
		this.realRepo.postBid(bid)
    this.setState(state => {
      state.bids.push(bid);
      return state;
    });
	};



  onNewReview(review) {
    this.setState(state => {
      state.reviews.push(review);
      return state;
    });
	};

	render () {
		return (
			<div className="container">
			<div className="row">

					<div className="col-md-8">
							<div className="m-4">
									<header className="mb-4">
											<nav aria-label="breadcrumb">
												<ol className="breadcrumb">
													<li className="breadcrumb-item">	<Link to="/auctions" className="a"> Auctions </Link>	</li>
													<li className="breadcrumb-item active" aria-current="page">{ this.state.auction.Year } {this.state.auction.Make} {this.state.auction.Model}</li>
												</ol>
											</nav>
			  					</header>

								<div className="jumbotron bg-light">
										<div className="row">

											<div className="col-md-4">	<img width="70%" src={ this.state.auction.Image } alt="Auction URL" />	</div>

											<div className="col-md-8">
												<h1 className="">{ this.state.auction.Year } {this.state.auction.Make} {this.state.auction.Model}</h1>
												<h3><span className="badge badge-primary">${ this.state.auction.Price }</span></h3>
												<span className="mt-2">
													<div style={{backgroundColor: this.state.auction.Color,
																		width: '60px',
																		height: '60px'}}
															  className="float-right rounded-circle"></div>
												</span>

											</div>

										</div>
								</div>

								<div>
									{ <BidList bids={this.state.bids}/>}
									{ !!this.props.userInfo.currentUserId && <BidForm onNewBid={ b => this.onNewBid(b)} username={this.state.activeUser.Username} userId={this.props.userInfo.currentUserId} auctionId={this.state.auction.AuctionId}/> }
								</div>

							</div>
					</div>

					<div className="col-md-4">
						<UserTile user={this.state.profile} activeUserId={this.props.userInfo.currentUserId}/>
					</div>

			</div>
			</div>
		)
	}


	componentDidMount() {
		let auctionId = +this.props.match.params.auctionId;
		if(auctionId){
			this.realRepo.getAuction(auctionId)
				.then(listing => {
						let sellerId = +listing[0].UserId;
						console.log(`SELLER ID: ${sellerId}`);
						this.realRepo.getUserRating(sellerId)
						.then(p => {
								let prof = p[0];
								this.setState({profile: prof});
						});
						this.setState({auction: listing[0],
													 userId: +listing[0].UserId});
				});
		}

		this.realRepo.getBidsForAuction(auctionId)
			.then(bids => {
				let newBidList = [];
				bids.map((b) => {
					newBidList.push(b);
				});
				this.setState({bids: newBidList});
			})

			if(this.props.userInfo.currentUserId) {
				this.realRepo.getUserRating(this.props.userInfo.currentUserId)
				.then(user => {
					this.setState({ activeUser: user[0]});
				})
			}

	}
};
