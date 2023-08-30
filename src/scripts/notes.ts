import { ref, type Ref } from "vue";
import { loadData, saveData } from "./store";

export interface Note {
    id: string;
    title: string;
    content: string;
    textOnly?: string;
    dateCreated: Date | string;
}

const notes: Ref<Note[]> = ref([])
const note: Ref<Note | null> = ref(null)
export const addNote = async (note: Partial<Note>) => {
    notes.value.push({
        id: generateId(),
        title: note.title || "New Note",
        content: note.content || "",
        dateCreated: new Date(),
    })
    await saveNotes()
}

export const setNote = (n: Note) => {
    note.value = n
}

export const getNote = () => {
    return note
}

export const deleteNote = (id: string) => {
    notes.value = notes.value.filter(note => note.id !== id)
}

export const updateNote = (note: Note) => {
    const index = notes.value.findIndex(n => n.id === note.id)
    notes.value[index] = note
}

export const getNotes = () => {
    return notes
}

export const generateId = () => {
    return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36)
}

export const saveNotes = async () => {

    const notesMap: { id: string }[] = []

    for (const note of notes.value) {
        notesMap.push({
            id: note.id
        })
    }

    await saveData(JSON.stringify(notesMap), "notes")

    for (const note of notes.value) {
        await saveData(JSON.stringify(note), note.id)
    }
}

export const loadNotes = async () => {
    const data = await loadData("notes") ?? "[]"
    const notesMap: { id: string }[] = JSON.parse(data)

    for (const note of notesMap) {
        const noteData = await loadData(note.id) ?? "{}"
        notes.value.push(JSON.parse(noteData))
    }
}
