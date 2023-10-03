<script setup lang="ts">
import { mdiCog, mdiFolder, mdiHome, mdiPlus, mdiThemeLightDark } from '@mdi/js';
import '../assets/sidebar.css';
import { setNote } from '../scripts/notes/note';
import { addNote } from '../scripts/notes/notes';

import { setPage } from '../scripts/page';
import { switchTheme } from '../scripts/theme';
import Icon from './Icon.vue';
const home = () => {
    setPage('home')
}

const settings = () => {
    setPage('settings')
}

const folder = () => {
    setPage("folder")
}

const newNote = async () => {
    const n = await addNote({})
    setNote(n)
    setPage('editor')
}

</script>

<template>
    <div class="sidebar">
        <div class="group">
            <button @click="home">
                <Icon :icon="mdiHome" />
            </button>
            <button @click="folder">
                <Icon :icon="mdiFolder" />
            </button>
            <button @click="newNote">
                <Icon :icon="mdiPlus" />
            </button>

        </div>
        <div class="group">
            <button @click="switchTheme()">
                <Icon :icon="mdiThemeLightDark" />
            </button>
            <button @click="settings">
                <Icon :icon="mdiCog" />
            </button>
        </div>
    </div>
</template>