var month_name = function(dt){
	let mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];
	  return mlist[dt.getMonth()];
};

export class ProductReview {
  constructor(rating, userName, comment) {
		this.userName = userName;
		this.rating = rating;
		this.comment = comment;
		let today = new Date();
		this.date = '' + month_name(today) + ' ' + today.getDate() + ', ' + (1900+today.getYear());
  }
};

export default ProductReview;
