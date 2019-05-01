import React from 'react';
import { CirclePicker } from 'react-color';

const FilterBar = (props) => {

    return(
            <>
						<div className="col-lg-3 device-lg visible-lg">
							<div className="mt-5" data-spy="affix">
								<div className="card m-0">
								<article className="card-group-item">
									<h6 className="bg-light mx-1 mb-0">Filter By:</h6>
									<hr className="m-0"/>
									<header className="card-header">
										<h6 className="title">Make </h6>
									</header>
									<div className="filter-content">
										<div className="card-body">
										<form>
										{ props.models.map( (m, i) =>
											<label className="form-check" key={m.auctionId}>
												<input className="form-check-input" type="checkbox" value=""/>
												<p className="form-check-label text-break">
													{m.Make}
												</p>
											</label>
										) }
										</form>

										</div>
									</div>
								</article>
								<hr className="mb-0"/>
								<article className="card-group-item">
									<header className="card-header">
										<h6 className="title">Color </h6>
									</header>
									<div className="filter-content">
										<div className="card-body">
										<CirclePicker width="100%" />
										</div>
									</div>
								</article>
							</div>
							</div>
						</div>

            </>
				)
  }

export default FilterBar;
