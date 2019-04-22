/* eslint eqeqeq: "off" */
import React from 'react';
import { RealRepo } from '../../api/realRepo';
import { AuctionList } from './AuctionList';

export class AuctionLanding extends React.Component {
	realRepo = new RealRepo();


    state = {
        auctions: []
    };


    render() {
        return (
            <>
						<AuctionList auctions={this.state.auctions}/>
            </>
        );
    }

		componentDidMount() {
			this.testRepo.getAuctions()
				.then(auctions => {
					let cars = auctions.map(c => new Car(c.UserId, c.Make, c.Model, c.Year, "No API Data for Mileage", c.Zip, c.Description, c.Price, c.StartTime, c.EndTime, c.AuctionId));
					this.setState({auctions: cars});
				});
		}
}


export default AuctionLanding;
