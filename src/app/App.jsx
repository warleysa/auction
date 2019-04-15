import React, { Component } from 'react';
import { Header } from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StorageManage } from './../StorageManage';


import ROUTES from './../routes.js';

class App extends Component {

	storage = new StorageManage();

	state = {
		isAuthenticated: this.storage.getAuthStatus(),
		currentUserId: this.storage.getUserId()
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


  render() {
    return (
      <>
				<Router>
					{ <Header isAuthenticated={ this.state.isAuthenticated } setAuthState={ (auth, userId) => this.setAuthState(auth, userId) } /> }
					<Switch>
						{ ROUTES.map(({path, component: C, getAuthStatus}, i) => (
							<Route
								key={i}
								path={path}
								render={ (props) => <C {...props} userInfo={ {isAuthenticated: this.state.isAuthenticated, currentUserId: this.state.currentUserId } }
								 									setAuthState={(auth, userId) => this.setAuthState(auth, userId) } /> } />
						))}

					</Switch>
				</Router>
      </>
    );
  }
}

 // => <Route path={x.path} key={x.path} {...x} />)


export default App;
