import { useState } from "react"

type FileType = "folder" | "file" | "other"
export type FileRef = {name:string, type:FileType, path: string, children?:FileRef[]}

export interface NoteType {
    title: string,
    content: string,
    pinned: boolean,
    created: Date,
    modified: Date,
    path: string,
}

const generateEmptyNote = (): NoteType => {
    return {
        title: "",
        content: "Open a Note or save this one to get started!",
        pinned: false,
        created: new Date(),
        modified: new Date(),
        path: "",
    }
}

export const loadNoteReferences = (): FileRef[] => {
    const dirContents = window.api.dir("./testDir/")
    
    return dirContents
}
const [note, setNote] = useState(generateEmptyNote());


export const loadNote = (path: string): NoteType => {
    const note = window.api.readFile(path);
    return {
        title: "test",
        content:  note,
        pinned: false,
        created: new Date(),
        modified: new Date(),
        path: "",
    }
}