import React from 'react';
import AccountSidebar from '../Profile/AccountSidebar';
import "./UserList.css";

export class UserList extends React.Component {



    state = {
      first_name:'Tate',
  		last_name: 'Hakert',
  		email:  'tatehakert@gmail.com',
  		address: '2900 McKinnon St., Unit 1701',
  		city:   'Dallas',
  		state_code:  'TX',
  		zip:  '75201',
  		register_date: '3-3-19',
  		cars_listed: '1',
  		cars_sold: '0',
  		cars_purchased: '0',
  		ranking: 4,
    };



    render() {
        return (
            <div className="card-columns">
            <AccountSidebar   first_name={this.state.first_name}
                              last_name={this.state.last_name}
                              date_joined={this.state.register_date}
                              cars_listed={this.state.cars_listed}
                              cars_purchased={this.state.cars_purchased}
                              cars_sold={this.state.cars_sold}
                              ranking={this.state.ranking}
                              keyId="test1"/>

            <AccountSidebar first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            date_joined={this.state.register_date}
                            cars_listed={this.state.cars_listed}
                            cars_purchased={this.state.cars_purchased}
                            cars_sold={this.state.cars_sold}
                            ranking={this.state.ranking}
                            keyId="test2"/>

            <AccountSidebar first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            date_joined={this.state.register_date}
                            cars_listed={this.state.cars_listed}
                            cars_purchased={this.state.cars_purchased}
                            cars_sold={this.state.cars_sold}
                            ranking={this.state.ranking}
                            keyId="test3"/>

            <AccountSidebar first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            date_joined={this.state.register_date}
                            cars_listed={this.state.cars_listed}
                            cars_purchased={this.state.cars_purchased}
                            cars_sold={this.state.cars_sold}
                            ranking={this.state.ranking}
                            keyId="test4"/>

            <AccountSidebar first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            date_joined={this.state.register_date}
                            cars_listed={this.state.cars_listed}
                            cars_purchased={this.state.cars_purchased}
                            cars_sold={this.state.cars_sold}
                            ranking={this.state.ranking}
                            keyId="test5"/>

            <AccountSidebar first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            date_joined={this.state.register_date}
                            cars_listed={this.state.cars_listed}
                            cars_purchased={this.state.cars_purchased}
                            cars_sold={this.state.cars_sold}
                            ranking={this.state.ranking}
                            keyId="test6"/>

            <AccountSidebar first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            date_joined={this.state.register_date}
                            cars_listed={this.state.cars_listed}
                            cars_purchased={this.state.cars_purchased}
                            cars_sold={this.state.cars_sold}
                            ranking={this.state.ranking}
                            keyId="test7"/>

            <AccountSidebar first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            date_joined={this.state.register_date}
                            cars_listed={this.state.cars_listed}
                            cars_purchased={this.state.cars_purchased}
                            cars_sold={this.state.cars_sold}
                            ranking={this.state.ranking}
                            keyId="test8"/>
                            
            <AccountSidebar first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            date_joined={this.state.register_date}
                            cars_listed={this.state.cars_listed}
                            cars_purchased={this.state.cars_purchased}
                            cars_sold={this.state.cars_sold}
                            ranking={this.state.ranking}
                            keyId="test9"/>

            <AccountSidebar first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            date_joined={this.state.register_date}
                            cars_listed={this.state.cars_listed}
                            cars_purchased={this.state.cars_purchased}
                            cars_sold={this.state.cars_sold}
                            ranking={this.state.ranking}
                            key="test10"/>
            </div>
        );
    }
}
export default UserList;
