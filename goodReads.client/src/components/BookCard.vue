<template>
  <div class="card">
    <img :src="book.volumeInfo?.imageLinks?.thumbnail" alt="" />
    <div class="card-body">
      <h6>{{ book.volumeInfo.title}}</h6>
      <p v-for="a in book.volumeInfo.authors"> {{a}}  </p>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    book: { type: Object },
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
