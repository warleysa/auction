import React from 'react';

export class FilterBar extends React.Component {


    state = {
        auctions: [],
    };


    render() {
        return (
            <>
						<div className="col-lg-3 device-lg visible-lg">
							<div className="mt-5" data-spy="affix">
								<div className="card m-0">
								<article className="card-group-item">
									<h6 className="bg-light mx-1 mb-0">Filter By:</h6>
									<header className="card-header">
										<h6 className="title">Make </h6>
									</header>
									<div className="filter-content">
										<div className="card-body">
										<form>
											<label className="form-check">
												<input className="form-check-input" type="checkbox" value=""/>
												<p className="form-check-label text-break">
													Mersedes Benz Test Here Mersedes Benz Test Here
												</p>
											</label>
											<label className="form-check">
												<input className="form-check-input" type="checkbox" value=""/>
												<span className="form-check-label">
													Nissan Altima
												</span>
											</label>
											<label className="form-check">
												<input className="form-check-input" type="checkbox" value=""/>
												<span className="form-check-label">
													Another Brand
												</span>
											</label>
										</form>

										</div>
									</div>
								</article>

								<article className="card-group-item">
									<header className="card-header">
										<h6 className="title">Color </h6>
									</header>
									<div className="filter-content">
										<div className="card-body">
										<label className="form-check">
											<input className="form-check-input" type="radio" name="exampleRadio" value=""/>
											<span className="form-check-label">
												First hand items
											</span>
										</label>
										<label className="form-check">
											<input className="form-check-input" type="radio" name="exampleRadio" value=""/>
											<span className="form-check-label">
												Brand new items
											</span>
										</label>
										<label className="form-check">
											<input className="form-check-input" type="radio" name="exampleRadio" value=""/>
											<span className="form-check-label">
												Some other option
											</span>
										</label>
										</div>
									</div>
								</article>
							</div>
							</div>
						</div>

            </>
        );
    }
}


export default FilterBar;
