<template>
 <div class="container">
   <div class="row">
  <div class="col-md-4">
   <img :src="book.book.img" alt="">
  
  </div>
  <div class="col-md-4"></div>
  <div class="col-md-4"></div>
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
        // getBookInformation()
        });
        async function getBookInformation() {
            try {
                await bookService.getBookInformation(route.params.bookId);
            }
            catch (error) {
                Pop.error(error, "[getBooks]");
            }
        }
        const route = useRoute()
        return {
          route,
       
            book: computed(() => AppState.activeBook),
        };
    },
    components: { BookCard }
}
</script>

<style scoped lang="scss">

</style>
