import React, { Component } from 'react';
import { AuctionBid } from '../../../models/auctionBid';


class BidForm extends Component {

  state = {
    userId: '',
    auctionId: '',
    price: ''
  }

  onSubmit(){
    this.props.onNewBid(new AuctionBid(this.props.userId, this.props.auctionId, this.state.price));
    console.log("created new auctionBid");
		this.setState({
            price: ''
		});
  }



  render () {
    return (
      <div className="card mt-4">
		<p className="card-header bg-secondary text-white"><b>Place a bid</b></p>
			<div className="p-3">
                <form id="bid-form">
                    <div className="row px-4">
                        <label htmlFor="bidValue">Enter your bid:</label>
                        <div class="input-group mb-3">
                            
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input  type="text" 
                                    className="form-control" 
                                    placeholder="5000" 
                                    aria-label="bidAmmount" 
                                    aria-describedby="bidValue"
                                    id="bidValue"
                                    name="bidValue"
                                    value={this.state.price}
                                    onChange={ e => this.setState({ price: e.target.value }) }/>

                            <div className="input-group-append">
                                <button className="btn btn-success" 
                                        type="button"
                                        onClick={e => this.onSubmit()}>Submit Bid</button>
                            </div>
                        </div>

                    </div>

                </form>

	        </div>
      </div>
    )
  }
}

export default BidForm;
