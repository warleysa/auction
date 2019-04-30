
export class SellerReview {
  constructor(sellerId, reviewerId, comment, rating) {
        this.raterId = reviewerId;
        this.userId = sellerId;
		this.rating = rating;
		this.description = comment;
  }
  apiJsonFormat() {
    return({
        userId: this.userId,
        raterId: this.raterId,
        description: this.description,
        rating: this.rating
    })
}
};

export default SellerReview;
