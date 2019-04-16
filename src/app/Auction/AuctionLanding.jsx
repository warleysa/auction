/* eslint eqeqeq: "off" */
import React from 'react';
import { TestRepo } from '../../api/testRepo';
import { AuctionList } from './AuctionList';

export class AuctionLanding extends React.Component {
	testRepo = new TestRepo();


    state = {
        auctions: []
    };


    render() {
        return (
            <>
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
