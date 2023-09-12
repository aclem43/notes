<script setup lang="ts">
import { computed, ref } from 'vue';
import '../assets/home.css';
import NoteSummary from '../components/NoteSummary.vue';
import { type Note } from '../scripts/note';
import { getNotes } from '../scripts/notes';
const notes = getNotes()

const search = ref("")

const dateModified = (note: Note) => {
    if (note.dateModified) {
        if (typeof note.dateModified == "string") {
            return new Date(note.dateModified)
        }
        else {
            return note.dateModified
        }
    }
    else {
        if (typeof note.dateCreated == "string") {
            return new Date(note.dateCreated)
        }
        else {
            return note.dateCreated
        }
    }
}

const filteredNotes = computed(() => {
    const pinnedNotes = []
    for (const note of notes.value) {
        if (note.pinned) {
            pinnedNotes.push(note)
        }
    }
    if (search.value === "") {
        const sortedNotes = notes.value.sort((a, b) => {
            return dateModified(a).getTime() - dateModified(b).getTime()
        })

        return [...new Set(pinnedNotes.concat(sortedNotes))]
    } else {
        const filtered = notes.value.filter(note => {
            if (note.textOnly) {
                return note.textOnly.toLowerCase().includes(search.value.toLowerCase())
            }
            else {
                return note.title.toLowerCase().includes(search.value.toLowerCase())
            }
        })

        return [...new Set(pinnedNotes.concat(filtered))]
    }
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
