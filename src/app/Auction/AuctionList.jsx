/* eslint eqeqeq: "off" */
import React from 'react';
import { Link } from 'react-router-dom';

// 'SELECT A.UserId, AuctionId, StartTime, EndTime, Price, Make, Model, Year, A.Zip, Description, Username From Auctions A JOIN Users ON Users.UserId = A.UserId ORDER BY StartTime DESC;'


export const AuctionList = (props) => (
	<div className="container mt-2">
		<div className="row">
			{
				props.auctions.map((a, i) =>
				<div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={i}>
					<div className="card">
						<img className="card-img-top p-3" alt={a.model} src="http://distinctivecartoyz.com/wp-content/uploads/2017/04/lambo-vect.png" />
						<div className="card-block p-3">
							<h4 className="card-title">{`${a.make} - ${a.model} (${a.year})`}</h4>
							<span className="badge badge-primary">${ p.price }</span>
							<div className="card-text">
								<p>{ a.name }</p>
								<p><b>Color:</b> { a.color }</p>
								<p><b>Distance from --zip--:</b> { a.color }</p>
								<p><b>Time left:</b> { a.time_left }</p>
							</div>
						</div>
						<div className="card-footer">
							<Link to={`/auction/${ a.AuctionId }`} className="btn btn-primary float-right">
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
