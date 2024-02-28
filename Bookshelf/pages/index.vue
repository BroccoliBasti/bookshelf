<template>
    <div class="bg-stone-950">

        <!-- <h1 class="font-bold font-morris text-5xl text-amber-300 text-center my-6">My bookshelf</h1> -->

        <!-- <form @submit="getBookByTitle" class="flex justify-center gap-4">
            <input type="search" id="searchInput" placeholder="Look for book" class="px-2 ring-2 ring-indigo-200 outline-none">
            <input type="button" value="Submit">
        </form> -->

        <form @submit="addBook" method="post"
            class="grid w-full max-w-sm items-center gap-2 mx-auto mt-16 bg-gradient-to-b from-stone-500 to-stone-600 ring-4 ring-stone-400 p-6 rounded-xl">
            <h2 class="text-2xl text-stone-200 font-morris mb-4 drop-shadow-md">New Book</h2>

            <Label for="inputTitle">Title</Label>
            <Input id="inputTitle" type="text" placeholder="Title" class="text-amber-50" />
            <Label for="inputAuthor">Author</Label>
            <Input id="inputAuthor" type="text" placeholder="Author" class="text-amber-50" />
            <Label for="inputSeries">Series</Label>
            <Input id="inputSeries" type="text" placeholder="Series" class="text-amber-50" />
            <Label for="inputGenre">Genre</Label>
            <Input id="inputGenre" type="text" placeholder="Genre" class="text-amber-50" />
            <Label for="inputPageLength">Page length</Label>
            <Input id="inputPageLength" type="number" placeholder="PageLength" class="text-amber-50" />
            <Label for="inputWordCount">WordCount</Label>
            <Input id="inputWordCount" type="number" placeholder="WordCount" class="text-amber-50" />
            <Label for="inputReleaseYear">ReleaseYear</Label>
            <Input id="inputReleaseYear" type="number" placeholder="ReleaseYear" class="text-amber-50" />
            <Label for="inputPrice">Price</Label>
            <Input id="inputPrice" type="number" placeholder="Price" class="text-amber-50" />
            <Label for="inputISBN">ISBN</Label>
            <Input id="inputISBN" type="text" placeholder="ISBN" class="text-amber-50" />
            <Button class="w-24 mx-auto mt-6 rounded-lg">Save</Button>
        </form>

        <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 m-6">
            <div v-for="book in books" :key="book.id" :book="book"
                class=" p-4 aspect-[19/24] font-bold font-morris text-xl ring-2 ring-indigo-100 rounded-sm hover:bg-indigo-200/50 cursor-pointer text-center text-indigo-950">
                {{ book.title }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const isOpen = ref(false);

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