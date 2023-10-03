import { allDirs, allFiles, deleteFile, loadFile, newDir, saveFile } from "../files"
import { Note } from "./note"
import { isValidID } from "./notes"

export const saveNote = async (note: Note) => {
    const path = note.id
    await newDir(path)
    await saveFile(JSON.stringify(stripContent(note)), path + "\\note", "json")
    await saveFile(note.content, path + "\\note", "html")

}

export const loadNotes = async (): Promise<Note[]> => {
    const allFiles = await allDirs()
    const notes: Note[] = []
    if (allFiles) {
        for (let file of allFiles) {
            if (!file.children) {
                continue
            }
            for (let child of file.children) {
                if (child.name == "note.json") {
                    const noteData = await loadFile(file.name + "\\note", "json") ?? "{}"
                    const note = JSON.parse(noteData)
                    note.content = await loadFile(file.name + "\\note", "html") ?? ""
                    notes.push(note)
                }
            }
        }
    }

    return notes
}

export const updateSavedNotes = async () => {
    const files = await allFiles()
    if (!files) return
    for (let file of files) {
        if (file.name?.endsWith(".json") && file.name !== "notes.json") {
            const note = JSON.parse(await loadFile(file.name.replace(".json", ""), "json") ?? "{}")
            if (isValidID(note.id)) {
                await saveNote(
                    note
                )
                await deleteFile(file.name.replace(".json", ""), "json")
            }
        } else if (file.name == "notes.json") {
            await deleteFile(file.name.replace(".json", ""), "json")
        }
    }

}

const stripContent = (note: Note): Partial<Note> => {
    return {
        ...note,
        content: undefined
    }
}