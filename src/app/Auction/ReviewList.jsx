import React, { Component } from 'react';
import Rating from './Rating';

class ReviewList extends Component {

	noReviewText() {
		return <div className="card">
							<div className="card-header">
								Be the first to add a review!
							</div>
					 </div>;
	}

	reviewList(reviews) {
		return ( reviews.map((r, i) =>
					<div className="card bg-light mt-3" key={ i }>
							<div className="card-header">
								<Rating value={ r.rating }/>
							</div>
							<div className="card-body bg-light mx-2">
								<div className="row mx-0 my-0">
									<p className="mr-auto text-muted">{ r.userName }</p>
									<p className="ml-auto text-muted">{ r.date }</p>
								</div>
								<p>"{ r.comment }"</p>
							</div>
					 </div>
				 )
			)
	}


	render () {
		return (
		  <>
				<h4> Product Reviews <span className="text-muted">({ this.props.reviews.length })</span> </h4>
				{ (this.props.reviews.length === 0) && this.noReviewText() }
				{ (this.props.reviews.length !== 0) && this.reviewList(this.props.reviews) }

		  </>
		)
	}
};


export default ReviewList;
