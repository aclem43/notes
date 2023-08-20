<script setup lang="ts">
import { ref } from 'vue';
import NoteSummary from '../components/NoteSummary.vue';

const notes = ref([1, 2, 3, 4, 5]);


</script>

<template>
    <div class="search-notes">
        <input type="text" placeholder="Search " />
    </div>
    <div class="note-summary-list" v-for="note in notes">
        <NoteSummary :test="note" />
    </div>
</template>

<style scoped>
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
