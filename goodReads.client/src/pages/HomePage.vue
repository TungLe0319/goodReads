<template>
  <div class="container-fluid p-0">
       <div class="row mb-5">
      <div class="col-md-12">
        <div class="card  border-0">
          <img src="https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg" alt=""
            class="bannerImg" />

          <div
            class="card-img-overlay align-items-center d-flex justify-content-center flex-column justify-content-evenly">
            <div class=" text-constantLight ">
              <h1 class="text-shadow abril text-center display-4">Find Your Book, Find Your Why <br>
              Become Better After Books</h1>
              
            </div>

            <figure class="text-shadow px-5 mb-5">
              <blockquote class="blockquote text-constantLight ">
                <p>
                  <i class="mdi mdi-format-quote-open"></i>Good friends, good books, and a sleepy conscience: this is the ideal life.
<i
                    class="mdi mdi-format-quote-close"></i>
                </p>

              </blockquote>
              <figcaption class="blockquote-footer text-constantLight text-center mt-3">
                Mark Twain
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="container p-5" v-if="books">

 
    <div class="row">
      <div class="col-md-8">

        <div class="row">
          <TransitionGroup name="" enterActiveClass="animate__fadeIn animate__animated"
            leaveActiveClass="animate__fadeOut animate__animated">
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
          <RecentActivity/>
        </div>
      </div>
    </div>
    <section>
      <div class="mt-4">
        <h2 class="categoryTitle text-dark">Cooking</h2>
         <!-- <swiper
    :slidesPerView="6"
    :spaceBetween="30"
     :navigation="true"
        :loop="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="c in cookingBooks" :key="c.id"> 
            <BookCard :book="c" />
         </swiper-slide>
  </swiper> -->
        <div class="row scrollX">
          <div class="col-md-2 gy-3" v-for="c in cookingBooks" :key="c.id">
            <BookCard :book="c" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="categoryTitle text-dark">Science</h2>
        <div class="row scrollX">
          <div class="col-md-2 gy-3" v-for="s in scienceBooks" :key="s.id">
            <BookCard :book="s" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="categoryTitle text-dark">Fiction</h2>
        <div class="row scrollX">
          <div class="col-md-2 gy-3" v-for="f in fictionBooks" :key="f.id">
            <BookCard :book="f" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="categoryTitle text-dark">Nature</h2>
        <div class="row scrollX">
          <div class="col-md-2 gy-3" v-for="n in natureBooks" :key="n.id">
            <BookCard :book="n" />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <h2 class="categoryTitle text-dark">History</h2>
        <div class="row scrollX">
          <div class="col-md-2 gy-3" v-for="h in historyBooks" :key="h.id">
            <BookCard :book="h" />
          </div>
        </div>
      </div>

    </section>

    <section>
      <h2 class="categoryTitle text-dark">Best Sellers</h2>
      <div class="row scrollX">
        <div class="col-md-2 gy-3" v-for="b in bestSellers" :key="b.id">
          <BookCard :book="b" />
        </div>
      </div>
    </section>
  </div>
  <div class="" v-else>
    <h1>LOADING</h1>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import BookCard from "../components/BookCard.vue";
import EasyStepsCard from "../components/EasyStepsCard.vue";
import LeaveFeedBackCard from "../components/LeaveFeedBackCard.vue";
import RecentActivity from "../components/RecentActivity.vue";
import SwiperTest from "../components/SwiperTest.vue";
import { SQLBook } from "../models/SQLBook.js";
import { bookService } from "../services/BookService.js";
import { quotesService } from "../services/QuotesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Navigation } from "swiper";
export default {
  setup() {
   
    onMounted(() => {
      // getQuote()
      // // getMySQLBooks();
  

    });
    async function getMySQLBooks() {
      try {
        await bookService.getMySQLBooks();
      } catch (error) {
        Pop.error(error, "[getBooks]");
      }
    }
    async function getBooks() {
      try {
        await bookService.getBooks();
      } catch (error) {
        Pop.error(error, "[getBooks]");
      }
    }
    // async function getQuote() {
    //   try {
    //     await quotesService.getQuote();
    //   } catch (error) {
    //     Pop.error(error, "[getBooks]");
    //   }
    // }
    let editable = ref({});
    return {
      editable,
      quote: computed(() => AppState.quote),
      books: computed(() => AppState.books.slice([0], [16])),
      cookingBooks: computed(() =>
        AppState.books.filter((b) => b.categories.includes("Cooking")).slice([0],[24]).sort(()=> Math.random -0.5)
      ),
      scienceBooks: computed(() =>
        AppState.books.filter((b) => b.categories.includes("Science")).slice([0],[24]).sort(()=> Math.random -0.5)
      ),
      fictionBooks: computed(() =>
        AppState.books.filter((b) => b.categories.includes("Fiction")).slice([0],[24]).sort(()=> Math.random -0.5)
      ),
      natureBooks: computed(() =>
        AppState.books.filter((b) => b.categories.includes("Nature")).slice([0],[24]).sort(()=> Math.random -0.5)
      ),
      historyBooks: computed(() =>
        AppState.books.filter((b) => b.categories.includes("History")).slice([0],[24]).sort(()=> Math.random -0.5)
      ),
      bestSellers: computed(() =>
        AppState.books.filter((b) => b.averageRating >= 5).slice([0],[24]).sort(()=> Math.random -0.5)
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
        modules: [Pagination,Navigation],
    };
  },
  components: { EasyStepsCard, LeaveFeedBackCard, SQLBook, BookCard, RecentActivity, SwiperTest,  Swiper,
    SwiperSlide, },
};
</script>

<style scoped lang="scss">


.animate__fadeIn {
  animation-duration: 100ms;
  animation-delay: 100ms;
}

.categoryTitle {
  font-size: 3em;
  font-family: "Abril Fatface", cursive;
}


.scrollX {
  flex-wrap: nowrap;
  overflow-x: auto;
  height: 31em;
}

.blockquote {
  font-size: 1.25em;
}

.blockquote-footer {
  font-size: 1.25em;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}

.bannerImg {
  width: auto;
  height: 500px;
  object-fit: cover;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  filter: brightness(80%);
}
</style>
