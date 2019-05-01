import React, { Component } from 'react';


class BidList extends Component {

	noBidsText() {
		return <div className="card">
							<div className="card-header">
								Be the first to bid on this listing!
							</div>
					 </div>;
	}

	bidList(bids) {
		return ( bids.map((b, i) =>
					<div className="card bg-light mt-3" key={i}>
							<div className="card-header">
								{b.date}
							</div>
							<div className="card-body bg-light mx-2">
                                Bid: <strong>${b.price || 'undefined'}</strong>
							</div>
					 </div>
				 )
			)
	}


	render () {
		return (
		  <>
				<h4> Bids <span className="text-muted">({ this.props.bids.length })</span> </h4>
				
				{ (this.props.bids.length === 0) && this.noBidsText() }
				{ (this.props.bids.length !== 0) && this.bidList(this.props.bids) }

		  </>
		)
	}
};


export default BidList;
