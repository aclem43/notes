import { NoteType } from "@renderer/data/notes";
import { useState } from "react";
import "../../assets/content/content.css";
import TextEditor from "./TextEditor";
import Toolbar from "./Toolbar";
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
                <div className="text-editor-parent">
                    <TextEditor></TextEditor>
                </div>
            </div>
        </div>
    )
}