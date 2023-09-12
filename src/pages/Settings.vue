<script setup lang="ts">
import { getVersion } from '@tauri-apps/api/app';
import { onMounted, ref } from "vue";
import "../assets/settings.css";
import { reloadNotes } from '../scripts/notes';
const appVersion = ref('')
onMounted(async () => {
    appVersion.value = await getVersion();

})
</script>

<template>
    <div class="settings-container ">
        Settings
        <div class="settings-content">
            <div class="settings-item">
                <div class="settings-item-title">App Version</div>
                <div class="settings-item-content">{{ appVersion }}</div>
            </div>
            <div class="settings-item">
                <div class="settings-item-title">Reload Notes</div>
                <div class="settings-item-content">
                    <button class="btn btn-primary" @click="reloadNotes">Reload</button>
                </div>
            </div>
        </div>

    </div>
</template>

