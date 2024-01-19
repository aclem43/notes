import { useState } from "react";
import { BiChevronDown, BiChevronUp, BiFolder } from "react-icons/bi";
import "../../assets/folder.css";
import Note, { NoteType } from "./Note";

export interface FolderProps {
    notes: NoteType[]
}

export default function Folder(props: FolderProps) {
    const { notes } = props;
    const [open, setOpen] = useState(false);
    if (!open) return (
        <div className="folder-container">
            <div className="folder noselect"
                onClick={() => {
                    setOpen(true);
                }}
            >
                <div className="folder-group">
                    <BiFolder />
                    <div className="folder-name">Folder</div>
                </div>
                <BiChevronDown />
            </div>
        </div>
    );
    else return (
        <div className="folder-container">
            <div className="folder noselect"
                onClick={() => {
                    setOpen(false);
                }}
            >
                <div className="folder-group">
                    <BiFolder />
                    <div className="folder-name">Folder</div>
                </div>
                <BiChevronUp />
            </div>
            <div className="folder-notes">
                {notes.map((note) => {
                    return <Note note={note} />
                })}
            </div>
        </div>
    );


}