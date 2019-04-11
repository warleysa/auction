export class Product {
  constructor(id, title, description, price, imageUrl, reviews) {
    this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.imageUrl = imageUrl;
		this.reviews = reviews;
  }
};

export default Product;
