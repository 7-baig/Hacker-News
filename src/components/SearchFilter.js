import React, { Component } from 'react'
import './App.css'

class SearchFilter extends Component {

    render() {
        return (
            <div className="searchFilter">
                <div className="left">
                    <span>
                        Search
                        <select name="" value="">
                            <option value="">All</option>
                            <option value="">Stories</option>
                            <option value="">Comments</option>
                        </select>
                    </span>
                    <span>
                        by
                        <select name="" value="">
                            <option value="">Popularity</option>
                            <option value="">Date</option>
                        </select>
                    </span>
                    <span>
                        for
                        <select name="" value="">
                            <option value="">All time</option>
                            <option value="">Last 24h</option>
                            <option value="">Past Week</option>
                            <option value="">Past Month</option>
                            <option value="">Past Year</option>
                            <option value="">Custom Range</option>
                        </select>
                    </span>
                </div>
                <div className="right">
                    <p>{this.props.results} results (in {this.props.time} milliseconds)</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                </div>
            </div>
        )
    }
}

export default SearchFilter
