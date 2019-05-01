import React from 'react';
import { RealRepo } from '../../api/realRepo';
import  UsersList from './UsersList';


export class UsersLanding extends React.Component {
	realRepo = new RealRepo();


    state = {
        users: []
    };


    render() {
        return (
            <div className="container">
				<UsersList users={this.state.users} activeUserId={this.props.userInfo.currentUserId}/>
            </div>
        );
    }

		componentDidMount() {

            this.realRepo.getUsers()
            .then(usersList => {
                this.setState({
                    users: usersList
                });
            });
            console.log("running component did mount in usersLanding.js");
        }
}


export default UsersLanding;
