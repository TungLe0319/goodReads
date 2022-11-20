<template>
 <div class="container" v-if="book">
   <div class="row bookRow">
  <div class="col-md-3">
   <img :src="book.book.img" alt="" class="img-fluid">

  </div>
  <div class="col-md-6">
<h1>{{book.book.title}}</h1>

  </div>
  <div class="col-md-3"></div>
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
.bookRow{
  height: 100vh;
}
</style>
