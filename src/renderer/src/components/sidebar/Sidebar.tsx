import { FolderType, NoteReference, NoteType, loadNoteReferences } from "@renderer/data/notes";
import "../../assets/sidebar.css";
import Folder from "./Folder";
import Note from "./Note";



export default function Sidebar(): JSX.Element {

  

    return (
        <div className="sidebar">
            <div className="search">
                <input placeholder="Search..."></input>
            </div>
            <div className="pinned-notes">
                <h3>Pinned</h3>
      
            </div>
            <div className="notes">
                <h3>Notes</h3>
                {
                    loadNoteReferences().map((file) => {
                        if (file.folder)
                        return <Folder folder={file as FolderType} files={[file]}></Folder>
                        else 
                        return <Note note={file as NoteReference}></Note>
                    })
                }
            </div>
        </div>
    )
}