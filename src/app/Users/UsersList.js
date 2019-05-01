import React, { Component } from 'react';
import UserTile from './UserTile';


class UsersList extends Component {

  state = {
    activeUserId: this.props.activeUserId,
  }





  render () {
      const activeUser = this.state.activeUserId;

    return (
        <div className="card-columns">

        {
            this.props.users.map((user, i) => 
                  <UserTile user={user} activeUserId={activeUser} key={user.UserId}/>  
            ) 
        }
    </div>
    )
  }

}

export default UsersList;
