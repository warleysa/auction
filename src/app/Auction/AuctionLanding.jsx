/* eslint eqeqeq: "off" */
import React from 'react';
import { RealRepo } from '../../api/realRepo';
import { AuctionList } from './AuctionList';
import FilterBar from './FilterBar';
import spinner from '../images/loadingSpinner.gif';

export class AuctionLanding extends React.Component {
	realRepo = new RealRepo();


    state = {
        auctions: [],
				filteredAuctions: [],
				filterMake: 'All Makes',
				filterModel: 'All Models',
				filterColor: '',
				listModels: [],
				modelEditing: true
    };

		handleFilterMakeChange(e) {
			if(e.target.value == "000") {
				this.setState({
		        filterMake: 'All Makes',
						filterModel: 'All Models',
						listModels: [],
						filteredAuctions: this.state.auctions
		    })
				return this.state;
			}
			this.setState({
	        filterMake: e.target.value,
					listModels: this.state.auctions.filter(a => a.Make === e.target.value),
					filteredAuctions: this.state.auctions.filter(a => a.Make === e.target.value)
	    })
			return this.state;
		}

		handleFilterModelChange(e) {
			if(e.target.value == "000") {
				this.setState({
		        filterModel: 'All Models',
						filteredAuctions: this.state.auctions.filter(a => a.Make === this.state.filterMake)
		    })
				return this.state;
			}
			this.setState({
	        filterModel: e.target.value,
					filteredAuctions: this.state.auctions.filter(a => a.Model === e.target.value)
	    })
			return this.state;
		}

		handleFilterColorChange(c) {
			this.setState({
				filterMake: 'All Makes',
				filterModel: 'All Models',
				filterColor: c.color,
				listModels: [],
				filteredAuctions: this.state.auctions.filter(a => a.Color === c.color)
	    })
			return this.state;
		}

		handleFilterClear(e) {
			this.setState({
	        filterMake: 'All Makes',
					filterModel: 'All Models',
					filterColor: "#000000",
					listModels: [],
					filteredAuctions: this.state.auctions
	    })
			return this.state;
		}


    render() {
			if(this.state.auctions.length > 0){
        return (
            <>
						<div className="container m-2 mb-5">
							<div className="row">
								<FilterBar models={this.state.auctions.filter(a => a.Image != "")}
									auctions={this.state.auctions}
									filterMake={this.state.filterMake}
									filterModel={this.state.filterModel}
									filterColor={this.state.filterColor}
									listModels={this.state.listModels}
									handleFilterMakeChange={(e) => this.handleFilterMakeChange(e)}
									handleFilterModelChange={(e) => this.handleFilterModelChange(e)}
									handleFilterColorChange={(c) => this.handleFilterColorChange(c)}/>
								<div className="container col-lg-9">
									<div className="row">
										<AuctionList auctions={this.state.filteredAuctions} userZipCode={this.props.userInfo.userZipCode}/>
									</div>
								</div>
								</div>
							</div>

            </>
				);
			}

			return(
				<>
					<div className="container m-2 mb-5">
						<div className="row">
							<FilterBar models={this.state.auctions.filter(a => a.Image != "")}
								auctions={this.state.auctions}
								filterMake={this.state.filterMake}
								filterModel={this.state.filterModel}
								filterColor={this.state.filterColor}
								listModels={this.state.listModels}
								handleFilterMakeChange={(e) => this.handleFilterMakeChange(e)}
								handleFilterModelChange={(e) => this.handleFilterModelChange(e)}
								handleFilterColorChange={(c) => this.handleFilterColorChange(c)}/>
							<div className="container col-lg-9">
								<div className="loading-div">
									<img src={spinner}
											 alt="loading"/>
								</div>
							</div>
							</div>
						</div>

        </>
			);
    }

		componentDidMount() {
			this.realRepo.getAuctions()
				.then(a => {
					this.setState({auctions: a, filteredAuctions: a});
        });

    	}
}


export default AuctionLanding;
