import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


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
                                <div className="row">
                                    <div  className="col">
                                        <strong> Bid: ${b.Price || 'undefined'}</strong>
                                        
                                    </div>

                                    <div  className="col">
                                        
                                        <NavLink to={`/profile/${b.UserId}`}
                                            className="btn btn-outline-primary float-right">View profile</NavLink>
                                    </div>
                                </div>
								
							</div>
							<div className="card-body bg-light mx-2">
                                <div>Bidder: @{b.Username}</div>
                                {b.Date}
							</div>
                            <div>
                                
                                
                            </div>
					 </div>
				 )
			)
	}


	render () {
		return (
		  <>
				<h4> Bids <span className="text-muted">({ this.props.bids.length })</span> </h4>
				<div className="overflow-auto">
                    { (this.props.bids.length === 0) && this.noBidsText() }
                    { (this.props.bids.length !== 0) && this.bidList(this.props.bids) }
                </div>
				

		  </>
		)
	}
};


export default BidList;
