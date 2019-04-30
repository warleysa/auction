import React from 'react';
import {RealRepo} from '../../api/realRepo';
import {AdminPage} from './AdminPage';
import {Car} from './../../models/car';
import {User} from './../../models/user';

export class AdminLanding extends React.Component {

    realRepo = new RealRepo();


    state = {
        auctions: [],
        users: []
    };

    onDelete(auctionId){
        if(window.confirm("Are you sure")){
            this.realRepo.deleteAuction(auctionId)
                .then(()=> {
                    this.setState(state => ({
                        auctions: state.auctions.filter(x => x.auctionId != auctionId)
                    }))
                });
        }
    }


    render() {
        return (
            <>
						<AdminPage auctions={this.state.auctions} users={this.state.users}
                        onDelete={x => this.onDelete(x)}/>
            </>
        );
    }

		componentDidMount() {
			this.realRepo.getAuctions()
				.then(auctions => {
					let cars = auctions.map(c => new Car(c.UserId, c.Make, c.Model, c.Year, "No API Data for Mileage", c.Zip, c.Description, c.Price, c.StartTime, c.EndTime, +c.AuctionId));
					this.setState({auctions: cars});
                });

            this.realRepo.getUsers()
            .then(users => {
                    let accounts = users.map(a => new User(a.UserId, a.Username, a.FirstName, a.LastName, a.Address, a.City, a.State, a.Zip, a.DateCreated));
                    this.setState({users: accounts});
            });
	
                
        }
          
        
}

export default AdminLanding;
