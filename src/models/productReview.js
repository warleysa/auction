
export class ProductReview {
  constructor(rating, userName, comment) {
		this.userName = userName;
		this.rating = rating;
		this.comment = comment;
		let today = new Date();
		this.date = today;
  }
};

export default ProductReview;
