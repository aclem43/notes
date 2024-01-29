import { FileRef, NoteType, loadNote } from "@renderer/data/notes";
import { BiNote, BiPin } from "react-icons/bi";
import "../../assets/Note.css";

interface NoteProps {
    file: FileRef
    pinned: boolean
    note: {
        value: NoteType
        set: (note: NoteType) => void
    }
}

export default function Note(props: NoteProps): JSX.Element {

    const { file, pinned, note } = props;
    const openNote = () => {
        note.set(loadNote(file))
    }
    if (pinned) {
        return (
            <div className="note pin noselect" onClick={openNote}>
                <BiPin></BiPin>
                {file.name}

            </div>
        )
    } else {
        return (
            <div className="note noselect" onClick={openNote}>
                <BiNote></BiNote>
                {file.name}
            </div>)
    }

}