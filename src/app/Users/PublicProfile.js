import React from 'react';
import { RealRepo } from '../../api/realRepo';
import { User } from '../../models/user';
import  Car from '../../models/car';
import {NavLink} from 'react-router-dom';
import PublicUserTile from './PublicUserTile';
import UserCarsList from './UserCarsList';

export class PublicProfile extends React.Component {
	realRepo = new RealRepo();


    state = {
       profile: {}
    };


    render() {
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <PublicUserTile profile={this.state.profile} activeUserId={this.props.userInfo.currentUserId}/>
                    </div>

                    <div className="col-md-8">
                        {this.state.profile.FirstName}'s Cars:
                        <UserCarsList cars={this.state.cars || []}/>
                    </div>
                </div>
                
            </div>
            
        );
    }

    componentDidMount() {
        console.log("Profile Landing mounting");
        if(this.props.match) {
            let profileUserId = +this.props.match.params.userId;
            console.log(`public Profile userID: ${profileUserId}`);
                this.realRepo.getUserRating(profileUserId)
                .then(p => {
                    this.setState({profile: p[0]});
                    console.log(this.state);
                });

                this.realRepo.getAuctionsByUser(profileUserId)
                .then(auctions => {
                    let carsList = auctions.map(c => new Car(c.UserId, c.Make, c.Model, c.Year, c.Color, c.Zip, c.Description, c.Price, c.StartTime, c.EndTime, c.AuctionId));
                    this.setState({cars: carsList});
                    console.log(this.state);
                });
        }
    }
}


export default PublicProfile;
