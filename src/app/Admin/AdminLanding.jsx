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


		handleChange(input) {
	      console.log(input.file);
				let changedFile = input.file[0].toString('base64');
				let idCardBase64 = '';
				this.getBase64(input.file[0], (result) => {
			     idCardBase64 = result;
					 console.log(idCardBase64);
					 console.log(input.id);
					 this.realRepo.setAuctionImage(idCardBase64, input.id)
					 .then(p => {
						 console.log(this.state);
					 });
				 });
	  }

		getBase64(file, cb) {
	    let reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onload = function () {
	        cb(reader.result)
	    };
	    reader.onerror = function (error) {
	        console.log('Error: ', error);
	    };
		}

		// setImage(image){
		// 	this.setState({ image: image })
		// }


    render() {
        return (
            <>
						<AdminPage auctions={this.state.auctions} users={this.state.users}
                        onDelete={x => this.onDelete(x)}
												handleChange={(x) => this.handleChange(x)}/>
            </>
        );
    }

		componentDidMount() {
			this.realRepo.getAuctions()
				.then(auctions => {
                    let cars = auctions.map(c => new Car(c.UserId, c.Make, c.Model, c.Year, c.Mileage, c.Color, c.Zip, c.Description, c.Price, c.StartTime, c.EndTime, +c.AuctionId));
                    cars.map((c,i) => c['UserName']= auctions[i].Username);
					this.setState({auctions: cars});
                });

            this.realRepo.getUsersAdmin()
            .then(users => {
                    let accounts = users.map(a => new User(a.UserId, a.Username, a.FirstName, a.LastName, a.Address, a.City, a.State, a.Zip, a.DateCreated));
                    this.setState({users: accounts});
            });


        }


}

export default AdminLanding;
