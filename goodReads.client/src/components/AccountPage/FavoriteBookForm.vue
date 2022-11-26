<template>
  <div class="modal-body bg-grey">
    <div class="row">
      <div class="col-md-12">
        <h5>Find a Book</h5>
        <p>Search by book title or author:</p>
      </div>
      <form @submit.prevent="searchByTitle()" class="d-flex mb-4">
        <div class="col-md-9">
          <div class="position-relative">
            <input
              v-model="editable.title"
              type="search"
              name=""
              id=""
              class="p-2 form-control"
            />
          </div>
        </div>
        <div class="col-md-3 ms-4">
          <button type="submit" class="btn bg-create p-2 fw-bold rounded-1">
            Search
          </button>
        </div>
      </form>
      <div class="row scrollY">
        <div class="col-md-12 pe-0 ">
          <div class="" v-if="editable.title">
            <ul class="list-group">
              <li  @click="addToFavorites()" class="list-group-item d-flex align-items-center justify-content-between selectable " v-for="b in books">
                <div class="d-flex align-items-center">

                  <img :src="b.img" alt=""  width="100" height="150" class="elevation-5 rounded-1">
                  <div class="ms-3 ">
                   <p class="fs-5">
                   {{b.title}}
                   </p>
                   <div class="d-flex">
                     <p v-for="b in books.authors"> {{b}} </p>

                   </div>
                  </div>
                </div>
               <div>
                <button class="btn "> <i class=" mdi mdi-plus fs-1"></i></button>
               </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-12">
          <div class="d-flex justify-content-center my-3">
            <button class="btn bg-create fw-bold p-2 rounded-1">Load More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { bookService } from "../../services/BookService.js";
import { favoriteBooksService } from "../../services/FavoriteBooksService.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      books: computed(() =>
        AppState?.aPBooks
      ),

      async searchByTitle(){
        try {
            await bookService.searchByTitle(editable.value.title)
          } catch (error) {
            Pop.error(error,'[searchByTitle]')
          }
      },
      async addToFavorites(){
        try {
           await favoriteBooksService.addFavoriteBook()
          } catch (error) {
            Pop.error(error,'[addToFavorites]')
          }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.scrollY {
  height: 40vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
