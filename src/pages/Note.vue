<script setup lang="ts">
import Bold from '@tiptap/extension-bold';
import Code from '@tiptap/extension-code';
import Document from '@tiptap/extension-document';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/vue-3';
import "../assets/editor.css";
const editor = useEditor({
    content: '<h1> Title </h1> <p> Start typing... </p>',
    extensions: [
        Document,
        Paragraph,
        Text,
        Code,
        Italic,
        Bold,
        History.configure({
            depth: 10,
        }),
        Link.configure({
            openOnClick: false,
        }),
        Strike
    ],
})
</script>
<template>
    <div class="note-container">
        <div>Note</div>

        <div v-if="editor != undefined" class="toolbar">
            <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
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
                <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().undo()">
                    undo
                </button>
                <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().redo()">
                    redo
                </button>
            </div>
        </bubble-menu>
        <editor-content :editor="editor" style="flex-grow: 1;" />

    </div>
</template>

<style ></style>
  