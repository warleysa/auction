/* eslint eqeqeq: "off" */
import React from 'react';
import {RealRepo} from '../../api/realRepo';
import {AdminPage} from './AdminPage';
import {Car} from './../../models/car';
import {User} from './../../models/user';

export class AdminLanding extends React.Component {

    realRepo = new RealRepo();


    state = {
        auctions: [],
		users: [],
    };

    onDelete(auctionId){
        if(window.confirm("Are you sure?")){
            this.realRepo.deleteAuction(auctionId)
                .then(()=> {
                    this.setState(state => ({
                        auctions: state.auctions.filter(x => x.auctionId != auctionId)
                    }))
                });
        }
	}

	onChangeAdmin(userId){
        if(window.confirm("Are you sure you want to make them admin?")){
            this.realRepo.changeAdmin(userId)
                .then(()=> {

					let accounts = this.state.users;
					accounts[userId-1].IsAdmin = !accounts[userId-1].IsAdmin;
                    this.setState(state => ({
						users: accounts,

                    }))
                });
        }
	}

	onChangePassword(username,password){
		this.realRepo.changePassword(username,password)
			.then(()=>{
				window.alert("You successfully changed the user's password")}
			)
	}


		handleChange(input) {
				let idCardBase64 = '';
				this.getBase64(input.file[0], (result) => {
			     idCardBase64 = result;
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
						handleChange={(x) => this.handleChange(x)}
						onChangePassword={(x)=>this.onChangePassword(x)}
						onChangeAdmin={(X)=>this.onChangeAdmin(X)}
						/>
            </>
        );
    }

		componentDidMount() {
			this.realRepo.getAuctions()
				.then(auctions => {
                    let cars = auctions.map(c => new Car(c.UserId, c.Make, c.Model, c.Year, c.Mileage, c.Color, c.Zip, c.Description, c.Price, c.StartTime, c.EndTime, +c.AuctionId, c.Image));
                    cars.map((c,i) => c['UserName']= auctions[i].Username);
					this.setState({auctions: cars});
                });

            this.realRepo.getUsers()
            .then(users => {
                    let accounts = users.map(a => new User(a.UserId, a.Username, a.FirstName, a.LastName, '', '', '', a.Zip, a.DateCreated));
                    accounts.map((a,i) => a['rating']= users[i].AvgRating);
                    this.setState({users: accounts});
			});

			this.realRepo.getUsersAdmin()
			.then(admins => {
				let accounts = this.state.users;
				accounts.map((a,i)=> a['IsAdmin']=admins[i].IsAdmin);
				this.setState({users:accounts});
			});


        }


}

export default AdminLanding;
