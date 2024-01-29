import { NoteType } from "@renderer/data/notes";
import "../../assets/content/content.css";
import Toolbar from "./Toolbar";

interface ContentProps {
    note: {
        value: NoteType
        set: (note: NoteType) => void
    }
}

export default function Content(props: ContentProps): JSX.Element {
    const { note } = props;


    function onType(e: React.ChangeEvent<HTMLDivElement>) {
        console.log(e.target.innerHTML)
    }


    return (
        <div className="content">
            <div className="editor">
                <Toolbar></Toolbar>
                <div className="text-editor" contentEditable="true" onInput={onType} suppressContentEditableWarning={true} >
                    {note.value.content}
                </div>
            </div>
        </div>
    )
}