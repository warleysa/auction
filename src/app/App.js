import React, { Component } from 'react';
import { Header } from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StorageManage } from './../StorageManage';


import ROUTES from './../routes.js';

class App extends Component {

	storage = new StorageManage();

	state = {
		isAuthenticated: this.storage.getAuthStatus(),
		dogTest: 16325
	}

	setAuthState(s) {
		if(s == true) {
			console.log("Logging In");
			this.storage.setAuthStatus(true);
			this.setState(state => {
	      state.isAuthenticated = true;
	      return state;
	    });
		} else {
			console.log("Logging out");
			this.storage.setAuthStatus(false);
			this.setState(state => {
	      state.isAuthenticated = false;
	      return state;
	    });
		}
	}


  render() {
    return (
      <>
				<Router>
					{ <Header isAuthenticated={ this.state.isAuthenticated } setAuthState={e => this.setAuthState(e) } /> }
					<Switch>
						{ ROUTES.map(({path, component: C, getAuthStatus}, i) => (
							<Route
								key={i}
								path={path}
								render={ (props) => <C {...props} isAuthenticated={ this.state.isAuthenticated }
								 									setAuthState={e => this.setAuthState(e) } /> } />
						))}

					</Switch>
				</Router>
      </>
    );
  }
}

 // => <Route path={x.path} key={x.path} {...x} />)


export default App;
