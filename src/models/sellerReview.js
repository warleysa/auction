
export class SellerReview {
  constructor(sellerId, reviewerId, comment, rating) {
    this.userId = +sellerId;    
    this.raterId = +reviewerId;
    this.description = comment;
    this.rating = +rating;
	
  }
  apiJsonFormat() {
    return({
        userId: this.userId,
        raterId: this.raterId,
        description: this.description,
        rating: this.rating,
    })
}
};

export default SellerReview;
