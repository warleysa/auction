/* eslint eqeqeq: "off" */
import React from 'react';
import Rating from './../Reviews/Rating';

export class AdminPage extends React.Component{


    saveChange(){
        this.props.onChangePassword({username:this.state.changingUser, password:this.state.newPassword});
        this.setState({changingUser:'', password:''});
    }
    state = {
        changingUser:'',
        newPassword:'',
    }

	render(){
		return(
    <>
		<div className="m-5">
		<div className="w-100">
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a className="nav-link active" href="#auction"  role="tab" data-toggle="tab" aria-controls="auction" aria-selected="true">Auctions</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#account" role="tab" data-toggle="tab" aria-controls="account" aria-selected="false">Accounts</a>
				</li>
			</ul>

			<div className="tab-content w-100" id="myTabContent">
				<div className="tab-pane fade show active" id="auction" role="tabpanel" aria-labelledby="auction-tab">
					<div className="table-responsive">
						<table className="table table-striped table-condensed">
							<thead>
								<tr>
									<th>Model</th>
									<th>Price</th>
									<th>Time left</th>
									<th>Seller ID</th>
									<th>Seller Name</th>
									<th>Pic</th>
									<th>Edit Pic</th>
									<th></th>
								</tr>
							</thead>

							<tbody>
								{
									this.props.auctions.map((a, i) =>
									<tr key={i}>

										<td>{ `${a.make} - ${a.model} (${a.year})` }</td>
										<td>${ a.auction_reserve_price}</td>
										<td>{ a.time_left }</td>
										<td>{ a.userId}</td>
										<td>{ a.UserName}</td>
										<td>
											<img className="pt-2 thumbnail img-responsive" alt={a.make} src={a.image} width="50rem" height="50rem"/>
										</td>
										<td>
											<label className="btn btn-outline-primary btn-sm w-100" id="profilePictureUpload">
												Pic
												<i className="far fa-edit float-right m-1"></i>
												<input type="file" className="d-none" onChange={ (e) => this.props.handleChange({file: e.target.files, id: a.auctionId}) } />
											</label>
										</td>
										<td>
											<button className="btn btn-sm btn-danger"
												onClick={e => this.props.onDelete(a.auctionId)}>
												<i className="fa fa-trash"></i>
											</button>
										</td>
									</tr>
								)
							}
						</tbody>
					</table>
				</div>
			</div>

			<div className="tab-pane fade show" id="account" role="tabpanel" aria-labelledby="account-tab">
				<div className="table-responsive">
					<table className="table table-striped table-condensed">
						<thead>
							<tr>
								<th>UserID</th>
								<th>User Name</th>
								<th>Name</th>
								<th>Register Date</th>
								<th>Location</th>
								<th>IsAdmin</th>
								<th>Rating</th>
								<th></th>
								<th></th>
							</tr>
						</thead>

						<tbody>
						{
								this.props.users.map((u, i) =>
								<tr key={i}>

									<td>{u.userId}</td>
									<td>{u.username}</td>
									<td>{u.first_name+" "+u.last_name}</td>
									<td>{ u.register_date.substring(0,10)}</td>
									<td> {u.zip? u.zip:"null"} </td>
									<td> {u.IsAdmin? 'Yes':"NO"}</td>
									<td className="font-weight-light"><Rating value={u.rating}/></td>

									<td>
										<button className="btn btn-sm btn-danger m-1 float-right"
											onClick={()=>this.props.onChangeAdmin(u.userId)}>
											<i className="fas fa-user-cog mr-1"></i>
											Change Admin
										</button>
									</td>

									<td>
										<button className="btn btn-sm btn-warning m-1 float-right" data-toggle="modal" data-target="#passwordmodal"
                                            onClick={()=>this.setState({changingUser:u.username})}>
                                            <i className="fas fa-lock mr-1"></i>
											Change Password
										</button>
									</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
</div>

<div className="modal fade" id="passwordmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Change Password</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div className="modal-body">
                                <div className="form-group">
									<label htmlFor="password">New password</label>
									<input type="text"
										id="password"
										name="password"
										className="form-control"
										value={this.state.newPassword}
										onChange={ e => this.setState({ newPassword: e.target.value }) }/>
								</div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-success" data-dismiss="modal"
            onClick={() => this.saveChange()}>
            Save
        </button>

        <button type="button" className="btn btn-secondary" data-dismiss="modal"
            onClick={()=>this.setState({changingUser:'', password:''})}>
            Close
        </button>
      </div>
    </div>
  </div>
</div>
</>
	)};
}

export default AdminPage;
