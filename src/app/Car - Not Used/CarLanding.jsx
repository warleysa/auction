import React from 'react';
import { CarList } from './CarList';
import { AccountRepository } from '../../api';
import { Link } from 'react-router-dom';


export class CarLanding extends React.Component {
	accountRepository = new AccountRepository;

	state = {
		accounts: []
	}

	onDelete(accountId) {
		if(window.confirm('Are you sure you want to delete?')) {
			this.accountRepository.deleteAccount(accountId)
				.then(() => {
					this.setState(state => ({
						accounts: state.accounts.filter(x => x.id !== accountId)
					}))
				});
		}
	}

	render() {
		return (
			<>
				<Link to="/new" className="btn btn-success float-right mb-2">
						<i className="fa fa-edit"></i>&nbsp;
						New Account
				</Link>
				{!!this.state.accounts.length && <CarList accounts={this.state.accounts} onDelete={a => this.onDelete(a)}/>}
			</>
		)
	}

	componentDidMount() {
		this.accountRepository.getAccounts()
      .then(accounts => this.setState({ accounts }));
	}
}
