<template>
  <div class="card">
    <img :src="book.img" alt=""  />
    <div class="card-body">
      <h6>{{ book.title}}</h6>
      <p v-for="a in book.authors"> {{a}}  </p>
    </div>
  </div>
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

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped></style>
