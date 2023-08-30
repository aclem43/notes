<script setup lang="ts">
import '../assets/note-summary.css';
import { Note, setNote } from '../scripts/notes';
import { setPage } from '../scripts/page';

const props = defineProps<{
    note: Note
}>()

const open = () => {
    setNote(props.note)
    setPage('editor')
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
            <div class="note-summary-date"> {{ dateTime() }}</div>
        </div>
        <div>
            {{ props.note.textOnly?.split("\n") }}
        </div>
    </div>
</template>
