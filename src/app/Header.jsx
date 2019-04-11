import React from 'react';

import { NavLink } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';

export const Header = (props) => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	  <a className="navbar-brand" href="#">Car Auction</a>
	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>
	  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	    <div className="navbar-nav">
				<NavLink to="/home" className="nav-item nav-link" activeClassName="active">
						<i className="fa"></i>&nbsp;
						Home
				</NavLink>
					<NavLink to="/login" className="nav-item nav-link" activeClassName="active">
							<i className="fa fa-sign-in"></i>&nbsp;
							Login
					</NavLink>
					<NavLink to="/register" className="nav-item nav-link" activeClassName="active">
							<i className="fa fa-edit"></i>&nbsp;
							Register
					</NavLink>
					<NavLink to="/auctions" className="nav-item nav-link" activeClassName="active">
							<i className="fa"></i>&nbsp;
							Auctions
					</NavLink>
	    </div>
	  </div>
	</nav>
);
