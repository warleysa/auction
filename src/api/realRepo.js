/* eslint eqeqeq: "off" */
import axios from 'axios';

import { StorageManage } from './../StorageManage';


export class RealRepo {
		storage = new StorageManage();

    url = "http://3.17.178.4:4444";
		config = {
        headers: {
            Authorization: 'swarley'
        }
    };

    registerUser(username, password, firstName, lastName) {
			console.log("Registering Usering... API Side");
			return new Promise((resolve, reject) => {
					axios.post(`${this.url}/register`, username, password, firstName, lastName, this.config)
							.then(resp => resolve(resp.data))
							.catch(resp => alert(resp));
			});
    }

		loginUser(username, password) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/users/login`, username, password, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

		checkUsername(username) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/checkuser/${username}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}
