import React from 'react';
import { RealRepo } from '../../api/realRepo';
import  UsersList from './UsersList';
import spinner from '../loadingSpinner.gif';

export class UsersLanding extends React.Component {
	realRepo = new RealRepo();


    state = {
        users: []
    };


    render() {
        if(this.state.users.length > 0){
            return (
                <div className="container">
                    <UsersList users={this.state.users} activeUserId={this.props.userInfo.currentUserId}/>
                </div>
            );
        }

        return(
            <img src={spinner} 
                 alt="loading"
                 className="loading-div"/>
        )
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
