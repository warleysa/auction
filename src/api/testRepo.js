import axios from 'axios';

export class TestRepo {
    url = "http://18.191.249.64:4444/api";
		config = {
        headers: {
            Authorization: 'swarley'
        }
    };

    registerUser(username, password, first_name, last_name) {
			return new Promise((resolve, reject) => {
					axios.post(`${this.url}/register`, username, password, first_name, last_name, this.config)
							.then(resp => resolve(resp.data))
							.catch(resp => alert(resp));
			});
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
            axios.get(`${this.url}/products`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

		getAuction(auctionId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/product/${auctionId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}
