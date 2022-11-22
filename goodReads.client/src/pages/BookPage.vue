<template>
  <!-- <DetailsBanner/> -->
  <div class="container mt-4" v-if="book">
    <div class="row bookRow">
      <div class="col-md-3 text-center animate__animated animate__fadeInLeft">
        <img
          :src="book?.largeImg"
          alt=""
          class="img-fluid rounded elevation-5"
          width="400"
          height="600"
    
        />

        <!--       
        <img
          :src="book.img"
          alt=""
          class="img-fluid rounded elevation-5"
          width="400"
          height="600"
          
        /> -->

        <div class="mt-2">
          <a :href="book.previewLink" target="_blank" class="text-danger">
            <i class="mdi mdi-book fs-5"></i> Read Preview</a
          >
        </div>
      </div>
      <div class="col-md-6 animate__animated animate__fadeInUp">
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
          <b>
            <i class="mdi mdi-calendar fs-4"></i> Release Date :
            {{ new Date(book.publishedDate).toLocaleDateString() }}</b
          >
          <p>Publisher: {{ book.publisher }}</p>
          <p v-for="c in book.categories" @click="searchByCategory(c)">Categories: {{ c }}</p>
          <p>Language: {{ book.language }}</p>
          <p>Maturity Rating: {{ book.maturityRating }}</p>
          <p>
            Page Count: <b>{{ book.pageCount }}</b>
          </p>
        </div>
      </div>
      <div class="col-md-3 animate__animated animate__fadeInRight">
        <div class="card p-2 bg-transparent elevation-4">
          <p>2.99</p>
          <p>Available for a limited time</p>
          <button class="btn btn-primary">Get Deal</button>
          <div class="card-body d-flex flex-column justify-content-center">
            <button class="btn btn-outline-dark" @click="addToBookShelf()">
              Save To BookShelf
            </button>
            <div class="mb-3">
              <label for="" class="form-label">AddtoBookShelf</label>
              <select v-model="editable.bookShelfId" class="form-select form-select-lg" name="" id="">
                <option value="" v-for="b in bookShelves" >New Delhi</option>
         
              </select>
            </div>
             <button class="btn btn-outline-dark mt-2"  data-bs-toggle="modal" data-bs-target="#createReview">
    Review
  </button>
            <div class="mt-3">
              <small>Share with your network :</small>
              <div class="d-flex gap-2 justify-content-center mt-2">
                <img
                  src="../assets/img/ShareIcons/facebook.png"
                  alt=""
                  width="30"
                />
                <img
                  src="../assets/img/ShareIcons/pinterest.png"
                  alt=""
                  width="30"
                />
                <img
                  src="../assets/img/ShareIcons/twitter.png"
                  alt=""
                  width="30"
                />
                <img
                  src="../assets/img/ShareIcons/email.png"
                  alt=""
                  width="30"
                />
                <img
                  src="../assets/img/ShareIcons/link.png"
                  alt=""
                  width="30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed,ref } from "@vue/reactivity";
import { onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import BookCard from "../components/BookCard.vue";
import CreateReview from "../components/CreateReview.vue";
import { router } from "../router.js";
import { bookService } from "../services/BookService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    onMounted(() => {
      getBookInformation();
    });
    watchEffect(()=>{
      if (!AppState.activeBook) {
        router.push("/")
      }
    })
    async function getBookInformation() {
      try {
        await bookService.getBookInformation(route.params.bookId);
        // console.log(AppState.activeBook);
      } catch (error) {
        Pop.error(error, "[getBooks]");
      }
    }
    const editable = ref({})
    const route = useRoute();
    return {
      editable,
      route,
      book: computed(() => AppState.activeBook),
      extraDetails: computed(() => AppState.extraDetails),
      bookShelves: computed(() => AppState.accountBookshelves),
      async addToBookShelf() {
        try {
         
        } catch (error) {
          Pop.error(error, "[addToBookShelf]");
        }
      },
      async searchByCategory(query) {
        try {
          await bookService.searchByCategory(query)
            console.log(query);
          } catch (error) {
            console.error('[searchByCategory]',error)
            Pop.error(error)
          }
      }
    };
  },
  components: { BookCard, CreateReview },
};
</script>

<style scoped lang="scss">
.bookRow {
}
.bookTitle {
  font-size: 40pt;
}
</style>
