<script setup lang="ts">
import { onMounted } from 'vue';
import { initDataFolder } from './scripts/init';
import { saveNotes } from './scripts/notes';
import page from './scripts/page';
onMounted(async () => {
    await initDataFolder()
    await saveNotes()
})

</script>
<template>
    <div class="page">
        <component :is="page.component" />
    </div>
</template>

<style scoped>
.page {
    width: 100%;
    height: 100%;
}
</style>
