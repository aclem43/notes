
export type FileReference = (FolderType | NoteReference)

export interface NoteReference {
    title: string,
    path: string,
    folder: false
}

export interface FolderType extends Omit<NoteReference,"folder"> {
    folder: true
    children: (FolderType | NoteReference)[]
}

export interface NoteType {
    title: string,
    content: string,
    pinned: boolean,
    created: Date,
    modified: Date,
    path: string,
}

export const loadNoteReferences = (): FileReference[] => {
    const dirContents = window.api.dir("./testDir/")
    const fileReferences: FileReference[] = []
    for (let content of dirContents){
        if (content.type == "folder"){
            fileReferences.push(
                {
                    title: content.name,
                    folder: true,
                    path: content.path,
                    children: []
                }
            )
        }
        else if (content.type == "file") {
            fileReferences.push(
                {
                    title: content.name,
                    path: content.path,
                    folder: false
                }
            )
        }
    }
    return fileReferences
}