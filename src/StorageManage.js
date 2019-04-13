export class StorageManage {
	constructor() {

	}

	setAuthStatus(authenticated) {
		if(authenticated == false) {
			localStorage.removeItem('authStatus');
		} else {
			let auth = {loggedIn: authenticated, timestamp: new Date().getTime()}
			localStorage.setItem('authStatus', JSON.stringify(auth));
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

}
