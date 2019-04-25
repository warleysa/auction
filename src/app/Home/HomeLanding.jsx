/* eslint eqeqeq: "off" */
import React from 'react';
import { RealRepo } from '../../api/realRepo';
import { AuctionList } from '../Auction/AuctionList';
import { Car } from '../../models/car';
import HomePage from './HomePage';

export class HomeLanding extends React.Component {
	realRepo = new RealRepo();

    
    
    state = {
        auctions: []
    };


    render() {
        return (
            <>  
                        <HomePage/>
						<AuctionList auctions={this.state.auctions} userZipCode={this.props.userInfo.userZipCode}/>
            </>
        );
    }

		componentDidMount() {
			this.realRepo.getAuctions()
				.then(auctions => {
					let cars = auctions.map(c => new Car(c.UserId, c.Make, c.Model, c.Year, "No API Data for Mileage", c.Zip, c.Description, c.Price, c.StartTime, c.EndTime, +c.AuctionId));
					this.setState({auctions: cars});
				});
		}
}


export default HomeLanding;