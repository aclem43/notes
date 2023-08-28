<script setup lang="ts">
import { onMounted } from 'vue';
import { initDataFolder } from './scripts/init';
import { loadNotes } from './scripts/notes';
import page from './scripts/page';
onMounted(async () => {
    await initDataFolder()
    await loadNotes()
})

</script>
<template>
    <div class="layout">
        <div class="sidebar"></div>
        <div class="page">
            <component :is="page.component" />
        </div>
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    width: 100%;
    height: 100%;
}

.layout div.sidebar {
    width: 40px;
    height: 100%;
    background-color: #f5f5f5;
}

.page {
    width: 100%;
    height: 100%;
}
</style>
