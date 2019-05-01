/* eslint eqeqeq: "off" */

export class StorageManage {
	constructor() {

	}

	setAuthStatus(authenticated, userId) {
		if(authenticated == false) {
			localStorage.removeItem('authStatus');
			localStorage.removeItem('userId');
		} else {
			let auth = {loggedIn: authenticated, timestamp: new Date().getTime()}
			localStorage.setItem('authStatus', JSON.stringify(auth));
			localStorage.setItem('userId', userId);

		}
	}

	getAuthStatus() {
		let authStatus = JSON.parse(localStorage.getItem("authStatus"));
		if (authStatus) {
			let dateString = new Date().getTime().toString()
			let now = dateString;
			dateString = authStatus.timestamp;
			console.log("Time Difference" + ((dateString - now) / 1000) + " - Seconds since login");
		} else {
			return false;
		}
		return true;
	}

	getUserId() {
		let currUserId = +localStorage.getItem("userId");
		return currUserId;
	}

	setZipCode(zip) {
		localStorage.setItem("zipCode", JSON.stringify(zip));
	}

	getZipCode() {
		// let zip = JSON.parse(localStorage.getItem("zipCode"));
		return 75205;
	}


}
