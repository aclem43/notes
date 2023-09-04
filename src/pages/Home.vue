<script setup lang="ts">
import { computed, ref } from 'vue';
import '../assets/home.css';
import NoteSummary from '../components/NoteSummary.vue';
import { getNotes } from '../scripts/notes';

const notes = getNotes()

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
        <input type="text" placeholder="Search" v-model="search" />

    </div>
    <div class="note-summary-list" v-for="note in filteredNotes">
        <NoteSummary :note="note" />
    </div>
</template>
