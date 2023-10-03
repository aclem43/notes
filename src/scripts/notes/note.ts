import { ref, type Ref } from "vue";

export interface Note {
    id: string;
    title: string;
    content: string;
    textOnly?: string;
    pinned?: boolean;
    dateCreated: Date | string;
    dateModified?: Date | string;
}


const note: Ref<Note | null> = ref(null)


export const setNote = (n: Note) => {
    note.value = n
}

export const getNote = () => {
    return note
}