<template>
    <h1 class="font-bold font-morris text-5xl text-indigo-950 text-center my-6">My bookshelf</h1>

    <!-- <form @submit.prevent="getBookByTitle" class="flex justify-center gap-4">
        <input type="search" id="searchInput" placeholder="Look for book" class="px-2 ring-2 ring-indigo-200 outline-none">
        <input type="button" value="Submit">
    </form> -->

    <form @submit.prevent="addBook" method="post" class="flex flex-col items-center justify-center gap-4">
        <div class="flex gap-2">
            <label for="inputTitle" class="flex">Title</label>
            <input type="text" ref="inputTitle" class="ring-2 ring-indigo-200 max-w-md outline-none px-2 rounded-sm">
        </div>
        <div class="flex gap-2">
            <label for="inputAuthor" class="flex">Author</label>
            <input type="text" ref="inputAuthor" class="ring-2 ring-indigo-200 max-w-md outline-none px-2 rounded-sm">
        </div>
        <div class="flex gap-2">
            <label for="inputSeries" class="flex">Series</label>
            <input type="text" ref="inputSeries" class="ring-2 ring-indigo-200 max-w-md outline-none px-2 rounded-sm">
        </div>
        <div class="flex gap-2">
            <label for="inputGenre" class="flex">Genre</label>
            <input type="text" ref="inputGenre" class="ring-2 ring-indigo-200 max-w-md outline-none px-2 rounded-sm">
        </div>
        <div class="flex gap-2">
            <label for="inputPageLength" class="flex">Page length</label>
            <input type="text" ref="inputPageLength" class="ring-2 ring-indigo-200 max-w-md outline-none px-2 rounded-sm">
        </div>
        <div class="flex gap-2">
            <label for="inputWordCount" class="flex">Word count</label>
            <input type="text" ref="inputWordCount" class="ring-2 ring-indigo-200 max-w-md outline-none px-2 rounded-sm">
        </div>
        <div class="flex gap-2">
            <label for="inputReleaseYear" class="flex">Release year</label>
            <input type="number" ref="inputReleaseYear"
                class="ring-2 ring-indigo-200 max-w-md outline-none px-2 rounded-sm">
        </div>
        <div class="flex gap-2">
            <label for="inputPrice" class="flex">Price</label>
            <input type="number" ref="inputPrice" class="ring-2 ring-indigo-200 max-w-md outline-none px-2 rounded-sm">
        </div>
        <div class="flex gap-2">
            <label for="inputISBN" class="flex">ISBN</label>
            <input type="text" ref="inputISBN" class="ring-2 ring-indigo-200 max-w-md outline-none px-2 rounded-sm">
        </div>

        <input type="submit" class="ring-1 ring-indigo-900 py-1 px-2 rounded-md" value="Send">
    </form>

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

// const searchInput = ref('');
const books = ref([]);


const getAllBooks = async () => {
    try {
        const { data } = await useAsyncData('books', async () => {
            const { data, error } = await supabase
                .from('books')
                .select();

            if (error) return [];

            return data;
        });
        return data.value;
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

const getBookByTitle = async () => {
    const title = document.getElementById("searchInput").value;
    try {
        const { data, error } = await supabase
            .from('books')
            .select()
            .ilike('title', title);
        console.log('Log:', title, data.value);
        return data.value;
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

const addBook = async () => {
    try {
        const { data, error } = await supabase
            .from('books')
            .insert([
                {
                    title: inputTitle.value,
                    author: inputAuthor.value,
                    series: inputSeries.value,
                    genre: inputGenre.value,
                    page_length: inputPageLength.value,
                    word_count: inputWordCount.value,
                    release_year: inputReleaseYear.value,
                    price: inputPrice.value,
                    isbn: inputISBN.value,
                },
            ])
            .select();
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

const deleteBookById = async (id) => {
    try {

    } catch (error) {
        console.error('An error occurred:', error);
    }
};

books.value = getAllBooks();
</script>