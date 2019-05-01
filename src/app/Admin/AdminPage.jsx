import React from 'react';
import { Link } from 'react-router-dom';
var zipcodes = require('zipcodes');

export class AdminPage extends React.Component{

	render(){
		return(
		<div className="m-5">
		<div className="w-100">
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a className="nav-link active" href="#auction"  role="tab" data-toggle="tab" aria-controls="auction" aria-selected="true">Auctions</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#account" role="tab" data-toggle="tab" aria-controls="account" aria-selected="false">Accounts</a>
				</li>
			</ul>

			<div className="tab-content w-100" id="myTabContent">
				<div className="tab-pane fade show active" id="auction" role="tabpanel" aria-labelledby="auction-tab">
					<div className="table-responsive">
						<table className="table table-striped table-condensed">
							<thead>
								<tr>
									<th>Model</th>
									<th>Price</th>
									<th>Time left</th>
									<th>Seller ID</th>
									<th>Seller Name</th>
									<th>Picture</th>
									<th></th>
								</tr>
							</thead>

							<tbody>
								{
									this.props.auctions.map((a, i) =>
									<tr key={i}>

										<td>{ `${a.make} - ${a.model} (${a.year})` }</td>
										<td>${ a.auction_reserve_price}</td>
										<td>{ a.time_left }</td>
										<td>{ a.userId}</td>
										<td>{ a.UserName}</td>
										<td>
											<label class="btn btn-outline-primary btn-sm w-100" id="profilePictureUpload">
												Pic
												<i className="far fa-edit float-right m-1"></i>
												<input type="file" className="d-none" onChange={ (e) => this.props.handleChange({file: e.target.files, id: a.auctionId}) } />
											</label>
										</td>
										<td>
											<button className="btn btn-sm btn-danger"
												onClick={e => this.props.onDelete(a.auctionId)}>
												<i className="fa fa-trash"></i>
											</button>
										</td>
									</tr>
								)
							}
						</tbody>
					</table>
				</div>
			</div>

			<div className="tab-pane fade show" id="account" role="tabpanel" aria-labelledby="account-tab">
				<div className="table-responsive">
					<table className="table table-striped table-condensed">
						<thead>
							<tr>
								<th>UserID</th>
								<th>User Name</th>
								<th>Name</th>
								<th>Location</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							{
								this.props.users.map((u, i) =>
								<tr key={i}>

									<td>{u.userId}</td>
									<td>{u.username}</td>
									<td>{u.first_name+" "+u.last_name}</td>
									<td>{ u.city + ", "+ u.state_code}</td>
									<td>
										<button className="btn btn-sm btn-outline-info">
											View Comments
										</button>
									</td>
									<td>
										<button className="btn btn-sm btn-outline-warning">
											Change Password
										</button>
									</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
</div>

	)};
}
	
export default AdminPage;
