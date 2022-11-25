<template>
  <router-link
    :to="{ name: 'Book', params: { id: book.id } }"
    @click="setActive()"
    v-if="book"
    class="text-dark"
  >
    <div class="card elevation-5 border-0 my-1 text-shadow">
      <img :src="book.img" class="card-img" :alt="book.title" v-if="book.img" />
      <div class="card-img-overlay align-items-end d-flex">
        <h5 class="card-title d-flex align-items-end bookTitle">
          {{ book.title }}
        </h5>
      </div>
    </div>
  </router-link>
  <div class=" bg-transparent border-0 bookTitle  ">
<p class="text-truncate mb-0 fw-bold text-dark">      {{book.title}} </p>
<router-link @click="searchByAuthor()" :to="{name: 'Search', params:{ }}"  class="text-dark "> 

  <p class="text-truncate mb-0 link fs-5"> {{book.authors}} </p>
</router-link>
<router-link @click="searchByCategory(b)" :to="{name: 'Search', params:{ }}" class="text-dark "> 

  <p  v-for="b in book.categories" class="link mb-0"> {{b}} </p>
</router-link>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { SQLBook } from "../models/SQLBook.js";
import { router } from "../router.js";
import { bookService } from "../services/BookService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    book: { type: Book,required:true },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      setActive() {
        document.documentElement.scrollTop = 0
        AppState.activeBook = props.book;
        console.log(AppState.activeBook);
      },
      async searchByCategory(b){
        try {
       
            await bookService.searchByCategory(b)
          } catch (error) {
            Pop.error(error,'[searchByCategory]')
          }
      },
      async searchByAuthor(){
        try {
       let author = props.book.authors
            await bookService.searchBy(author)
          } catch (error) {
            Pop.error(error,'[searchByCategory]')
          }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.link:hover {
  transform: scale(1.05);
  transition: all 0.75s ease;
text-decoration: underline;
}

.bookTitle{
text-overflow: clip;
}
.card {
 
  transition: all 0.25s ease;
  .card-title{
    opacity: 0;
    transition: all 0.5s ease;
  }
  .card-img{
    height: 275px;
    object-fit: cover;
    object-position: center;
  }
}
.card:hover {
 img{
   transform: scale(1.03);
  transition: all 0.25s ease;
  filter: saturate(120%);
  filter: brightness(70%);
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
 }
 .card-title{
opacity: 1;
transition: all 1s ease;
 }

}
.bookTitle:hover{


}
</style>
