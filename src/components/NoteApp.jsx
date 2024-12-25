import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            notes: getInitialData(),
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState) => ({
            notes: [
                ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: new Date().toISOString(),
                    archived: false
                }
            ]
        }));
    }

    searchChangeHandle = (query) => {
        this.setState({searchQuery: query});
    };

    getFilteredNotes(){
        const {notes, searchQuery} = this.state;
        return notes.filter((note)=>(
            note.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        ));
    }

    onDeleteHandle = (id) => {
        this.setState((prevState) => ({
            notes: prevState.notes.filter((note) => note.id !== id),
        }));
    };

    onArchiveHandle = (id) => {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) => note.id === id ? 
            {...note, archived: !note.archived} : note),
        }));
    };

    render(){
        const filteredNotes = this.getFilteredNotes();
        return (
            <>
            <NoteHeader 
                searchQuery={this.state.searchQuery}
                onSearchChange={this.searchChangeHandle}
            />
            <div className="note-app__body">
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NoteList 
                    notes={filteredNotes.filter((note) => !note.archived)}
                    onDelete={this.onDeleteHandle}
                    onArchive={this.onArchiveHandle}
                    isArchived={false}
                />
                <h2>Arsip</h2>
                <NoteList 
                    notes={filteredNotes.filter((note) => note.archived)}
                    onDelete={this.onDeleteHandle}
                    onArchive={this.onArchiveHandle}
                    isArchived={true}
                />
            </div>
            </>
        );
    }
}

export default NoteApp;