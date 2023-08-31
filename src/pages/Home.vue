<script setup lang="ts">
import { mdiPlus } from '@mdi/js';
import { computed, ref } from 'vue';
import Icon from '../components/Icon.vue';
import NoteSummary from '../components/NoteSummary.vue';
import { addNote, getNotes } from '../scripts/notes';
const notes = getNotes()

const newNote = async () => {
    await addNote({})
}

const search = ref("")

const filteredNotes = computed(() => {
    const pinnedNotes = []
    for (const note of notes.value) {
        if (note.pinned) {
            pinnedNotes.push(note)
        }
    }
    const filtered = notes.value.filter(note => {
        if (note.textOnly) {
            return note.textOnly.toLowerCase().includes(search.value.toLowerCase())
        }
        else {
            return note.title.toLowerCase().includes(search.value.toLowerCase())
        }
    })

    return [...new Set(pinnedNotes.concat(filtered))]
})

</script>

<template>
    <div class="search-notes">
        <input type="text" placeholder="Search " v-model="search" />
        <div class="note-new" @click="newNote">
            <Icon :size="32" style="color: black;" :icon="mdiPlus" />
        </div>
    </div>
    <div class="note-summary-list" v-for="note in filteredNotes">
        <NoteSummary :note="note" />
    </div>
</template>

<style scoped>
.note-new {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f5f5f5;
    cursor: pointer;
}

.note-new:hover {
    background-color: #e0e0e0;
}

.note-summary-list {
    display: flex;
    flex-direction: column;
    padding: 4px;
}

.search-notes {
    display: flex;
    padding: 4px;
    gap: 2px;
}

.search-notes input {
    flex-grow: 1;
    line-height: 24px;
    outline: none;
}

.search-notes input:focus {
    /* Todo */
}
</style>
