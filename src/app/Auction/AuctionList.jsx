/* eslint eqeqeq: "off" */
import React from 'react';
import { Link } from 'react-router-dom';
var zipcodes = require('zipcodes');

// 'SELECT A.UserId, AuctionId, StartTime, EndTime, Price, Make, Model, Year, A.Zip, Description, Username From Auctions A JOIN Users ON Users.UserId = A.UserId ORDER BY StartTime DESC;'

export const AuctionList = (props) => (
	<div className="container mt-2">
		<div className="row">
			{
				props.auctions.map((a, i) =>
				<div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={i}>
					<div className="card">
						<img className="card-img-top p-3" alt={a.model} src={a.imageURL} />
						<div className="card-block p-3">
							<h4 className="card-title">{`${a.make} - ${a.model} (${a.year})`}</h4>
							<span className="badge badge-primary">${ a.auction_reserve_price }</span>
							<div className="card-text">
								<p>{ a.name }</p>
								<p><b>Color: </b> { a.color }</p>
								{ props.userZipCode && <p><b>Distance from { props.userZipCode }:</b> { zipcodes.distance(props.userZipCode, a.zip) } mi</p> }
								<p><b>Located in: </b> { a.zip }</p>
								<p><b>Time left:</b> { a.time_left }</p>
							</div>
						</div>
						<div className="card-footer">
							<Link to={`/auction/${ a.auctionId }`} className="btn btn-primary float-right">
									View
							</Link>
						</div>
					</div>
				</div>
			)
		}
	</div>
</div>
);

export default AuctionList;
