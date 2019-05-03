/* eslint eqeqeq: "off" */
import axios from 'axios';

import { StorageManage } from './../StorageManage';


export class RealRepo {
		storage = new StorageManage();

    url = "http://18.191.136.226:4444";
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
				console.log("Login User... API Call");
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/user/login`, username, password, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

		checkUsername(username) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/checkuser/${username}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => console.log(resp));
        });
    }

		getUserInfo(userId) {
			console.log("Getting User Info... API Call");
			if(!userId) {
				userId = this.storage.getUserId();
				return new Promise((resolve, reject) => {
						axios.get(`${this.url}/user/${userId}`, this.config) //private
								.then(resp => resolve(resp.data))
								.catch(resp => console.log(resp));
				});
			}
			if(this.storage.getUserId() == userId) {
				return new Promise((resolve, reject) => {
						axios.get(`${this.url}/user/${userId}`, this.config) //private
								.then(resp => resolve(resp.data))
								.catch(resp => alert(resp));
				});
			} else {
				return new Promise((resolve, reject) => {
						axios.get(`${this.url}/user/${userId}`, this.config)
								.then(resp => resolve(resp.data))
								.catch(resp => console.log(resp));
				});
			}
    }

		updateUser(user) {
			console.log("Updating Usering... API Call PUT");

			return new Promise((resolve, reject) => {
					axios.put(`${this.url}/user`, user.apiJsonFormat(), this.config)
							.then(resp => resolve(resp.data))
							.catch(resp => alert(resp));
			});
    }

		postAuction(car) {
				console.log("Adding Car... API Call POST");
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/auction`, car.apiJsonFormat(), this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

		getAuctionsByUser(userId) {
				console.log("Getting Auctions... API Call GET");
				if(!userId) {
					userId = this.storage.getUserId();
	        return new Promise((resolve, reject) => {
	            axios.get(`${this.url}/auctions/user/${userId}`, this.config)
	                .then(resp => resolve(resp.data))
	                .catch(resp => console.log(resp));
	        });
				} else {
					return new Promise((resolve, reject) => {
	            axios.get(`${this.url}/auctions/user/${userId}`, this.config)
	                .then(resp => resolve(resp.data))
	                .catch(resp => console.log(resp));
					});
				}
    }

		getAuctions() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/auctions`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => console.log(resp));
        });
    }

		setProfileImage(profilePicture, userId) {
				console.log("Image Upload Profile... API Call");
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/image`, profilePicture, userId, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
		}

		setAuctionImage(auctionPicture, auctionId) {
				console.log("Image Upload Auction... API Call");
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/auction/image`, {image: auctionPicture, auctionId: auctionId} , this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
		}

		getUsersAdmin(){
			return new Promise((resolve, reject)=> {
				axios.get(`${this.url}/users`, this.config)
					.then(resp=> resolve(resp.data))
					.catch(resp=>console.log(resp));
			});
		}

		deleteAuction(auctionId){
			return new Promise((resolve, reject)=>{
				axios.delete(`${this.url}/auction/${auctionId}`,this.config)
					.then(resp=> resolve(resp.data))
					.catch(resp=>alert(resp));
			});
		}
		getUsers() {
			return new Promise((resolve, reject) => {
					axios.get(`${this.url}/usersPublic`, this.config)
							.then(resp => resolve(resp.data))
							.catch(resp => console.log(resp));
			});
		}

		getUserRating(userId){
			return new Promise((resolve, reject) => {
				axios.get(`${this.url}/user/rating/${userId}`, this.config)
						.then(resp => resolve(resp.data))
						.catch(resp => console.log(resp));
			});
		}

		getUserFeedback2(userId){
			return new Promise((resolve, reject) => {
				axios.get(`${this.url}/user/ratings/${userId}`, this.config)
						.then(resp => resolve(resp.data))
						.catch(resp => console.log(resp));
			});
		}

		async getUserFeedback(userId) {
			const feedback = await axios.get(`${this.url}/user/ratings/${userId}`, this.config)
			return await feedback;
		}


		postReview(sellerReview) {
			console.log("Adding review... API Call POST");
			return new Promise((resolve, reject) => {
					axios.post(`${this.url}/rating`, sellerReview.apiJsonFormat(), this.config)
							.then(resp => resolve(resp.data))
							.catch(resp => alert(resp));
			});
		}

		changePassword(userName, passWord){
			return new Promise((resolve, reject) => {
				console.log("changing password");
				axios.put(`${this.url}/user/password`, userName,passWord, this.config)
					.then(resp=> resolve(resp.data))
					.catch(resp=>alert(resp));
			});
		}

		getAuction(auctionId){
			return new Promise((resolve, reject) => {
				axios.get(`${this.url}/auction/${auctionId}`,this.config)
				.then(resp => resolve(resp.data))
				.catch(resp => console.log(resp));
			})
		}

		getBidsForAuction(auctionId){
			return new Promise((resolve, reject) => {
				axios.get(`${this.url}/bids/${auctionId}`,this.config)
				.then(resp => resolve(resp.data))
				.catch(resp => console.log(resp));
			})
		}

		postBid(bid) {
			console.log("Adding bid... API Call POST");
			return new Promise((resolve, reject) => {
					axios.post(`${this.url}/bid`, bid.apiJsonFormat(), this.config)
							.then(resp => resolve(resp.data))
							.catch(resp => alert(resp));
			});
		}

		changeAdmin(userId){
			return new Promise((resolve, reject) => {
				console.log("changing admin status");
				axios.put(`${this.url}/user/admin/${userId}`, this.config)
					.then(resp=> resolve(resp.data))
					.catch(resp=>alert(resp));
			});
		}
}
