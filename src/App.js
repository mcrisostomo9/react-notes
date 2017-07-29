import React, { Component } from 'react';
import './App.css';
import Note from "./Note/Note";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            notes: [
                {id: 1, noteContent: 'note 1'},
                {id: 2, noteContent: 'note 2'},

            ]
        }
    }

      render() {
        return (
            <div className="notesWrapper">
                <div className="notesHeader">
                    <div className="heading">React firebase to do</div>
                </div>
                <div className="noteBody">
                    {
                    this.state.notes.map((note)=> {
                        return(
                            <Note noteContent={note.noteContent} noteId={note.noteId} key={note.noteId}/>
                        )
                    })
                    }

                </div>
                <div className="noteFooter">
                    Footer placeholder
                </div>
            </div>
        );
      }
}

export default App;
