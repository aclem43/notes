<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';

defineProps({ icon: String, size: { type: Number, default: 24 } });
</script> 

<template>
    <svg-icon type="mdi" :path="icon" :size="size"></svg-icon>
</template>
  
  
