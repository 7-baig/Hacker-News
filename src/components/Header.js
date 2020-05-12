import React, { Component } from 'react'
import './App.css'

class Header extends Component {
    constructor(props) {
        super(props)
    
        // this.state = {
        //      userInput: ''
        // }
        // this.handleChange = this.handleChange.bind(this)
    }
    
    // handleChange(event) {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    render() {
        return (
            <header id="main-header">
                <div className="main-header-container">

                    <a className="header-logo-container" href="#">
                        <img src="https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"/>
                        <div className="search-header-label">
                            Search
                            <br/>
                            Hacker News
                        </div>
                    </a>
                    {/* ====== */}
                    <div className="header-search-container">
                        <span className="searchIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        </span>

                        <input 
                            type="search" 
                            name="userInput"
                            value={this.props.input} 
                            placeholder="Search stories by title, url or author" 
                            className="searchInput"
                            onChange={this.props.func}
                        />

                        <div className="poweredBy">
                            <span>Search by</span>
                            <img src="https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-algolia-blue-35c461b6.svg"/>
                        </div>
                    </div>
                    {/* ====== */}
                    <div className="header-settings">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        <span>Settings</span>
                    </div>

                </div>
            </header>
        )
    }
}

export default Header
