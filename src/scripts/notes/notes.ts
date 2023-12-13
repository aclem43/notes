import { ref, type Ref } from "vue";
import { Note } from "./note";
import { loadNotes, removeNote, saveNote } from "./save";


const notes: Ref<Note[]> = ref([])

export const addNote = async (note: Partial<Note>) => {
    const n = {
        id: generateId(),
        title: note.title || "New Note",
        content: note.content || "",
        dateCreated: new Date(),
    }
    notes.value.push(n)
    await saveNotes()
    return n
}


export const deleteNote = async (note: Note) => {
    await removeNote(note)
    await reloadNotes()

}

export const updateNote = (note: Note) => {
    const index = notes.value.findIndex(n => n.id === note.id)
    notes.value[index] = note
}

export const pinNote = (id: string) => {
    const index = notes.value.findIndex(note => note.id === id)
    notes.value[index].pinned = !notes.value[index].pinned
}

export const getNoteById = (id: string) => {
    return notes.value.find(note => note.id === id)
}

export const getNotes = () => {
    return notes
}

export const generateId = () => {
    return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36)
}
export const isValidID = (id?: string) => {
    if (!id) return false
    return id.length == 17
}


export const saveNotes = async () => {
    for (const note of notes.value) {
        await saveNote(note)
    }
}


export const initalLoad = async () => {
    notes.value = await loadNotes() ?? []
}

export const reloadNotes = async () => {
    notes.value = []
    await initalLoad()
}