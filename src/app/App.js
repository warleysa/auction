import React, { Component } from 'react';
import { Header } from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ROUTES from './../routes.js';

class App extends Component {

  state = {
    editMode: false
  };

  onToggleEditMode () {
    this.setState(state => ({ editMode: !state.editMode }));
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
				<Router>
					<Switch>
						{ ROUTES.map(x => <Route key={x.path} {...x}/>) }
					</Switch>
				</Router>
      </>
    );
  }
}


export default App;
