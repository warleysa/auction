import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import logo from './logo.ico';



export class Header extends React.Component {

	setAuthSignOut() {
		this.props.setAuthState(false);
	}

	render() {
		return (
			<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
				<NavLink to="/" className="">
					<img src={ logo } className="mx-auto p-2" alt="Logo" height="50" width="50"/>
				</NavLink>
				<a className="navbar-brand" href="/">Luigi's Car Auction</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="/" className="nav-item nav-link" activeClassName="active">
								<i className="fa"></i>&nbsp;
									Home
								</NavLink>
							</li>
							<li className="nav-item" hidden={ this.props.isAuthenticated }>
								<NavLink to="/login" className="nav-item nav-link" activeClassName="active">
									<i className="fa fa-sign-in"></i>&nbsp;
										Login
									</NavLink>
								</li>
								<li className="nav-item" hidden={ this.props.isAuthenticated }>
									<NavLink to="/register" className="nav-item nav-link" activeClassName="active">
										<i className="fa fa-edit"></i>&nbsp;
											Register
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/auctions" className="nav-item nav-link" activeClassName="active">
											<i className="fa"></i>&nbsp;
												Auctions
											</NavLink>
										</li>
									</ul>
									<ul className="navbar-nav ml-auto">
										<li className="nav-item" hidden={ !this.props.isAuthenticated }>
											<NavLink to="/profile" className="nav-link" activeClassName="active">
												<i className="fa"></i>&nbsp;
													Profile
												</NavLink>
											</li>
											<li className="nav-item" hidden={ !this.props.isAuthenticated }>
												<NavLink to="/admin" className="nav-link" activeClassName="active">
													<i className="fa"></i>&nbsp;
														Admin Viewer
													</NavLink>
												</li>
												<li className="nav-item" hidden={ !this.props.isAuthenticated }>
													<NavLink to="/home" onClick={() => this.setAuthSignOut()} className="nav-link" activeClassName="active">
														<i className="fa sign-out"></i>&nbsp;
															Sign Out
														</NavLink>
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
