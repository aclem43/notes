<script setup lang="ts">
import { onMounted } from 'vue';
import './assets/global.css';
import SideBar from './components/Sidebar.vue';
import { initDataFolder } from './scripts/init';
import { initalLoad } from './scripts/notes/notes';
import page from './scripts/page';
onMounted(async () => {
    await initDataFolder()
    await initalLoad()
})

</script>
<template>
    <div class="layout">
        <div class="sidebar-container">
            <SideBar></SideBar>
        </div>
        <div class="page">
            <component :is="page.component" />
        </div>
    </div>
</template>
