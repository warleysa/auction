// import { CarEditor } from './app/Car/CarEditor';
// import { CarList } from './app/Car/CarList';
// import { CarLanding } from './app/Car/CarLanding';
import { LoginPage } from './app/Other/LoginPage';
import { RegisterPage } from './app/Other/RegisterPage';
import { AuctionLanding } from './app/Auction/AuctionLanding';
import { AuctionPage } from './app/Auction/AuctionPage';
import { ProfileLanding } from './app/Profile/ProfileLanding';
import {AdminLanding} from './app/Admin/AdminLanding';
import {HomeLanding} from './app/Home/HomeLanding';
import UsersLanding from './app/Users/UsersLanding';
import PublicProfile from './app/Users/PublicProfile';

export const ROUTES = [
	{ path: '/register', component: RegisterPage, authRequired: false },
	{ path: '/login', component: LoginPage, authRequired: false },
	{ path: '/profile/:userId', component: PublicProfile, authRequired: false },
	{ path: '/profile', component: ProfileLanding, authRequired: true },
	// { path: '/edit/:accountId', component: CarEditor },
	// { path: '/new', component: CarEditor },
	{ path: '/auctions', component: AuctionLanding, authRequired: false },
	{ path: '/auction/:auctionId', component: AuctionPage, authRequired: false },
	{ path: '/users', component: UsersLanding, authRequired: false },
	{ path: '/home', component:HomeLanding, authRequired: false},
	{ path: '/admin', component:AdminLanding, authRequired: true},
	// { path: '/profile/:userId', component: AccountEditor },
	{ path: '/', component: HomeLanding, authRequired: false }
	
];

export default ROUTES;
