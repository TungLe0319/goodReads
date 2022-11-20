<template>
 <div class="container mt-4" v-if="book">
   <div class="row bookRow">
  <div class="col-md-3">
   <img :src="book.img" alt="" class="img-fluid rounded" width="400" height="600">

  </div>
  <div class="col-md-6">
<h1 class="bookTitle">{{book.title}}</h1>
<p class="authors" v-for="a in book.author">{{a}} </p>
  </div>
  <div class="col-md-3">
    <div class="card p-2">
      <p>2.99</p>
      <p>Available for a limited time</p>
      <button class="btn btn-primary">Get Deal</button>
      <div class="card-body d-flex flex-column justify-content-center">
        <button class="btn btn-outline-dark"> Save To WishList</button>
        <button class="btn btn-outline-dark mt-2"> Review</button>
        <div class="mt-3">
          <small>Share with your network</small>
          <div>
            <i class="mdi mdi-facebook fs-2"></i>
            <i class="mdi mdi-twitter fs-2"></i>
            <i class="mdi mdi-pinterest fs-2"></i>
            <i class="mdi mdi-mail fs-2"></i>
            <i class="mdi mdi-link fs-2"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
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
.bookTitle{
  font-size: 40pt;
}
</style>
