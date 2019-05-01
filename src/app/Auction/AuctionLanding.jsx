/* eslint eqeqeq: "off" */
import React from 'react';
import { RealRepo } from '../../api/realRepo';
import { AuctionList } from './AuctionList';
import FilterBar from './FilterBar';
import { Car } from './../../models/car';

export class AuctionLanding extends React.Component {
	realRepo = new RealRepo();


    state = {
        auctions: [],
    };


    render() {
        return (
            <>
						<div className="container mt-2">
							<div className="row">
								<FilterBar models={this.state.auctions.filter(a => a.Image != "")}/>
								<div className="container col-lg-9">
									<div className="row">
										<AuctionList auctions={this.state.auctions} userZipCode={this.props.userInfo.userZipCode}/>
									</div>
								</div>
								</div>
							</div>

            </>
        );
    }

		componentDidMount() {
			this.realRepo.getAuctions()
				.then(a => {
					this.setState({auctions: a});
        });

    	}
}


export default AuctionLanding;
