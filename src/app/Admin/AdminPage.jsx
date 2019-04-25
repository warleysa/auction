import React from 'react';
import { Link } from 'react-router-dom';
var zipcodes = require('zipcodes');

export const AdminPage = (props) => (
<div className="mx-2">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" href="#auction"  role="tab" data-toggle="tab" aria-controls="auction" aria-selected="true">Auctions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#account" role="tab" data-toggle="tab" aria-controls="account" aria-selected="false">Accounts</a>
                        </li>
    </ul>

    <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="auction" role="tabpanel" aria-labelledby="auction-tab">
                    
            <table className="table table-striped table-condensed mx-1">
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Time left</th>
                        <th>Seller</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        props.auctions.map((a, i) =>
                            <tr key={i}>

                                <td>{ `${a.make} - ${a.model} (${a.year})` }</td>
                                <td>${ a.auction_reserve_price}</td>
                                <td>{ a.time_left }</td>
                                <td>{ a.userId}</td>
                                {/* <td>
                                    <button className="btn btn-sm btn-danger"
                                            onClick={e => props.onDelete(a.id)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>
);

export default AdminPage;
