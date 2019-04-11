import React, { Component } from 'react';
import { Account, Department } from './../../models';
import { TestRepo } from '../../api/testRepo';
import { Redirect } from 'react-router-dom';
import { Header } from './../Header';
import { AuctionList } from './../Auction/AuctionList';

export class ProfileLanding extends React.Component {
		testRepo = new TestRepo;


    state = {
    };


    render() {
        return (
            <>
						<Header/>
            </>
        );
    }

		componentDidMount() {
		}
}


export default ProfileLanding;
