import { ref, type Ref } from "vue";
import { loadData, saveData } from "./store";

export interface Note {
    id: string;
    title: string;
    content: string;
    dateCreated: Date;
}

const notes: Ref<Note[]> = ref([])
const note: Ref<Note | null> = ref(null)
export const addNote = (note: Partial<Note>) => {
    notes.value.push({
        id: generateId(),
        title: note.title || "New Note",
        content: note.content || "",
        dateCreated: new Date()
    })
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
    await saveData(JSON.stringify(notes.value), "notes")
}

export const loadNotes = async () => {
    const data = await loadData("notes") ?? "[]"
    notes.value = JSON.parse(data)
}
