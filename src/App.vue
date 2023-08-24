<script setup lang="ts">
import { onMounted } from 'vue';
import page from './scripts/page';
// import { initDataFolder } from './scripts/init';
onMounted(async () => {
    // await initDataFolder()
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
