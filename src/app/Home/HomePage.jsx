import './HomePage.css';
import React from 'react';
import {Link} from 'react-router-dom'

export const HomePage = () =>(
    <body>
        <div className="bg row justify-content-center">
            <Link to="/auctions" className="btn btn-lg btn-outline-light btn-bottom">
                Get Started
            </Link>
        </div>
    </body>
);

export default HomePage;
