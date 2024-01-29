import { FileRef } from "@renderer/data/notes";
import { BiNote, BiPin } from "react-icons/bi";
import "../../assets/Note.css";


export default function Note(props: { note: FileRef, pinned: boolean }): JSX.Element {

    const { note, pinned } = props;

    if (pinned) {
        return (
            <div className="note pin noselect">
                <BiPin></BiPin>
                {note.name}
            </div>
        )
    } else {
        return (<div className="note noselect">
            <BiNote></BiNote>
            {note.name}
        </div>)
    }

}