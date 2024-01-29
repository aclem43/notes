
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

export const loadNoteReferences = (): FileRef[] => {
    const dirContents = window.api.dir("./testDir/")
    
    return dirContents
}