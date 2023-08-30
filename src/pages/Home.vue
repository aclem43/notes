<script setup lang="ts">
import { mdiPlus } from '@mdi/js';
import Icon from '../components/Icon.vue';
import NoteSummary from '../components/NoteSummary.vue';
import { addNote, getNotes } from '../scripts/notes';

const notes = getNotes()

const newNote = async () => {
    await addNote({})
}
</script>

<template>
    <div class="search-notes">
        <input type="text" placeholder="Search " />
        <div class="note-new" @click="newNote">
            <Icon :size="32" style="color: black;" :icon="mdiPlus" />
        </div>
    </div>
    <div class="note-summary-list" v-for="note in notes">
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
