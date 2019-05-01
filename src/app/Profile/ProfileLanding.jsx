import React from 'react';
import { RealRepo } from '../../api/realRepo';
import UserProfile from './UserProfile';
import { User } from './../../models/user';
import { Car } from './../../models/car';
import { Alert } from 'react-bootstrap';

export class ProfileLanding extends React.Component {
		apiRepo = new RealRepo;


    state = {
			alertShow: false,
			alertMessage: ''
    };

		getProfileInfo() {
			return this.state;
		}

		setProfileInfo(user) {
			this.apiRepo.updateUser(user)
				.then(user => {
					this.setState({
						alertMessage: "Successfully Updated Profile Information",
						alertShow: true,
						profile: this.user
					});
					this.props.setZipCode(user.zip);
				}
			 );
		}

		onDismissAlert() {
			this.setState({ alertShow: false });
		};

    render() {
        return (

            <>
							<div className="mb-4">
								<Alert dismissible variant="success" show={ this.state.alertShow } onClose={() => this.onDismissAlert()} className="text-center fixed-top w-75 mx-auto mt-3">
									{ this.state.alertMessage }
								</Alert>
								<UserProfile userInfo={ this.state.profile } carData={ this.state.cars } setProfileInfo={(p) => this.setProfileInfo(p)} getProfileInfo={() => this.getProfileInfo() }/>
							</div>
            </>
        );
    }


		componentDidMount() {
			if(this.props.match) {
				let userId = +this.props.match.params.userId;
					this.apiRepo.getUserInfo(userId)
					.then(p => {
						let userInfo = new User(p.UserId, p.Username, p.FirstName, p.LastName, p.Address, p.City, p.State, p.Zip, p.DateCreated.slice(0,10), p.ProfilePicture);
						this.setState({profile: userInfo});
					});

					this.apiRepo.getAuctionsByUser(userId)
					.then(res => {
						let cars = res.map(c => new Car(c.UserId, c.Make, c.Model, +c.Year, c.Mileage, c.Color, c.Zip, c.Description, c.Price, c.StartTime, c.EndTime, +c.AuctionId, c.Image));
						this.setState({cars: cars});
					});
			}
		}
}


export default ProfileLanding;
