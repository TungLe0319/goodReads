<template>
  <router-link :to="{ name: 'Details', params: { bookId: book.bookId } }" @click="setActive()">
    <div class="card elevation-5 border-0 my-1 text-shadow">
      <img :src="book.img" class="card-img" :alt="book.title">
      <div class="card-img-overlay align-items-end d-flex">
        <h5 class="card-title d-flex align-items-end">{{ book.title }}</h5>
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
      setActive() {
        AppState.activeBook = props.book
      }
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
