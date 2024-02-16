<template>
    <div data-tauri-drag-region class="titlebar flex justify-end rounded-t-md bg-indigo-500/10">
        <div class="titlebar-button p-2 hover:bg-indigo-200 active:ring-2 active:ring-amber-50" id="titlebar-minimize"
            @click="appWindow.minimize()">
            <img src="https://api.iconify.design/mdi:window-minimize.svg" alt="minimize" />
        </div>
        <div class="titlebar-button p-2 hover:bg-indigo-200 active:ring-2 active:ring-amber-50" id="titlebar-maximize"
            @click="appWindow.toggleMaximize()">
            <img src="https://api.iconify.design/mdi:window-maximize.svg" alt="maximize" />
        </div>
        <div class="titlebar-button p-2 hover:bg-indigo-200 active:ring-2 active:ring-amber-50" id="titlebar-close"
            @click="appWindow.close()">
            <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
    </div>
    <NuxtPage class="overflow-auto" />
</template>

<style>
* {
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}

*::selection {
    @apply bg-rose-800 text-amber-200
}

*::-webkit-scrollbar {
    @apply bg-indigo-100 text-indigo-700
}

html, body {
    @apply bg-amber-50 text-indigo-950 rounded-t-md
}
</style>

<script setup>
import { appWindow } from '@tauri-apps/api/window';
</script>
