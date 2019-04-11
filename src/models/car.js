export class Car {
  constructor(id, userId, name, color, price, type, imageUrl, rating, brandName) {
    this.id = id;
		this.userId = userId;
    this.name = name;
    this.color = color;
		this.price = price;
		this.type = type;
    this.imageUrl = imageUrl;
		this.rating = rating;
		this.brandName = brandName;
		let today = new Date();
		this.dateCreated = today;
  }
};

export default Car;


//type is equal to materials
