<template>
  <router-link :to="{ name: 'Details', params: { bookId: book.bookId } }" @click="setActive()">
    <!-- <div class="card">
    <img :src="book.img" alt=""  />
    <div class="card-body">
      <h6>{{ book.title}}</h6>
      <p class="card-text" v-for="a in book.authors"> {{a}}  </p>
    </div>
  </div> -->


    
<div class="card elevation-5 border-0 my-1">
  <img :src="book.img" class="card-img" :alt="book.title">
  <div class="card-img-overlay">
    <h5 class="card-title">{{ book.title }}</h5>
    <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.</p> -->
    <p class="card-text" v-for="a in book.authors"> {{ a }} </p>
  </div>
</div>

  </router-link>





</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    book: { type: Book },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => { });
    watchEffect(() => { });

    return {
      editable,
      setActive(){
        AppState.activeBook = props.book
      }
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
