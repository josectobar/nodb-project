import React, { Component } from 'react'

export default class CaseNotes extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            directory: this.props.directory,
            notes:[]
        }
    }

    handleCaseNotes = (id) => {
        const notesIndex = this.state.directory.findIndex(entry => parseInt(entry.id) === parseInt(id))
        if (!this.state.directory[notesIndex].caseNotes[0].date) {
            this.setState({
                notes: [{
                    noteid: id + Date(),
                    date: Date(),
                    note: "This is a note for this person"
                }]
            })
            console.log(this.state.notes)

        } else {
            const notes = this.state.directory[notesIndex].caseNotes
            this.setState({
                notes: notes
            })
        }
    }

    render() {
        const directoryDisplay = this.props.directory.map(entry => {
            let id = entry.id            
            return (
                <div key={id}  
                onClick={() => this.handleCaseNotes(id)}>
                    <h3>
                        {entry.firstName} {entry.lastName}
                    </h3>
                    <p>{entry.address}</p>
                </div>
            )
        })
        const noteDisplay = this.state.notes.map(note => {            
            return (
                <div key={note.noteid} className="directory-display">
                    <p>{note.noteid} {note.date}</p>
                    <span>{note.note}</span>
                </div>
            )
        })
        return (
            <div className="case-notes-main-container">
                <h2>Case Notes</h2>
                    <div className="case-notes-sub-container">
                        <div className="notes-directory">
                        {directoryDisplay}
                        </div>
                        <div className="notes-display">
                            {noteDisplay}
                        </div>
                    </div>
            </div>
        )
    }
}