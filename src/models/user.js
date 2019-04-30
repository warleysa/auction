export class User {
    constructor(userId, username, firstname, lastname, address, city, state_code, zip, register_date, image) {
        this.userId = userId;
        this.username = username;
				this.first_name = firstname;
        this.last_name = lastname;
				this.address = address;
				this.city = city;
				this.state_code = state_code;
        this.zip = zip;
        this.register_date = register_date;
				this.image = image;
    }

		jsonFormat() {
			return({
				userId: this.userId,
        username: this.username,
				first_name: this.first_name,
        last_name: this.last_name,
				address: this.address,
				city: this.city,
				state_code: this.state_code,
        zip: this.zip.toString(),
        register_date: this.register_date
			})
		}

		apiJsonFormat() {
			return({
				userId: this.userId,
				firstName: this.first_name,
				lastName: this.last_name,
				address: this.address,
				state_code: this.state_code,
				city: this.city,
				zip: this.zip
			})
		}
}
