<template>
  <div class="container">
    <!-- SearchBar -->
    <div
      class="row justify-content-center sticky-top animate__animated animate__fadeInDown"
    >
      <div class="col-md-6">
        <form @submit.prevent="searchByQuery()">
          <div
            class="input-group my-3 rounded-5 elevation-5 sticky-top bg-dark p-1 searchContainer"
          >
            <button class="btn d-flex justify-content-center" type="submit">
              <i class="mdi mdi-magnify fs-2 text-light"></i>
            </button>
            <input
              v-model="editable.term"
              type="text"
              class="form-control rounded-5 border-0"
              aria-label="Username"
              placeholder="Search Books By Title.."
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
      </div>
    </div>

    <!-- !SearchBar -->

    <div class="row">

      <div class="col-md-8">
        <div class="row">
    <TransitionGroup
        name=""
        enterActiveClass="animate__fadeIn animate__animated"
        leaveActiveClass="animate__fadeOut animate__animated"
      >
        <div class="col-md-3 gy-3" v-for="b in books" :key="b.bookId">
          <BookCard :book="b" />
        </div>
      </TransitionGroup>
        </div>
      </div>
  <div class="col-md-4">
    <div class="card p-2 bg-transparent border-0 bg-grey">
<b> WANT THE MOST?</b>
<p class="text-muted">Follow these easy steps.</p>
      <div class="card-body">
<ul class="list-group bg-transparent border-0">
  <li class="list-group-item  bg-transparent border-0 d-flex align-items-center"> <span class=" bg-danger rounded  p-2 ">1</span> <p class="mb-0 ms-2 text-decoration-underline">Wishlist at least 2 books</p></li>
  <li class="list-group-item  bg-transparent border-0 d-flex align-items-center"> <span class=" bg-danger rounded  p-2 ">1</span> <p class="mb-0 ms-2 text-decoration-underline">Follow at least 5 authors</p></li>
  <li class="list-group-item  bg-transparent border-0 d-flex align-items-center"> <span class=" bg-danger rounded  p-2 ">1</span> <p class="mb-0 ms-2 text-decoration-underline">Write your first review</p></li>

  <li class="list-group-item  bg-transparent border-0 d-flex align-items-center"> <span class=" bg-danger rounded  p-2 ">1</span> <p class="mb-0 ms-2 text-decoration-underline">Recommend a book</p></li>


</ul>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import BookCard from "../components/BookCard.vue";
import { bookService } from "../services/BookService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    onMounted(() => {
      getBooks();
    });
    async function getBooks() {
      try {
        await bookService.getBooks();
      } catch (error) {
        Pop.error(error, "[getBooks]");
      }
    }
    let editable = ref({});
    return {
      editable,
      books: computed(() => AppState.books),
      async searchByQuery() {
        try {
          await bookService.searchByQuery(editable.value.term);
        } catch (error) {
          if (
            error ==
            "TypeError: Cannot read properties of undefined (reading 'thumbnail')"
          ) {
          }
          logger.error(error);
        }
      },
    };
  },
  components: { BookCard },
};
</script>

<style scoped lang="scss"></style>
