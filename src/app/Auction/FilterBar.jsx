/* eslint eqeqeq: "off" */
import React from 'react';
import { Form, InputGroup,Button } from 'react-bootstrap'
import { CirclePicker } from 'react-color';

export const FilterBar = (props) => {
			return (
            <>
						<div className="col-lg-3 device-lg visible-lg">
							<div className="mt-5" data-spy="affix">
								<div className="card m-0">
								<article className="card-group-item">
									<h6 className="p-2 m-0" style={{background: '#eaebed'}}>Filter:</h6>
									<hr className="m-0"/>
									<header className="card-header" style={{background: '#edf2f9'}}>
										<h6 className="title">Type </h6>
									</header>
									<div className="filter-content">
										<div className="card-body">
													<Form.Label>Make</Form.Label>
													<InputGroup>
														<InputGroup.Prepend>
															<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-landmark"></i></InputGroup.Text>
														</InputGroup.Prepend>
														<Form.Control
																as="select"
																name="make"
																className="custom-select"
																value={props.filterMake}
																onChange={(e) => props.handleFilterMakeChange(e)}>
																<option value="000">All Makes</option>
																	{ [...new Set(props.models.map(x => x.Make))].map( (m, i) => <option key={m} value={m}>{m}</option>) }
															</Form.Control>
													</InputGroup>
													<div hidden={props.listModels.length == 0}>
														<Form.Label>Model</Form.Label>
														<InputGroup>
															<InputGroup.Prepend>
																<InputGroup.Text id="inputGroupPrepend"><i className="fas fa-car-side"></i></InputGroup.Text>
															</InputGroup.Prepend>
															<Form.Control
																	as="select"
																	name="make"
																	className="custom-select"
																	value={props.filterModel}
																	onChange={(e) => props.handleFilterModelChange(e)}>
																	<option value="000">All Models</option>
																		{ [...new Set(props.listModels.map(x => x.Model))].map( (m, i) => <option key={m} value={m}>{m}</option>) }
																</Form.Control>
														</InputGroup>
													</div>
										</div>
									</div>
								</article>
								<hr className="mb-0"/>
								<article className="card-group-item">
									<header className="card-header" style={{background: '#edf2f9'}}>
										<h6 className="title">Color </h6>
									</header>
									<div className="filter-content">
										<div className="card-body bg-light">
											<CirclePicker
												color={props.filterColor}
												colors={[...new Set(props.auctions.map(x => x.Color))]}
												width="100%"
												onChangeComplete={ (color, event) => props.handleFilterColorChange({ color: color.hex }) } />
										</div>
									</div>
								</article>
								<hr className="mb-0"/>
								<article className="card-group-item">
									<Button variant="secondary"
										onClick={(e) => props.handleFilterClear(e)}
										type="submit" className="form-control">
										Clear Filter
									</Button>
								</article>
							</div>
							</div>
						</div>

            </>
				)
  }



export default FilterBar;
