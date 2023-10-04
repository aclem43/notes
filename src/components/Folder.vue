<script setup lang="ts">
import { mdiFolder } from '@mdi/js';
import Icon from './Icon.vue';


defineProps(["name"])



</script>

<template>
    <div class="folder">
        <div class="folder-icon">
            <Icon :icon="mdiFolder" :size="64"></Icon>
        </div>
        <div class="folder-name">
            {{ name }}
        </div>
    </div>
</template>