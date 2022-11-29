<template>
  <section class="container mt-3">
    <!-- SearchBar -->
    <div class="row justify-content-center sticky-top animate__animated animate__fadeInDown">
      <div class="col-md-6">
        <form @submit.prevent="searchByQuery()">
          <div class="input-group my-3 rounded-5 elevation-5 sticky-top bg-dark p-1 searchContainer">
            <button class="btn d-flex justify-content-center" type="submit">
              <i class="mdi mdi-magnify fs-2 text-light"></i>
            </button>
            <input v-model="editable.term" type="text" class="form-control rounded-5 border-0" aria-label="Username"
              placeholder="Search Books By Title.." aria-describedby="basic-addon1" />
          </div>
        </form>
      </div>
    </div>

    <!-- !SearchBar -->

    <div class="row">
      <div class="col-md-12">
        <h2>Explore Some Lore</h2>
     
      </div>
      <div class="col-md-3">
        <div class="bg-secondary p-2 elevation-2">
          <p class="fw-bold fs-4">Categories</p>
            <TransitionGroup
                    name=""
                    enterActiveClass="animate__fadeIn animate__animated"
                    leaveActiveClass="animate__fadeOut animate__animated"
                  >
             <div
          
             :class="c.checked? 'bg-create mb-5 p-5' : ''"
          class="mb-3 form-check selectable rounded" v-for="c in categories" :key="c.name">
            <input 
         
             :class="c.checked? 'p-3 ' : ''
             "
            v-model="c.checked" v-on:change="searchByCategory(c)" type="checkbox" class="form-check-input"
              id="exampleCheck1" />
            <label
             :class="c.checked? 'fw-bolder fs-4 ms-2' : ''"
            class="form-check-label" for="exampleCheck1">{{ c.name }}</label>
          </div>
                  </TransitionGroup>
        
        </div>
      </div>
      <div class="col-md-9">
        <div class="row gy-3">
          <div class="col-md-3" v-for="b in books" :key="b.id">
            <SearchPageBookCard :book="b" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 d-flex justify-content-center">
            <button :class="index <= 0 ? 'disabled' : ''" :disabled="index <= 0" class="btn btn-outline-dark me-2"
              @click="paginate('prev')">
              <b>Prev</b>
            </button>
            <button class="btn btn-outline-dark" @click="paginate('next')">
              <b>Next</b>
            </button>
          </div>
          <div class="col-md-12 text-center mt-3">
            <b> {{ index }} - {{ endDex + 24 }} of {{ totalItems }} results </b>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import BookCard from "../components/BookCard.vue";
import SearchPageBookCard from "../components/BookCard.vue";
import { bookService } from "../services/BookService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => { });
    watchEffect(() => { });
    return {
      editable,
      books: computed(() => AppState.sPBooks.sort(a=> a.averageRating -0.5 )),
      categories: computed(() => AppState.categories),
      test: computed(()=> AppState.categories[0]),
      index: computed(() => AppState.startIndex),
      endDex: computed(() => AppState.startIndex),
      totalItems: computed(() => AppState.totalItems),
      async searchByQuery() {
        try {

          await bookService.searchByQuery(editable.value.term);
        } catch (error) {
          logger.error(error);
        }
      },
      async searchByCategory(newCategory) {
        try {

          let found = AppState.categories.find(c => c == newCategory)
          console.log(found);

          for (const category of AppState.categories) {
            if (category.name != newCategory.name) {
              category.checked = false
            }
          }

          editable.value.term = ''

          AppState.categoryQuery = newCategory.name

          await bookService.searchByCategory(AppState.categoryQuery);
          AppState.categories.forEach(function(item,i){
  if(item.name == newCategory.name){
    AppState.categories.splice(i, 1);
    AppState.categories.unshift(item);
  }
});
          // console.log(AppState.categoryQuery);
        } catch (error) {
          Pop.error(error, "[searchByCategory]");
        }
      },

      async paginate(x) {
        try {
          if (x == "prev") {
            AppState.startIndex -= 24;
            await bookService.searchByCategory(AppState.categoryQuery);
          }
          if (x == "next") {
            AppState.startIndex += 24;
            await bookService.searchByCategory(AppState.categoryQuery);
          }
        } catch (error) {
          Pop.error(error, "[paginate]");
        }
      },
    };
  },
  components: { BookCard, SearchPageBookCard, SearchPageBookCard },
};
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  accent-color: #f92f60;
}
</style>
