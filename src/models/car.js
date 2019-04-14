export class Car{
	constructor(make, model, year, mileage, zip, description, auction_end_date, auction_reserve_price){
		this.make = make;
		this.model = model;
		this.year = year;
    this.mileage = mileage;
		this.zip = zip;
		this.description = description;
    this.auction_end_date = auction_end_date;
		this.auction_reserve_price = auction_reserve_price;
    this.imageURL = "http://distinctivecartoyz.com/wp-content/uploads/2017/04/lambo-vect.png";
	}
}

export default Car;
