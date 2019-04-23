import moment from 'moment';

moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24*3);
moment.relativeTimeThreshold('s', 60);

export class Car{
	constructor(userId, make, model, year, mileage, zip, description, auction_reserve_price, date_created, end_date, auctionId){
		this.userId = userId
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = "color not in API yet";
    this.mileage = mileage;
		this.zip = zip;
		this.description = description;
		this.dateCreated = date_created;
		this.end_date = end_date;
		this.start_date_readable = moment(this.end_date).format('MMMM Do YYYY, h:mm:ss a');
		this.end_date_readable = moment(this.dateCreated).format('MMMM Do YYYY, h:mm:ss a');
		this.auction_reserve_price = auction_reserve_price;
		this.time_left = moment(this.end_date).fromNow(true);
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
			color: this.color,
			zip: this.zip,
			dateCreated: this.dateCreated,
			description: this.description,
			endTime: this.end_date,
			price: this.auction_reserve_price,
		})
	}
}

export default Car;
