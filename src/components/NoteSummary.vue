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

</script>

<template>
    <div class="note-summary" @click="open">
        <div class="note-summary-title" v-html="props.note.title">
        </div>
        <div>
            {{ props.note.content }}
        </div>
    </div>
</template>
