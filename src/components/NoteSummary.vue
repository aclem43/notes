<script setup lang="ts">
import { mdiPin, mdiPinOutline } from '@mdi/js';
import '../assets/note-summary.css';
import { Note, saveNotes, setNote } from '../scripts/notes';
import { setPage } from '../scripts/page';
import Icon from './Icon.vue';

const props = defineProps<{
    note: Note
}>()

const open = () => {
    setNote(props.note)
    setPage('editor')
}

const pin = async () => {
    props.note.pinned = !props.note.pinned
    setNote({
        ...props.note
    })
    await saveNotes()
}

const firstLine = () => {
    let val = ""
    if (props.note.textOnly) {
        const lines = props.note.textOnly.split("\n")
        for (let i = 0; i < lines.length; i++) {
            if (i == 0) continue
            if (lines[i].length > 0) {
                val = lines[i]
                break
            }
        }
    }
    return val
}

const dateTime = () => {
    if (typeof props.note.dateCreated == 'string') {
        return new Date(props.note.dateCreated).toLocaleString()
    } else {
        return props.note.dateCreated.toLocaleString()
    }
}

</script>

<template>
    <div class="note-summary" @click="open">
        <div class="note-summary-title-container">
            <div class="note-summary-title" v-html="props.note.title" />
            <div>
                <button class="note-summary-button" @click.stop="pin">
                    <Icon :size="16" :icon="note.pinned ? mdiPin : mdiPinOutline" />
                </button>
            </div>
        </div>
        <div class="note-summary-date"> {{ dateTime() }}</div>
        <div class="note-summary-content">
            {{ firstLine() }}
        </div>
    </div>
</template>
