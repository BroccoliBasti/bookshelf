<template>
    <NuxtPage />
</template>

<style>
body {
    @apply bg-amber-50
}

* {
    @apply transform
}

*::selection {
    @apply bg-rose-800 text-amber-200
}

*::-webkit-scrollbar {
    @apply bg-indigo-100 text-indigo-700
}

/* *::-webkit-scrollbar-button {
    @apply bg-indigo-700
} */
</style>