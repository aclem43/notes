import { BiNote, BiPin } from "react-icons/bi";
import "../../assets/Note.css";
import { NoteReference } from "@renderer/data/notes";


export default function Note(props: { note: NoteReference }): JSX.Element {

    const { note } = props;

    if (props.note.pinned) {
        return (
            <div className="note pin noselect">
                <BiPin></BiPin>
                {note.title}
            </div>
        )
    } else {
        return (<div className="note noselect">
            <BiNote></BiNote>
            {note.title}
        </div>)
    }

}