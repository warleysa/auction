import React from 'react';
import { TestRepo } from '../../api/testRepo';
import UserProfile from './UserProfile';

export class ProfileLanding extends React.Component {
		testRepo = new TestRepo;


    state = {
    };



    render() {
        return (
            <>
							<UserProfile profileInfo={ this.state.profile } userInfo={ this.state.userInfo }/>
            </>
        );
    }


		componentDidMount() {
			if(this.props.match) {
			let userId = +this.props.match.params.userId;
				this.testRepo.getUserInfo(userId)
				.then(p => {
					this.setState({profile: p});
					console.log(this.state);
				});
			}
		}
}


export default ProfileLanding;
