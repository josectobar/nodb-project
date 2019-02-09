import React, { Component } from 'react';
import axios from 'axios'
import DisplayFields from './Components/DisplayFields'
import './App.css'

const apiUrl = '/api/directory'

class App extends Component {

  constructor(){
    super()

    this.state = {
      directory: []
    }
  }

  componentDidMount(){
    this.getDirectory()
  }
  
  getDirectory = () => {
    axios.get(apiUrl).then(res => {
      this.setState({
        directory: res.data
      })
    })
  }
  
  handleEntryUpdate = (update) => {
    const id = update.id
    axios.put(`${apiUrl}/${id}`, update).then(res => {
      console.log(res.data)
      this.setState({
        directory: res.data
      })
    })
  }

  handleNewEntry = (update) => {
    console.log(update)
    axios.post(apiUrl, update).then(res => {
      this.setState({
        directory: res.data
      })
    })
  }

  handleDeleteEntry = (id) => {
    axios.delete(`${apiUrl}/${id}`).then(res => {
      this.setState({
        directory: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="title-header">
          <h1>{"<"}Comm{">"}Unity</h1>
        </div>
        <div className="main-container">
          <div className="display-container">
            <DisplayFields 
              deleteFn={this.handleDeleteEntry} 
              updateFn={this.handleEntryUpdate} 
              directory={this.state.directory}
              newEntryFn={this.handleNewEntry} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
