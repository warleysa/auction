
export class AuctionBid{
	constructor(username, userId, auctionId, price){
        this.Username = username;
        this.UserId = userId;
        this.AuctionId  = auctionId;
        this.Price = price;
        let today = new Date();
        let thisDate = today.toDateString();
        this.Date = thisDate;


	}

	apiJsonFormat() {
		return( {
						userId: this.UserId,
						auctionId: this.AuctionId,
            price: this.Price
		})
	}


}

export default AuctionBid;
