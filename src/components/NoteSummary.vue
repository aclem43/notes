<script setup lang="ts">
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

<style scoped>
.note-summary {
    padding: 4px;
    border-radius: 4px;
    border: 1px solid gray;
}

.note-summary:hover {
    cursor: pointer;
    background-color: #eee;
}

.note-summary-title {
    font-weight: bold;
}
</style>