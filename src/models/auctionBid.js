
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
		return({
            Username: this.username,
			UserId: this.userId,
			AuctionId: this.auctionId,
            Price: this.price,
            Date: this.date
		})
	}

	
}

export default AuctionBid;