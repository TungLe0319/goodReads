<template>
  <!-- <DetailsBanner/> -->
  <div class="container mt-4" v-if="book">
    <div class="row bookRow">
      <div class="col-md-3 text-center animate__animated animate__fadeInLeft">
        <img
          v-if="book?.largeImg"
          :src="book?.largeImg"
          alt=""
          class="img-fluid rounded elevation-5"
          width="400"
          height="600"
        />
        <img
          v-else
          :src="book?.img"
          alt=""
          class=" img-fluid rounded elevation-5"
          width="400"
          height="600"
        />
        <div class="mt-2">
          <a
            :href="book.previewLink"
            target="_blank"
            class="text-danger previewText"
          >
            <i class="mdi mdi-book fs-5"></i> Read Preview</a
          >
        </div>

        <div class=" ">
      
          <img
          v-if="book"
          :src="book?.img"
          alt=""
          class="img-fluid smallerImg rounded elevation-5 mt-5"
          width="100"
          height="200"
        /></div>
      </div>
      <div class="col-md-6 animate__animated animate__fadeInUp">
        <h1 class="bookTitle elevation-5 bg-create p-2 px-3">
          {{ book.title }}
        </h1>
        <div class="d-flex">
          <!-- <b class="authors mx-2" v-for="a in book.authors">{{ a }}</b> -->
          <b class="authors mx-2 text-dark selectable p-1 rounded" v-for="a in book.authors"  @click="searchByCategory(a)" :title="book.authors"> {{a}} </b>
        </div>
        <div v-if="book.averageRating >= 1" class="d-flex align-items-center">
          <i
            class="mdi mdi-star fs-3 text-create"
            v-for="i in book.averageRating"
          ></i>
          <h4 class="text-dark">{{ book.averageRating }}</h4>
        </div>

        <div v-else class="d-flex align-items-center">
          <i
            class="mdi mdi-star fs-3 text-grey"
            v-for="i in 5"
          ></i>
          <h4 class="ms-2">no ratings</h4>
        </div>
        <div class="border-bottom border-2 my-3 border-muted"></div>
        <div>
          <p class="lead text-dark">
            {{ book.description }}
          </p>
        </div>
        <div class="text-dark">
          <p>
            <i class="mdi mdi-calendar fs-4"></i> <b> Release Date -</b>
            {{ new Date(book.publishedDate).toLocaleDateString() }}
          </p>
          <b class="">Publisher - {{ book.publisher }}</b>
          <div class="d-flex align-items-center">
            <b class="me-2 mb-3 mt-3">Categories -</b>
            <button
              class="btn btn-outline-dark my-3 text-dark p-1 rounded-pill px-2 mx-2"
              v-for="c in book.categories"
              @click="searchByCategory(c)"
            >
              {{ c }}
            </button>
            <!-- <button class="btn btn-outline-dark p-1 rounded-pill px-2 mx-2">  </button> -->
          </div>
          <p><b>Language -</b> {{ book.language }}</p>
          <!-- <p><b>Maturity Rating -</b> {{ book.maturityRating }}</p> -->
          <p><b> Page Count -</b> {{ book.pageCount }}</p>
        </div>
      </div>
      <div class="col-md-3 animate__animated animate__fadeInRight">
        <AddToBookShelf />
      </div>
    </div>

    <section class="" id="reviews">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-between my-3">
          <h3 class="text-dark">Community Reviews</h3>
          <button
             data-bs-toggle="modal"
        data-bs-target="#createReview"
   
            class="btn bg-create text-dark fw-bold d-flex align-items-center justify-content-center"
          >
            <i class="mdi mdi-comment fs-4 text-dark me-2"></i> Write a Review
          </button>
        </div>
        <div class="col-md-12" v-for="r in reviews" :key="r.id">
          <ReviewCard :review="r" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import BookCard from "../components/BookCard.vue";
import CreateReview from "../components/BookPage/CreateReview.vue";
import ReviewCard from "../components/BookPage/ReviewCard.vue";
import { router } from "../router.js";
import { bookService } from "../services/BookService.js";
import Pop from "../utils/Pop.js";
import AddToBookShelf from "../components/BookPage/AddToBookShelf.vue";
import { bookShelvesService } from "../services/BookShelvesService";

export default {
  setup() {
    onMounted(() => {
      // getBookInformation();
      getBookReviews();
      // bookShelvesService.findBook()
    });
    watchEffect(() => {
      if (!AppState.activeBook) {
        router.push("/");
      }
      
    });
    async function getBookInformation() {
      try {
        await bookService.getBookInformation(route.params.id);
        // console.log(AppState.activeBook);
      } catch (error) {
        Pop.error(error, "[getBooks]");
      }
    }
    async function getBookReviews() {
      try {
        await bookService.getBookReviews(route.params.id);
        // console.log(AppState.activeBook);
      } catch (error) {
        Pop.error(error, "[getBookReviews]");
      }
    }
    const editable = ref({});
    const route = useRoute();
    return {
      editable,
      route,
      book: computed(() => AppState.activeBook),
      extraDetails: computed(() => AppState.extraDetails),
      bookShelves: computed(() => AppState.accountBookshelves),
      reviews: computed(() => AppState.reviews),
      async addToBookShelf() {
        try {
        } catch (error) {
          Pop.error(error, "[addToBookShelf]");
        }
      },
      async searchByCategory(query) {
        try {
          router.push('/search')
          AppState.categoryQuery = query
          await bookService.searchByCategory(AppState.categoryQuery);
          // console.log(query);
        } catch (error) {
          console.error("[searchByCategory]", error);
          Pop.error(error);
        }
      },
    };
  },
  components: { BookCard, CreateReview, ReviewCard, AddToBookShelf },
};
</script>

<style scoped lang="scss">
.smallerImg{
  transition: all 0.3s ease;
  cursor: zoom-in;
}
.smallerImg:hover{
transform: scale(2);
transition: all 0.5s ease-in-out
}
.bookRow {
}
.bookTitle {
  font-size: 40pt;
  font-family: "Abril Fatface", cursive;
}
.authors {
  font-family: Arial, Helvetica, sans-serif;
}
.previewText:hover {
  text-decoration: underline;
}
</style>
