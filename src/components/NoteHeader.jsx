import React from "react";

class NoteHeader extends React.Component{
    render(){
        const {searchQuery, onSearchChange} = this.props;
        return (
            <div className="note-app__header">
                <h1>Notes</h1>
                <div className="note-search">
                    <input 
                        type="text" 
                        placeholder="Cari catatan ..." 
                        name="search"
                        value={searchQuery} 
                        onChange={(ev) => onSearchChange(ev.target.value)} 
                    />
                </div>
            </div>
        )
    }
}

export default NoteHeader;