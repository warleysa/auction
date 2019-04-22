import moment from 'moment';

export class Car{
	constructor(userId, make, model, year, mileage, zip, description, auction_reserve_price, date_created, end_date, auctionId){
		this.userId = userId
		this.make = make;
		this.model = model;
		this.year = year;
    this.mileage = mileage;
		this.zip = zip;
		this.description = description;
		this.dateCreated = date_created;
		this.end_date = end_date;
		this.start_date_readable = moment(this.end_date).format('MMMM Do YYYY, h:mm:ss a');
		this.end_date_readable = moment(this.dateCreated).format('MMMM Do YYYY, h:mm:ss a');
		this.auction_reserve_price = auction_reserve_price;
    this.imageURL = "http://distinctivecartoyz.com/wp-content/uploads/2017/04/lambo-vect.png";
		if(auctionId) {
			this.auctionId = auctionId;
		}
	}

	apiJsonFormat() {
		return({
			userId: this.userId,
			model: this.model,
			make: this.make,
			year: this.year,
			mileage: this.mileage,
			zip: this.zip,
			dateCreated: this.dateCreated,
			description: this.description,
			endTime: this.end_date,
			price: this.auction_reserve_price,
			// imageURL: this.imageURL
		})
	}
}

export default Car;
