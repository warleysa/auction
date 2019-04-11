import React, { Component } from 'react';
import { ProductReview } from './../../models/productReview';
import Rating from './Rating';

class ReviewForm extends Component {

  state = {
    userName: '',
    rating: '',
    comment: '',
		ratingValues: [1,2,3,4,5]
  }

  onSubmit(){
    this.props.onNewReview(new ProductReview(this.state.rating, this.state.userName, this.state.comment));
		this.setState({
			userName: '',
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
		          <div className="form-group col-md-8">
		            <label htmlFor="userName">Your Name</label>
		            <input type="text"
		              id="userName"
		              name="userName"
		              className="form-control"
		              value={this.state.userName}
		              onChange={ e => this.setState({ userName: e.target.value }) }/>
		          </div>
							<div className="form-group col-md-2">
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
							<div className="my-auto">
								<Rating value={ this.state.rating }/>
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
							className="btn btn-primary">
							Submit
						</button>
					</div>
				</div>
      </div>
    )
  }
}

export default ReviewForm;
