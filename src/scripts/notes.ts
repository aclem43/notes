import { readTextFile } from "@tauri-apps/api/fs";
import { appDataDir } from "@tauri-apps/api/path";
import { ref, type Ref } from "vue";
import { saveData } from "./store";

interface Note {
    id: string;
    title: string;
    content: string;
    dateCreated: Date;
}

const notes: Ref<Note[]> = ref([])

export const addNote = () => {
    notes.value.push({
        id: generateId(),
        title: "",
        content: "",
        dateCreated: new Date()
    })
}

export const generateId = () => {
    return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36)
}

export const saveNotes = async () => {
    await saveData(JSON.stringify(notes.value), "notes")
}

export const loadNotes = async () => {
    const path = await appDataDir() + "notes.json"
    const file = await readTextFile(path)
    notes.value = JSON.parse(file)
}
