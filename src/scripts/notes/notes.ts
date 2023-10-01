import { ref, type Ref } from "vue";
import { allData, deleteData, loadData, saveData } from "../store";
import { Note } from "./note";


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


export const deleteNote = async (id: string) => {
    notes.value = notes.value.filter(note => note.id !== id)
    await deleteData(id)
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

export const reloadNotes = async () => {
    notes.value = []
    const data = await allData()
    if (!data) return
    console.log(data)
    for (const file of data) {
        if (!file.name) continue
        if (file.name === "notes.json") continue
        if (file.name.endsWith(".json")) {
            const noteData = await loadData(file.name.replace(".json", "")) ?? "{}"
            notes.value.push(JSON.parse(noteData))
        }
    }
    console.log(notes.value)
    await saveNotes()
}