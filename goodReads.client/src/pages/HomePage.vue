<template>
  <div class="container">
    <div class="row my-2">
      <div class="col-md-12">
        <div class="card elevation-5 border-0">
          <img
            src="https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg"
            alt=""
            class="bannerImg"
          />
          <div
            class="card-img-overlay align-items-center d-flex justify-content-center"
          >
            <figure>
              <blockquote class="blockquote text-light">
                <p>
                  <i class="mdi mdi-format-quote-open"></i> Books are a uniquely
                  portable magic. <i class="mdi mdi-format-quote-close"></i>
                </p>
              </blockquote>
              <figcaption class="blockquote-footer text-light">
                Stephen King
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <!-- SearchBar -->
    <!-- <div
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
    </div> -->

    <!-- !SearchBar -->

    <div class="row">
      <div class="col-md-8">
        <h2>Performing Arts</h2>
        <div class="row scrollX">
          <div class="col-md-3 gy-3" v-for="b in biographyBooks" :key="b.id">
            <BookCard :book="b" />
          </div>
        </div>
        <div class="row">
          <TransitionGroup
            name=""
            enterActiveClass="animate__fadeIn animate__animated"
            leaveActiveClass="animate__fadeOut animate__animated"
          >
            <div class="col-md-3 gy-3" v-for="b in books" :key="b.id">
              <BookCard :book="b" />
            </div>
          </TransitionGroup>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row g-3">
          <EasyStepsCard />

          <LeaveFeedBackCard />
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
import EasyStepsCard from "../components/EasyStepsCard.vue";
import LeaveFeedBackCard from "../components/LeaveFeedBackCard.vue";
import { bookService } from "../services/BookService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    onMounted(() => {
      // getBooks();
      getMySQLBooks();
    });
    async function getBooks() {
      try {
        await bookService.getBooks();
      } catch (error) {
        Pop.error(error, "[getBooks]");
      }
    }
    async function getMySQLBooks() {
      try {
        await bookService.getMySQLBooks();
      } catch (error) {
        Pop.error(error, "[getBooks]");
      }
    }
    let editable = ref({});
    return {
      editable,
      books: computed(() => AppState.books),
      biographyBooks: computed(() =>
        AppState.books.filter((b) => b.categories.includes("Performing Arts"))
      ),
      scienceBooks: computed(() =>
        AppState.books.filter((b) => b.categories.includes("Science"))
      ),
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
  components: { BookCard, EasyStepsCard, LeaveFeedBackCard },
};
</script>

<style scoped lang="scss">
.scrollX {
  flex-wrap: nowrap;
  overflow-x: auto;
}
.blockquote {
  font-size: 3em;
}
.blockquote-footer {
  font-size: 2em;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}
.bannerImg {
  width: auto;
  height: 300px;
  object-fit: cover;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  filter: brightness(80%);
}
</style>
