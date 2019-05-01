import React from 'react';
import { Link } from 'react-router-dom';
var zipcodes = require('zipcodes');

export const AdminPage = (props) => (
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
								</tr>
							</thead>

							<tbody>
								{
									props.auctions.map((a, i) =>
									<tr key={i}>

										<td>{ `${a.make} - ${a.model} (${a.year})` }</td>
										<td>${ a.auction_reserve_price}</td>
										<td>{ a.time_left }</td>
										<td>{ a.userId}</td>
										<td>{ a.UserName}</td>
										<td>
											<button className="btn btn-sm btn-danger"
												onClick={e => props.onDelete(a.auctionId)}>
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
								props.users.map((u, i) =>
								<tr key={i}>

									<td>{u.userId}</td>
									<td>{u.username}</td>
									<td>{u.first_name+" "+u.last_name}</td>
									<td>{ u.city + ", "+ u.state_code}</td>
									<td>
										{/* <div className="btn-group"> */}
										<button className="btn btn-sm btn-info mr-3">
											View Comments
										</button>
										<button className="btn btn-sm btn-warning">
											Change Password
										</button>
										{/* </div> */}
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
);

export default AdminPage;
