import { FileRef, NoteType } from "@renderer/data/notes";
import { useState } from "react";
import { BiChevronDown, BiChevronUp, BiFolder } from "react-icons/bi";
import "../../assets/folder.css";
import Note from "./Note";

export interface FolderProps {
    folder: FileRef
    note: {
        value: NoteType
        set: (note: NoteType) => void
    }
}

export default function Folder(props: FolderProps) {
    const { folder, note } = props;


    function generateChildren() {
        if (folder.children != undefined) {
            return folder.children.map((file) => {
                if (file.type === "file")
                    return <Note key={file.path} note={note} file={file} pinned={(file.path.includes("pinned")) ? true : false} ></Note>
                else if (file.type === "folder")
                    return <Folder key={file.path} note={note} folder={file}></Folder>
                return <></>
            })
        }
        return <></>
    }

    const [open, setOpen] = useState(false);

    if (!open) return (
        <div className="folder-container">
            <div className="folder noselect"
                onClick={() => {
                    setOpen(true);
                }}
            >
                <div className="folder-group">
                    <BiFolder />
                    <div className="folder-name">{folder.name}</div>
                </div>
                <BiChevronDown />
            </div>
        </div>
    );
    else return (
        <div className="folder-container">
            <div className="folder noselect"
                onClick={() => {
                    setOpen(false);
                }
                }
            >
                <div className="folder-group">
                    <BiFolder />
                    <div className="folder-name">{folder.name}</div>
                </div>
                <BiChevronUp />
            </div>
            <div className="folder-notes">
                {
                    generateChildren()
                }
            </div>
        </div>
    );


}