import axios from 'axios';

import { StorageManage } from './../StorageManage';


export class TestRepo {
		storage = new StorageManage();

    url = "http://3.16.180.80:4444/api";
		config = {
        headers: {
            Authorization: 'swarley'
        }
    };

    registerUser(username, password, first_name, last_name) {
			console.log("Registering Usering... API Side");
			return new Promise((resolve, reject) => {
					axios.post(`${this.url}/register`, username, password, first_name, last_name, this.config)
							.then(resp => resolve(resp.data))
							.catch(resp => alert(resp));
			});
    }

		getUserInfo(userId) {
			console.log("Local Storage: " + this.storage.getUserId() + ", Passed in: " + userId);
			if(this.storage.getUserId() == userId) {
				return new Promise((resolve, reject) => {
						axios.get(`${this.url}/userPrivate/${userId}`, this.config)
								.then(resp => resolve(resp.data))
								.catch(resp => alert(resp));
				});
			} else {
				return new Promise((resolve, reject) => {
						axios.get(`${this.url}/user/${userId}`, this.config)
								.then(resp => resolve(resp.data))
								.catch(resp => alert(resp));
				});
			}
    }

		loginUser(username, password) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/login`, username, password, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

		checkUsername(username) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/checkuser`, username, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

		getAuctions() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/auctions`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

		getAuction(auctionId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/auction/${auctionId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}
