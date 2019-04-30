import React, { Component } from 'react';
import { SellerReview } from './../../models/sellerReview';
import Rating from './Rating';
import { RealRepo } from '../../api/realRepo';

class SellerReviewForm extends Component {
    realRepo = new RealRepo();
    state = {
        currentUserId: this.props.activeUserId,
        sellerUserId: this.props.sellerUserId,
        rating: '',
        comment: '',
	    ratingValues: [1,2,3,4,5]
    }

  onSubmit(){
    let review = new SellerReview(this.state.sellerUserId, this.state.currentUserId, this.state.comment, this.state.rating);
    this.realRepo.postReview(review);
		this.setState({
	        rating: '',
	        comment: ''
		});
  }



  render () {
    return (
      <div className="card mt-4">
		<p className="card-header bg-secondary text-white"><b>Add Review</b></p>
			<div className="p-3">
	            <form id="comment-form">
					<div className="row">
                        <div className="col-md-8 pt-4">
                            <Rating value={ this.state.rating }/>
		                </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="rating">Rating</label>
							<select id="rating"
								name="rating"
						    	className="form-control"
								value={this.state.rating}
				    			onChange={ e => this.setState({ rating: e.target.value }) }>
									<option></option>
									{
										this.state.ratingValues.map((x,y) => <option key={y} value={x}>{x}</option>)
									}
							</select>
		                </div>
						
						
					</div>


					<div className="form-group">
	                    <label htmlFor="comment">Comment</label>
	                    <textarea type="text"
								  rows="4"
                                  id="comment"
                                  name="comment"
                                  className="form-control"
                                  value={this.state.comment}
                                  onChange={ e => this.setState({ comment: e.target.value }) }></textarea>
	                </div>

	            </form>
					<div>
						<button onClick={e => this.onSubmit()}
							className="btn btn-primary float-right">
							Submit
						</button>
					</div>
			</div>
      </div>
    )
  }
}

export default SellerReviewForm;
