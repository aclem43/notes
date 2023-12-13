<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { mdiDotsVertical, mdiPin, mdiPinOutline, mdiTrashCan } from '@mdi/js';
import '../assets/note-summary.css';
import { setNote, type Note } from '../scripts/notes/note';
import { deleteNote, saveNotes } from '../scripts/notes/notes';
import { setPage } from '../scripts/page';
import Icon from './Icon.vue';
const props = defineProps<{
    note: Note
}>()

const open = () => {
    setNote(props.note)
    setPage('editor')
}

const pin = async () => {
    props.note.pinned = !props.note.pinned
    setNote({
        ...props.note
    })
    await saveNotes()
}

const del = async () => {
    deleteNote(props.note)
    await saveNotes()
}

const firstLine = () => {
    let val = ""
    if (props.note.textOnly) {
        const lines = props.note.textOnly.split("\n")
        for (let i = 0; i < lines.length; i++) {
            if (i == 0) continue
            if (lines[i].length > 0) {
                val = lines[i]
                break
            }
        }
    }
    return val
}

const dateTimeCreated = () => {
    if (typeof props.note.dateCreated == 'string') {
        return new Date(props.note.dateCreated).toLocaleString()
    } else {
        return props.note.dateCreated.toLocaleString()
    }
}

const dateTimeModified = () => {
    const date = new Date()
    let dateModified = props.note.dateModified
    if (dateModified == undefined) {
        return ""
    }
    if (typeof dateModified == 'string') {
        dateModified = new Date(dateModified)
    }
    const diff = date.getTime() - dateModified.getTime()
    const diffSeconds = diff / 1000
    const diffMinutes = diffSeconds / 60
    const diffHours = diffMinutes / 60
    const diffDays = diffHours / 24
    const diffWeeks = diffDays / 7
    const diffMonths = diffWeeks / 4
    const diffYears = diffMonths / 12

    if (diffYears >= 1) {
        return `${Math.floor(diffYears)}y ago`
    } else if (diffMonths >= 1) {
        return `${Math.floor(diffMonths)}mo ago`
    } else if (diffWeeks >= 1) {
        return `${Math.floor(diffWeeks)}w ago`
    } else if (diffDays >= 1) {
        return `${Math.floor(diffDays)}d ago`
    } else if (diffHours >= 1) {
        return `${Math.floor(diffHours)}h ago`
    } else if (diffMinutes >= 1) {
        return `${Math.floor(diffMinutes)}m ago`
    } else if (diffSeconds >= 1) {
        return `${Math.floor(diffSeconds)}s ago`
    } else {
        return "now"
    }
}

</script>

<template>
    <div class="note-summary" @click="open">
        <div class="note-summary-title-container">
            <div class="note-summary-title" v-text="props.note.title" />
            <div class="summary-group">
                <button class="note-summary-button" @click.stop="pin">
                    <Icon :size="16" :icon="note.pinned ? mdiPin : mdiPinOutline" />
                </button>
                <Popover class="summary-menu">
                    <PopoverButton class="note-summary-button">
                        <Icon :size="16" :icon="mdiDotsVertical" />
                    </PopoverButton>

                    <PopoverPanel class="summary-menu-panel">
                        <button class="note-summary-button" @click.stop="del">
                            <Icon :size="16" :icon="mdiTrashCan" />

                        </button>
                    </PopoverPanel>
                </Popover>
            </div>
        </div>
        <div class="note-summary-container ">
            <div class="note-summary-date">
                {{ dateTimeCreated() }}
            </div>
            <div class="note-summary-date" v-if="dateTimeModified() !== ''">
                Last Modified: {{ dateTimeModified() }}
            </div>
        </div>
        <div class="note-summary-content">
            {{ firstLine() }}
        </div>
    </div>
</template>
