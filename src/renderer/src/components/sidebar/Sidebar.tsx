import "../../assets/sidebar.css";
import Folder from "./Folder";
import Note, { NoteType, generateNote } from "./Note";


export default function Sidebar(): JSX.Element {

    const notes: NoteType[] = []
    for (let i = 0; i < 10; i++) {
        notes.push(generateNote(false))
    }

    return (
        <div className="sidebar">
            <div className="search">
                <input placeholder="Search..."></input>
            </div>
            <div className="pinned-notes">
                <h3>Pinned</h3>
                <Note note={generateNote(true)} />
                <Note note={generateNote(true)} />

            </div>
            <div className="notes">
                <h3>Notes</h3>
                {
                   window.api.dir("./testDir/").map((file) => {
                        if (file.type == "file")
                        {
                            return <Note key={file.name} note={generateNote(false,file.name)} />
                        }
                        else if (file.type == "folder") {
                            return <Folder name={file.name} notes={[]} key={file.name} />
                        } else return <div > {file.name} </div>
                    })
                }
            </div>
        </div>
    )
}