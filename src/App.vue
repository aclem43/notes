<script setup lang="ts">
import { onMounted } from 'vue';
import page from './scripts/page';
import { initDataFolder } from './scripts/init';

onMounted(async () => {
    // await initDataFolder()
})

</script>
<template>
    <component :is="page.component" />
</template>