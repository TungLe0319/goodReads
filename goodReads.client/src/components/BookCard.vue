<template>
  <router-link
    :to="{ name: 'Book', params: { id: book.id } }"
    @click="setActive()"
    v-if="book"
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
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { SQLBook } from "../models/SQLBook.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    book: { type: SQLBook,required:true },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      setActive() {
        AppState.activeBook = props.book;
        console.log(AppState.activeBook);
      },
    };
  },
};
</script>

<style lang="scss" scoped>

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
   transform: scale(1.09);
  transition: all 0.25s ease;
  filter: saturate(120%);
  filter: brightness(50%);
 }
 .card-title{
opacity: 1;
transition: all 1s ease;
 }
}
</style>
