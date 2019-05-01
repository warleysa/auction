
export class AuctionBid{
	constructor(userId, auctionId, price){
		this.userId = userId;
        this.auctionId  = auctionId;
        this.price = price;
        let today = new Date();
        let thisDate = today.toDateString();
        this.date = thisDate;

	}

	apiJsonFormat() {
		return({
			userId: this.userId,
			auctionId: this.auctionId,
            price: this.price,
            date: this.date
		})
	}

	
}

export default AuctionBid;