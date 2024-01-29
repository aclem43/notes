import { FileRef } from "@renderer/data/notes";
import { useState } from "react";
import { BiChevronDown, BiChevronUp, BiFolder } from "react-icons/bi";
import "../../assets/folder.css";
import Note from "./Note";

export interface FolderProps {
    folder: FileRef
}

export default function Folder(props: FolderProps) {
    const { folder } = props;

    console.log("Test")

    function generateChildren() {
        if (folder.children != undefined) {
            return folder.children.map((note) => {
                if (note.type === "file")
                    return <Note key={note.path} note={note} pinned={(note.path.includes("pinned")) ? true : false} ></Note>
                else if (note.type === "folder")
                    return <Folder key={note.path} folder={note}></Folder>
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