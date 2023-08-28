<script setup lang="ts">
import { mdiCog, mdiHome, mdiPlus, mdiThemeLightDark } from '@mdi/js';
import '../assets/sidebar.css';
import { setPage } from '../scripts/page';
import { switchTheme } from '../scripts/theme';
import Icon from './Icon.vue';

const home = () => {
    setPage('home')
    console.log('home')
}

</script>

<template>
    <div class="sidebar">
        <div class="group">
            <button @click="home">
                <Icon :icon="mdiHome" />
            </button>
            <button>
                <Icon :icon="mdiPlus" />
            </button>

        </div>
        <div class="group">
            <button @click="switchTheme()">
                <Icon :icon="mdiThemeLightDark" />
            </button>
            <button>
                <Icon :icon="mdiCog" />
            </button>
        </div>
    </div>
</template>