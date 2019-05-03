import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from './images/logo.ico';

export class Header extends React.Component {

	setAuthSignOut() {
		this.props.setAuthState(false);
	}

	render() {
		return (
			<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
					<NavLink to="/home" className="">
						<img src={ logo } className="mx-auto p-2" alt="Logo" height="50" width="50"/>
					</NavLink>
					<a className="navbar-brand" href="/home">Luigi's Car Auction</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<ul className="navbar-nav">
							<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
								<NavLink to="/home" className="nav-item nav-link" activeClassName="active">
									<i className="fas fa-home"></i>&nbsp;
									Home
								</NavLink>
							</li>
							<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
								<NavLink to="/auctions" className="nav-item nav-link" activeClassName="active">
									<i className="fas fa-car-side"></i>&nbsp;
									 Auctions
								</NavLink>
							</li>
						</ul>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item" hidden={ this.props.isAuthenticated } data-toggle="collapse" data-target=".navbar-collapse.show">
								<NavLink to="/login" className="nav-item nav-link" activeClassName="active">
									<i className="fa fa-sign-in"></i>&nbsp;
										Login
								</NavLink>
							</li>
							<li className="nav-item" hidden={ this.props.isAuthenticated } data-toggle="collapse" data-target=".navbar-collapse.show">
								<NavLink to="/register" className="nav-item nav-link" activeClassName="active">
									<i className="fa fa-edit"></i>&nbsp;
										Register
								</NavLink>
							</li>
							<li className="nav-item" hidden={ !this.props.isAuthenticated } data-toggle="collapse" data-target=".navbar-collapse.show">
								<NavLink to="/users" className="nav-link" activeClassName="active">
									<i className="fas fa-users"></i>&nbsp;
										Users
								</NavLink>
							</li>

							<li className="nav-item dropdown mb-2" hidden={ !this.props.isAuthenticated }>
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">My Account</a>
								<div className="dropdown-menu dropdown-menu-right">
									<li className="dropdown-item" hidden={ !this.props.isAuthenticated } data-toggle="collapse" data-target=".navbar-collapse.show">
										<NavLink to="/profile" className="nav-link" activeClassName="active">
											<i className="fas fa-user"></i>&nbsp;
												My Profile
										</NavLink>
									</li>
									<li className="dropdown-item" hidden={ !this.props.isAdmin } data-toggle="collapse" data-target=".navbar-collapse.show">
										<NavLink to="/admin" className="nav-link" activeClassName="active">
											<i className="fas fa-lock"></i>&nbsp;
												Admin Viewer
										</NavLink>
									</li>
									<div className="dropdown-divider"></div>
										<li className="dropdown-item" hidden={ !this.props.isAuthenticated } data-toggle="collapse" data-target=".navbar-collapse.show">
											<NavLink to="/home" onClick={() => this.setAuthSignOut()} className="nav-link" activeClassName="active">
												<i className="fa fa-sign-out"></i>&nbsp;
													Sign Out
											</NavLink>
										</li>
									</div>
								</li>
							</ul>
						</div>
					</nav>
				</>
			);
		}

	componentDidMount() {
	}
}
