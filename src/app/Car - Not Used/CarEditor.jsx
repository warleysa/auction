import React, { Component } from 'react';
import { Account, Department } from './../../models';
import { AccountRepository } from '../../api';
import { Redirect } from 'react-router-dom';
import { Header } from './../Header';

export class CarEditor extends React.Component {
	accountRepository = new AccountRepository;

    departments = [
        new Department(1, "HR"),
        new Department(2, "Marketing"),
        new Department(3, "Accounting"),
        new Department(4, "IT")
    ];

    state = {
        name: '',
        email: '',
        isEmployee: false,
        departentId: 0,
				redirect: ''
    };

    onSubmit() {
			let accountId = +this.props.match.params.accountId;
			if(accountId) {
				this.accountRepository.updateAccount(accountId, this.state)
					.then(() => this.setState({ redirect: '/' }));
			} else {
				this.accountRepository.addAccount(this.state)
					.then(() => this.setState({ redirect: '/' }));
			}
    }

    render() {
			if(this.state.redirect) {
				return <Redirect to={this.state.redirect}/>
			}
        return (
            <>
						<Header/>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            id="email"
                            name="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="isEmployee">
                            <input type="checkbox"
                                id="isEmployee"
                                name="isEmployee"
                                checked={this.state.isEmployee}
                                onChange={e => this.setState({ isEmployee: e.target.checked })} />
                            Is Employee
                    </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="departentId">Department</label>
                        <select id="departentId"
                            name="departentId"
                            className="form-control"
                            value={this.state.departentId}
                            onChange={e => this.setState({ departentId: e.target.value })} >
                            <option></option>
                            {
                                this.departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)
                            }
                        </select>
                    </div>
                </form>
                <div>
                    <button onClick={e => this.onSubmit()}
                            className="btn btn-primary">
                        Save
                    </button>
                </div>
            </>
        );
    }

		componentDidMount() {
			let accountId = +this.props.match.params.accountId;
			if (accountId) {
				this.accountRepository.getAccount(accountId)
					.then(account => this.setState(account));
			}
		}
}


export default CarEditor;
