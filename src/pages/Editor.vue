<script setup lang="ts">
import { mdiAlphaH, mdiFloppy, mdiFormatBold, mdiFormatHeader1, mdiFormatHeader2, mdiFormatItalic, mdiFormatStrikethrough, mdiRedo, mdiUndo } from '@mdi/js';
import Bold from '@tiptap/extension-bold';
import Code from '@tiptap/extension-code';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import Typography from '@tiptap/extension-typography';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/vue-3';
import { onMounted } from 'vue';
import "../assets/editor.css";
import Icon from '../components/Icon.vue';
import { getNote, saveNotes, updateNote } from '../scripts/notes';

const note = getNote()

const CustomDocument = Document.extend({
    content: 'heading block*',
})

const editor = useEditor({
    content: '<h1> Title </h1> <p> Start typing... </p>',
    extensions: [
        CustomDocument,
        Placeholder.configure({
            placeholder: ({ node }) => {
                if (node.type.name === 'heading') {
                    return 'Title?'
                }

                return '...'
            },
        }),
        Typography,
        Heading,
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


const isHeaderActive = () => {
    if (editor.value == undefined) return false
    return editor.value.isActive('heading', { level: 1 }) || editor.value.isActive('heading', { level: 2 })
}

onMounted(() => {
    if (note.value == null) return
    editor.value?.commands.setContent(note.value.content)
})

const save = async () => {
    if (note.value == null) return
    const rx = /1>(.*?)<\/h1>/
    note.value.title = (editor.value?.getHTML() ?? '<h1>Empty Title</h1>').match(rx)?.[1] ?? 'Empty title'
    note.value.content = editor.value?.getHTML() ?? ''
    updateNote(note.value)
    await saveNotes()
    console.log(note.value)
}

const isDifferent = () => {
    if (note.value == null) return false
    return note.value.content != editor.value?.getHTML()
}

</script>
<template>
    <div class="note-container">
        <div v-if="editor != undefined" class="toolbar">
            <div class="group">
                <div class="dropdown">
                    <button :class="{ 'is-active': isHeaderActive() }">
                        <Icon :icon="mdiAlphaH" :size="32"></Icon>

                    </button>
                    <div class="dropdown-content">
                        <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                            <Icon :icon="mdiFormatHeader1"></Icon>
                        </button>
                        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                            <Icon :icon="mdiFormatHeader2"></Icon>
                        </button>
                    </div>
                </div>
                <div class="divider"></div>
                <button @click="editor.chain().focus().toggleBold().run()"
                    :class="{ 'is-active': editor.isActive('bold') }">
                    <Icon :icon="mdiFormatBold"></Icon>
                </button>
                <button @click="editor.chain().focus().toggleItalic().run()"
                    :class="{ 'is-active': editor.isActive('italic') }">
                    <Icon :icon="mdiFormatItalic"></Icon>
                </button>
                <button @click="editor.chain().focus().toggleStrike().run()"
                    :class="{ 'is-active': editor.isActive('strike') }">
                    <Icon :icon="mdiFormatStrikethrough"></Icon>
                </button>
                <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().undo()">
                    <Icon :icon="mdiUndo"></Icon>
                </button>
                <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().redo()">
                    <Icon :icon="mdiRedo"></Icon>

                </button>
            </div>
            <div class="group">
                <button :disabled="!isDifferent()" @click="save">
                    <Icon :icon="mdiFloppy"> </Icon>
                </button>
            </div>
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
        <editor-content :editor="editor" style="flex-grow: 1;" />

    </div>
</template>
