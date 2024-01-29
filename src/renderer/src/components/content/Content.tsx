import { NoteType } from "@renderer/data/notes";
import "../../assets/content/content.css";
import Toolbar from "./Toolbar";
import { useState } from "react";

interface ContentProps {
    note: {
        value: NoteType
        set: (note: NoteType) => void
    }
}

export default function Content(props: ContentProps): JSX.Element {
    const { note } = props;

    const [content, setContent] = useState(note.value.content)

    function onType(e: React.ChangeEvent<HTMLDivElement>) {
        console.log(e.target.innerHTML)
        setContent(e.target.innerText)
    }

    function save() {
        console.log(note.value)
        window.api.writeFile(note.value.path, content)
    }


    return (
        <div className="content">
            <div className="editor">
                <Toolbar events={{ onSave: save }}></Toolbar>
                <div className="text-editor" contentEditable="true" onInput={onType} suppressContentEditableWarning={true} >
                    {note.value.content}
                </div>
            </div>
        </div>
    )
}