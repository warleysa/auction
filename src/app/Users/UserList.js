import React from 'react';
import UserTile from './UserTile';



export const UserList = (props) => (

    <div className="card-columns">

        {
            props.users.map((user, i) => {
                return(
                    <UserTile user={user} activeUserId={this.props.activeUserId}/>
                    )
            }, this)
        }
    </div>
);

export default UserList;
