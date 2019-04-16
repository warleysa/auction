/* eslint eqeqeq: "off" */
import React from 'react';
import { Link } from 'react-router-dom';

export const AuctionList = (props) => (
	<div class="container mt-2">
		<div className="row">
			{
				props.auctions.map((p, i) =>
				<div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={i}>
					<div className="card">
						<img className="card-img-top p-3" alt={p.name} src={p.image} />
						<div className="card-block p-3">
							<h4 className="card-title">{p.name}</h4>
							<span className="badge badge-primary">${ p.price }</span>
							<div className="card-text">
								<p>{ p.name }</p>
								<p><b>Color:</b> { p.color }</p>
							</div>
						</div>
						<div className="card-footer">
							<Link to={`/auction/${ p.id }`} className="btn btn-primary float-right">
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
