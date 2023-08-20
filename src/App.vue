<script setup lang="ts">
import page from './scripts/page';
</script>
<template>
    <component :is="page.component" />
</template>