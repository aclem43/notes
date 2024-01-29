import { FileRef } from "@renderer/data/notes";
import { BiNote, BiPin } from "react-icons/bi";
import "../../assets/Note.css";


export default function Note(props: { note: FileRef, pinned: boolean }): JSX.Element {

    const { note, pinned } = props;
    const openNote = () => {
        console.log("Open note")
    }
    if (pinned) {
        return (
            <div className="note pin noselect" onClick={openNote}>
                <BiPin></BiPin>
                {note.name}
            </div>
        )
    } else {
        return (
            <div className="note noselect" onClick={openNote}>
                <BiNote></BiNote>
                {note.name}
            </div>)
    }

}