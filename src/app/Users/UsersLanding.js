import React from 'react';
import { RealRepo } from '../../api/realRepo';
import  UserList from './UserList';


export class UsersLanding extends React.Component {
	realRepo = new RealRepo();


    state = {
        users: []
    };


    render() {
        return (
            <div className="container">
				<UserList users={this.state.users} />
            </div>
        );
    }

		componentDidMount() {

            let temp2= [
                {
                    FirstName: "first1",
                    LastName: "last1",
                    DateCreated: "00-00-00",
                    avg_rating: 2,
                    cars_listed: 99,
                    UserId: 1
                }, 
                {
                    FirstName: "first2",
                    LastName: "last2",
                    DateCreated: "00-00-00",
                    avg_rating: 2,
                    cars_listed: 99,
                    UserId: 2
                }, 
                {
                    FirstName: "first3",
                    LastName: "last3",
                    DateCreated: "00-00-00",
                    avg_rating: 2,
                    cars_listed: 99,
                    UserId: 3
                }, 
                {
                    FirstName: "first4",
                    LastName: "last4",
                    DateCreated: "00-00-00",
                    avg_rating: 2,
                    cars_listed: 99,
                    UserId: 4
                }
            ];

            this.setState({users: temp2});

		}
}


export default UsersLanding;

