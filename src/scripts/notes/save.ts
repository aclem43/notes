import { allDirs, allFiles, deleteFile, deleteFolder, loadFile, newDir, saveFile } from "../files"
import { Note } from "./note"
import { isValidID } from "./notes"

export const saveNote = async (note: Note) => {
    const path = note.id
    await newDir(path)
    await saveFile(JSON.stringify(stripContent(note)), path + "\\note", { extension: "json" })
    await saveFile(note.content, path + "\\note", { extension: "html" })

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
                    const noteData = await loadFile(file.name + "\\note", { extension: "json" }) ?? "{}"
                    const note = JSON.parse(noteData)
                    note.content = await loadFile(file.name + "\\note", { extension: "html" }) ?? ""
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
            const note = JSON.parse(await loadFile(file.name.replace(".json", ""), { extension: "json" }) ?? "{}")
            if (isValidID(note.id)) {
                await saveNote(
                    note
                )
                await deleteFile(file.name.replace(".json", ""), { extension: "json" })
            }
        } else if (file.name == "notes.json") {
            await deleteFile(file.name.replace(".json", ""), { extension: "json" })
        }
    }

}

export const removeNote = async (note: Note) => {
    const files = await allDirs()
    if (!files) return
    for (let file of files) {
        if (!file.children) {
            continue
        }
        for (let child of file.children) {
            if (child.name?.endsWith(".json") && file.name !== "notes.json") {
                const file = await loadFile(child.path, { fullPath: true })

                const n = JSON.parse(file)
                if (note.id == n.id) {
                    console.log("Delete")
                    console.log(await deleteFolder(file.path, true, { fullPath: true }))
                    return
                }
            }
        }

    }
}

const stripContent = (note: Note): Partial<Note> => {
    return {
        ...note,
        content: undefined
    }
}