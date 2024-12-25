import React from "react";
import NoteContent from "./NoteContent";
import ActionItem from "./ActionItems";

function NoteItem({id, title, createdAt, body, onDelete, onArchive, isArchived}){
    return (
        <div key={id} className="note-item">
            <NoteContent title={title} createdAt={createdAt} body={body} />
            <ActionItem id={id} onDelete={onDelete} onArchive={onArchive} isArchived={isArchived} />
        </div>
    );
}

export default NoteItem;