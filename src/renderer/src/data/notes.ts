
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

export const generateEmptyNote = (): NoteType => {
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
    const dirContents = window.api.dir("./testDir")
    
    return dirContents
}

export const loadNote = (n: FileRef): NoteType => {
    if (n.type !== "file") {
        throw new Error("Cannot load a directory as a note!")
    }
    console.log(n.path)
    const note = window.api.readFile(n.path);
    return {
        title: "test",
        content:  note,
        pinned: false,
        created: new Date(),
        modified: new Date(),
        path: "",
    }
}