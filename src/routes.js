// import { CarEditor } from './app/Car/CarEditor';
// import { CarList } from './app/Car/CarList';
// import { CarLanding } from './app/Car/CarLanding';
import { LoginPage } from './app/Other/LoginPage';
import { RegisterPage } from './app/Other/RegisterPage';
import { AuctionLanding } from './app/Auction/AuctionLanding';
import { AuctionPage } from './app/Auction/AuctionPage';
import { ProfileLanding } from './app/Profile/ProfileLanding'

export const ROUTES = [
	{ path: '/register', component: RegisterPage },
	{ path: '/login', component: LoginPage },
	{ path: '/profile/:userId', component: ProfileLanding },
	{ path: '/profile', component: ProfileLanding },
	// { path: '/edit/:accountId', component: CarEditor },
	// { path: '/new', component: CarEditor },
	{ path: '/auctions', component: AuctionLanding },
	{ path: '/auction/:auctionId', component: AuctionPage },
	{ path: '/home', component: AuctionLanding },
	// { path: '/profile/:userId', component: AccountEditor },
	{ path: '/', component: AuctionLanding },
];

export default ROUTES;
