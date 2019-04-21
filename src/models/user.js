export class User {
    constructor(userId, username, firstname, lastname, address, city, state_code, zip, register_date) {
        this.userId = userId;
        this.username = username;
				this.first_name = firstname;
        this.last_name = lastname;
				this.address = address;
				this.city = city;
				this.state_code = state_code;
        this.zip = zip;
        this.register_date = register_date;
    }

		apiJsonFormat() {
			return({
				userId: this.userId,
				firstName: this.first_name,
				lastName: this.last_name,
				address: this.address,
				zip: this.zip
			})
		}
}
