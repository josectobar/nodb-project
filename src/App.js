import React, { Component } from 'react';
import axios from 'axios'
import DisplayFields from './Components/DisplayFields'
import CaseNotes from './Components/CaseNotes'

import './App.css'

const apiUrl = '/api/directory'

class App extends Component {

  constructor(){
    super()

    this.state = {
      directory: [],
      showCaseNotes: false
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
      this.setState({
        directory: res.data
      })
    })
  }

  handleNewEntry = (update) => {
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
      <div className="background">
      </div>
        <div className="title-header">
          <button className="case-notes-btn" onClick={() => this.setState({showCaseNotes: !this.state.showCaseNotes})}><strong>Case notes</strong></button>
          <h1>{"<"}Comm{">"}Unity</h1>
        </div>
            <DisplayFields 
              deleteFn={this.handleDeleteEntry} 
              updateFn={this.handleEntryUpdate} 
              directory={this.state.directory}
              newEntryFn={this.handleNewEntry} 
              />
        {this.state.showCaseNotes &&
            <CaseNotes directory={this.state.directory}/>
          }
      </div>
    );
  }
}

export default App;
