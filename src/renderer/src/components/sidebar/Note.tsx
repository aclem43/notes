import { BiNote, BiPin } from "react-icons/bi";
import "../../assets/Note.css";

export interface NoteType {
    title: string,
    content: string,
    pinned: boolean,
    created: Date,
    modified: Date
}

export function generateNote(pinned: boolean, name?:string): NoteType {
    return {
        title: name ? name: "New Note",
        content: "",
        pinned: pinned,
        created: new Date(),
        modified: new Date()
    }
}


export default function Note(props: { note: NoteType }): JSX.Element {

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