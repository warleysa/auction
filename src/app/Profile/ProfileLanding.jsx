import React from 'react';
import { RealRepo } from '../../api/realRepo';
import UserProfile from './UserProfile';
import { User } from './../../models/user';
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
			console.log("SETTING STATE: ");
			console.log(user);
			this.apiRepo.updateUser(user)
				.then(user => {
					this.setState({
						alertMessage: "Successfully Updated Profile Information",
						alertShow: true
					});
				}
			 );
			 return this.state;
		}



    render() {
        return (

            <>
							<Alert dismissible variant="success" show={ this.state.alertShow } onClose={() => this.hideLoginAlert()} className="text-center fixed-top w-75 mx-auto mt-3">
								{ this.state.alertMessage }
							</Alert>
							<UserProfile userInfo={ this.state } setProfileInfo={(p) => this.setProfileInfo(p)} getProfileInfo={() => this.getProfileInfo() }/>
            </>
        );
    }


		componentDidMount() {
			if(this.props.match) {
			let userId = +this.props.match.params.userId;
				this.apiRepo.getUserInfo(userId)
				.then(p => {
					this.setState(new User(p.UserId, p.Username, p.FirstName, p.LastName, p.Address, 'Atlanta', 'GA', p.Zip, p.DateCreated.slice(0,10)));
					console.log(this.state);
				});
			}
		}
}


export default ProfileLanding;
