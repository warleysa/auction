import React from 'react';
import {RealRepo} from '../../api/realRepo';
import {AdminPage} from './AdminPage';
import {Car} from './../../models/car';

export class AdminLanding extends React.Component {

    realRepo = new RealRepo();


    state = {
        auctions: []
    };


    render() {
        return (
            <>
						<AdminPage auctions={this.state.auctions}/>
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

export default AdminLanding;
