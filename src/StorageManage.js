/* eslint eqeqeq: "off" */

export class StorageManage {

	setAuthStatus(authenticated, userId, isAdmin) {
		if(authenticated == false) {
			localStorage.removeItem('authStatus');
			localStorage.removeItem('userId');
			localStorage.removeItem('isAdmin');
		} else {
			let auth = {loggedIn: authenticated, timestamp: new Date().getTime()}
			localStorage.setItem('authStatus', JSON.stringify(auth));
			localStorage.setItem('userId', userId);
			localStorage.setItem('isAdmin', isAdmin);
		}
	}

	getAuthStatus() {
		let authStatus = JSON.parse(localStorage.getItem("authStatus"));
		if (authStatus) {
			let dateString = new Date().getTime().toString()
			let now = dateString;
			dateString = authStatus.timestamp;
			console.log("Time Difference" + ((dateString - now) / 1000) + " - Seconds since login");
			/*
				Never got to this feature
				Was suppose to log users out after a certain amount of time
			*/

		} else {
			return false;
		}
		return true;
	}

	getUserId() {
		let currUserId = +localStorage.getItem("userId");
		return currUserId;
	}

	getAdminStatus() {
		let isAdmin = localStorage.getItem("isAdmin");
		return isAdmin;
	}

	setZipCode(zip) {
		localStorage.setItem("zipCode", JSON.stringify(zip));
	}

	logOutUser() {
		localStorage.clear();
	}

	getZipCode() {
		let zip = JSON.parse(localStorage.getItem("zipCode"));
		return zip;
	}


}
