<template>
 <div class="container">
   <div class="row">
    
   </div>
 </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import BookCard from "../components/BookCard.vue";
import { bookService } from "../services/BookService.js";
import Pop from "../utils/Pop.js";

export default {
    setup() {
        onMounted(() => {
        
        });
        async function getBookInformationById() {
            try {
                await bookService.getBookInformationById(route.params.bookId);
            }
            catch (error) {
                Pop.error(error, "[getBooks]");
            }
        }
        const route = useRoute()
        return {
          route,
            books: computed(() => AppState.books),
        };
    },
    components: { BookCard }
}
</script>

<style scoped lang="scss">

</style>
