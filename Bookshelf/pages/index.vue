<template>
    <h1 class="font-bold text-4xl text-center my-6">Hello Pörld!</h1>

    <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 m-6">
        <div v-for="book in books" :key="book.id" :book="book" class="p-12 font-bold bg-sky-100">
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