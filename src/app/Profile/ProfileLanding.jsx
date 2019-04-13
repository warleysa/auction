import React from 'react';
import { Department } from './../../models';
import { TestRepo } from '../../api/testRepo';
import { Header } from './../Header';
import { AuctionList } from './../Auction/AuctionList';
import { ProfilePage } from './ProfilePage'

export class ProfileLanding extends React.Component {
		testRepo = new TestRepo;


    state = {
    };



    render() {
        return (
            <>
						<ProfilePage globalUserId={ this.state.globalUserId } isAdmin={ this.state.isAdmin }/>
            </>
        );
    }

		componentDidMount() {
		}
}


export default ProfileLanding;
