import React, { Component } from 'react'
import './App.css'
import MainComponent from './MainComponent'
import Header from './Header'

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const mappedData = this.props.hits.map(hit => {
            return <MainComponent author={hit.author} title={hit.title} url={hit.url} comments={hit.num_comments} points={hit.points} />
        })
        return (
            <main id="main-section">
                {mappedData}
            </main>
        )
    }
}

export default Main
