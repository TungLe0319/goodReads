<template>
 <div class="container">
   <div class="row">
     <div class="col-md-3" v-for="b in books">
     <BookCard :book="b" />
     </div>
   </div>
 </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import BookCard from "../components/BookCard.vue";
import { bookService } from "../services/BookService.js";
import Pop from "../utils/Pop.js";

export default {
    setup() {
        onMounted(() => {
            getBooks();
        });
        async function getBooks() {
            try {
                await bookService.getBooks();
            }
            catch (error) {
                Pop.error(error, "[getBooks]");
            }
        }
        return {
            books: computed(() => AppState.books),
        };
    },
    components: { BookCard }
}
</script>

<style scoped lang="scss">

</style>
