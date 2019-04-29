import React from 'react';
import UserTile from './UserTile';


export const UserList = (props) => (
    <div className="row">


        {console.log(`props.users: `)}
        {console.log(props.users)}
        {
            props.users.map((user, i) => 
                <div className="col-md-6 col-lg-4">
                    <UserTile first_name={user.FirstName}
                              last_name={user.LastName}
                              date_joined={user.DateCreated}
                              cars_listed= {user.cars_listed}
                              rating= {user.avg_rating}
                              userId={user.UserId}/>
                </div>
            )
        }
    </div>
);

export default UserList;