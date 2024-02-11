<template>
    <h1 class="font-bold text-4xl text-indigo-950 text-center my-6">My bookshelf</h1>

    <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 m-6">
        <div v-for="book in books" :key="book.id" :book="book"
            class=" p-4 aspect-[19/24] font-bold font-morris text-xl ring-2 ring-indigo-100 rounded-sm hover:bg-indigo-200/50 cursor-pointer text-center text-indigo-950">
            {{ book.title }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    book: Object
});
const supabase = useSupabaseClient();

const books = ref([]);

const { data, error } = await supabase
    .from('books')
    .select();


books.value = data;
console.log(error);
console.log(data);
</script>