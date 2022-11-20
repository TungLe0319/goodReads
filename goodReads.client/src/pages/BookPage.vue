<template>
  <!-- <DetailsBanner/> -->
  <div class="container mt-4" v-if="book">
    <div class="row bookRow">
      <div class="col-md-3 text-center">
        <img
          :src="book.img"
          alt=""
          class="img-fluid rounded"
          width="400"
          height="600"
        />
        <div>
          <router-link :to="book.previewLink"> 
          
            <a href="" class="text-danger"> <i class="mdi mdi-book fs-2"></i> Read Preview</a>
          </router-link>
        </div>
   
      </div>
      <div class="col-md-6">
        <h1 class="bookTitle">{{ book.title }}</h1>
        <div class="d-flex">
          <b class="authors mx-2" v-for="a in book.author">{{ a }}</b>
        </div>
        <div class="border-bottom border-1 my-3 border-secondary"></div>
        <div>
          <p class="lead">
            {{ book.description }}
          </p>
        </div>
        <div>
          <b> <i class="mdi mdi-calendar fs-4"></i>  Release Date : {{ new Date(book.publishedDate).toLocaleDateString() }}</b>
          <p>Publisher : {{ book.publisher }}</p>
          <p v-for="c in book.categories">Categories: {{ c }}</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-2">
          <p>2.99</p>
          <p>Available for a limited time</p>
          <button class="btn btn-primary">Get Deal</button>
          <div class="card-body d-flex flex-column justify-content-center">
            <button class="btn btn-outline-dark" @click="addToBookShelf()">
              Save To BookShelf
            </button>
            <button class="btn btn-outline-dark mt-2">Review</button>
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
      getBookInformation();
    });
    async function getBookInformation() {
      try {
        // await bookService.getBookInformation(route.params.bookId);
        console.log(AppState.activeBook);
      } catch (error) {
        Pop.error(error, "[getBooks]");
      }
    }
    const route = useRoute();
    return {
      route,
      book: computed(() => AppState.activeBook),

      async addToBookShelf(){
        try {
            console.log('hi');
          } catch (error) {
            Pop.error(error,'[addToBookShelf]')
          }
      }
    };
  },
  components: { BookCard },
};
</script>

<style scoped lang="scss">
.bookRow {
}
.bookTitle {
  font-size: 40pt;
}
</style>
