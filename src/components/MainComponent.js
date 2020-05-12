import React, { Component } from 'react'
import './App.css'

class MainComponent extends Component {
    render() {
        return (
            <div className="mainComponent">
                <div className="top">
                    {this.props.title}
                    <a href={this.props.url}> ({this.props.url}) </a>
                </div>
                <div className="bottom">
                    <span>{this.props.points} points | {this.props.author} | {this.props.comments} comments</span>
                </div>
            </div>
        )
    }
}

export default MainComponent
