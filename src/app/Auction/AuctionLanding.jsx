/* eslint eqeqeq: "off" */
import React from 'react';
import { RealRepo } from '../../api/realRepo';
import { AuctionList } from './AuctionList';
import { FilterBar } from './FilterBar';
import { Car } from './../../models/car';
import './Filter.css';

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
								<FilterBar/>
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
				.then(auctions => {
					let cars = auctions.map(c => new Car(c.UserId, c.Make, c.Model, +c.Year, c.Mileage, c.Color, c.Zip, c.Description, c.Price, c.StartTime, c.EndTime, +c.AuctionId, c.Image));
					this.setState({auctions: cars});
        });

    	}
}


export default AuctionLanding;
