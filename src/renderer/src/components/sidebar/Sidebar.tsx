import { NoteType, loadNoteReferences } from "@renderer/data/notes";
import "../../assets/sidebar.css";
import Folder from "./Folder";
import Note from "./Note";

interface SidebarProps {
    note: {
        value: NoteType
        set: (note: NoteType) => void
    }
}

export default function Sidebar(props: SidebarProps): JSX.Element {
    const { note } = props;


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
                        if (file.type === "folder")
                            return <Folder key={file.path} note={note} folder={file}></Folder>
                        else
                            return <Note key={file.path} note={note} file={file} pinned={(file.path.includes("pinned")) ? true : false} ></Note>
                    })
                }
            </div>
        </div>
    )
}