import './HomePage.css';
import React from 'react';
import {Link} from 'react-router-dom'

export const HomePage = () =>(
        <div className="bg row justify-content-center">

            {/* <div className="placeholder">d</div> */}
            <div className="cover ml-2">
                <h1 className="cover-heading text-light">No.1 Online Car Auction Plaform in US</h1>
                <Link to="/auctions" className="btn btn-lg btn-outline-light btn-bottom" id="homepage-btn">
                Get Started
                </Link>
            </div>
            
        </div>
);

export default HomePage;
