import { useState } from "react";
import { BiChevronDown, BiChevronUp, BiFolder } from "react-icons/bi";
import "../../assets/folder.css";
import { FileReference, FolderType } from "@renderer/data/notes";

export interface FolderProps {
    folder: FolderType
    files: FileReference[]
}

export default function Folder(props: FolderProps) {
    const { files,folder } = props;
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
                    <div className="folder-name">{folder.title}</div>
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
                    <div className="folder-name">{folder.title}</div>
                </div>
                <BiChevronUp />
            </div>
            <div className="folder-notes">
                {
                    files.map((note) => {
                        return `${JSON.stringify(note)}`
                    })
                }
            </div>
        </div>
    );


}