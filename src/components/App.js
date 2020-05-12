import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import SearchFilter from './SearchFilter'
import Main from './Main'
import PreResults from './PreResults'
import Loading from './Loading'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        hits: [],
        time: '',
        results: '',
        userInput: '',
        empty: true
    }
    this.handleChange = this.handleChange.bind(this)
}
// componentDidMount() {
//   fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.userInput}`)
//       .then(response => response.json())
//       .then(response => {
//           console.log(response)
//           this.setState({
//               hits: response.hits,
//               time: response.processingTimeMS,
//               results: response.nbHits
//           })
//       })
// }

handleChange(event) {
  fetch(`https://hn.algolia.com/api/v1/search?query=${this.state.userInput}`)
  .then(response => response.json())
  .then(response => {
      // console.log(response)
      this.setState({
          hits: response.hits,
          time: response.processingTimeMS,
          results: response.nbHits,
          loading: false
      })
  })
  const {name, value} = event.target
  this.setState({
      [name]: value,
      loading: true,
      empty: false
  })
}

  render() {
    return (
      <div>
        <Header func={this.handleChange}/>
        <SearchFilter time={this.state.time} results={this.state.results}/>
        {!this.state.empty ? this.state.loading ? <Loading /> : <Main hits={this.state.hits} /> : <PreResults /> }    
      </div>
    )
  }
}

export default App
