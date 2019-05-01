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
	{ path: '/register', component: RegisterPage, authRequired: false, adminRequired: false },
	{ path: '/login', component: LoginPage, authRequired: false, adminRequired: false },
	{ path: '/profile/:userId', component: PublicProfile, authRequired: false, adminRequired: false },
	{ path: '/profile', component: ProfileLanding, authRequired: true, adminRequired: false },
	{ path: '/auctions', component: AuctionLanding, authRequired: false, adminRequired: false },
	{ path: '/auction/:auctionId', component: AuctionPage, authRequired: false, adminRequired: false },
	{ path: '/users', component: UsersLanding, authRequired: false, adminRequired: false },
	{ path: '/home', component:HomeLanding, authRequired: false, adminRequired: false },
	{ path: '/admin', component:AdminLanding, authRequired: true, adminRequired: true },
	{ path: '/', component: HomeLanding, authRequired: false, adminRequired: false }

];

export default ROUTES;
