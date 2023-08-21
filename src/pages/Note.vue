<script setup lang="ts">
import { setPage } from '../scripts/page';
import { useEditor, BubbleMenu, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
    content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
    extensions: [
        StarterKit,
    ],
})
</script>
<template>
    <div class="note-container">
        <div>Note</div>

        <div>
            <button @click="setPage('home')">Home</button>
        </div>
        <bubble-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
            <div class="mouse-overlay">

                <button @click="editor.chain().focus().toggleBold().run()"
                    :class="{ 'is-active': editor.isActive('bold') }">
                    bold
                </button>
                <button @click="editor.chain().focus().toggleItalic().run()"
                    :class="{ 'is-active': editor.isActive('italic') }">
                    italic
                </button>
                <button @click="editor.chain().focus().toggleStrike().run()"
                    :class="{ 'is-active': editor.isActive('strike') }">
                    strike
                </button>
            </div>
        </bubble-menu>
        <editor-content :editor="editor" />

    </div>
</template>

<style >
.note-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.mouse-overlay {
    background-color: #fff;
    border-radius: 2px;
    display: flex;
    gap: 1px;
    padding: 1px;
    border: 1px solid #ccc;
}

.mouse-overlay button {
    border: none;
    background-color: #fff;
    padding: 2px 4px;
    border-radius: 1px;
    font-size: 12px;
    cursor: pointer;
    outline: none;
}

.mouse-overlay button.is-active {
    background-color: #c2c2c2;
    font-weight: bold;
}

.mouse-overlay button.is-active:hover {
    background-color: #b1b1b1;
}

.mouse-overlay button:hover {
    background-color: #eee;
}

.] .tiptap {
    padding: 4px;
    border: 1px solid gray;
    outline: none;
}
</style>
  