import React, { Component } from 'react';
import { Account, Department } from './../../models';
import { TestRepo } from '../../api/testRepo';
import { Redirect } from 'react-router-dom';
import { Header } from './../Header';
import { AuctionList } from './AuctionList';

export class AuctionLanding extends React.Component {
	testRepo = new TestRepo;


    state = {
        auctions: []
    };


    render() {
        return (
            <>
						<Header/>
						<AuctionList auctions={this.state.auctions}/>
            </>
        );
    }

		componentDidMount() {
			this.testRepo.getAuctions()
	      .then(auctions => this.setState({ auctions }));
		}
}


export default AuctionLanding;
