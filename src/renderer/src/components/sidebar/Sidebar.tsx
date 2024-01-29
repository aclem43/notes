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
                {
                    loadNoteReferences().map((file) => {
                        if (file.type == "folder" && file.name == "pinned" && file.children) {
                            return file.children.map((pin) => {
                                if (pin.type === "folder")
                                    return <Folder key={pin.path} note={note} folder={pin}></Folder>
                                else
                                    return <Note key={pin.path} note={note} file={pin} pinned={true} ></Note>
                            })
                        }
                        return <></>
                    })
                }

            </div>
            <div className="notes">
                <h3>Notes</h3>
                {
                    loadNoteReferences().map((file) => {
                        if (file.path.includes("pinned")) {
                            return <></>
                        }
                        if (file.type === "folder")
                            return <Folder key={file.path} note={note} folder={file}></Folder>
                        else
                            return <Note key={file.path} note={note} file={file} pinned={false} ></Note>
                    })
                }
            </div>
        </div>
    )
}