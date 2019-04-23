import React, { Component } from 'react';
import { Header } from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StorageManage } from './../StorageManage';
import { Container } from 'react-bootstrap';


import ROUTES from './../routes.js';

class App extends Component {

	storage = new StorageManage();

	state = {
		isAuthenticated: this.storage.getAuthStatus(),
		currentUserId: this.storage.getUserId(),
		userZipCode: this.storage.getZipCode()
	}

	setAuthState(auth, userId) {
		console.log("Setting UserID to: " + userId);
		if(auth == true) {
			console.log("Logging In");
			this.storage.setAuthStatus(true, userId);
			this.setState(state => {
	      state.isAuthenticated = true;
				state.currentUserId = +userId;
	      return state;
	    });
		} else {
			console.log("Logging out");
			this.storage.setAuthStatus(false);
			this.setState(state => {
	      state.isAuthenticated = false;
				state.currentUserId = '';
	      return state;
	    });
		}
	}

	setZipCode(zip) {
		this.storage.setZipCode(zip);
		this.setState(state => {
			state.userZipCode = zip;
			return state;
		});
	}


  render() {
    return (
      <>
			<div className="container-fluid p-0">
				<Router>
					<Header isAuthenticated={ this.state.isAuthenticated } setAuthState={ (auth, userId) => this.setAuthState(auth, userId) } />
					<Switch>
						{ ROUTES.filter(x => this.state.isAuthenticated || !x.authRequired).map(({path, component: C, getAuthStatus}, i) => (
							<Route
								key={i}
								path={path}
								render={ (props) => <C {...props} userInfo={ {isAuthenticated: this.state.isAuthenticated, currentUserId: this.state.currentUserId, userZipCode: this.state.userZipCode } }
								 									setAuthState={(auth, userId) => this.setAuthState(auth, userId) } setZipCode={zip => this.setZipCode(zip)} /> } />
						))}
					</Switch>
				</Router>
				</div>
      </>
    );
  }
}

 // => <Route path={x.path} key={x.path} {...x} />)


export default App;
