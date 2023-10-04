<script setup lang="ts">
import "../assets/folder.css";
import Folder from "../components/Folder.vue";

const folders = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']


</script>

<template>
    <div>
        <div>

        </div>
        <div class="folder-container">
            <Folder :name="folder" v-for="folder in folders"></Folder>
        </div>
    </div>
</template>