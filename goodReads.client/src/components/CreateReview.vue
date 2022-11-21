<template>

</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { reviewsService } from "../services/ReviewsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      book: computed(() => AppState.activeBook),
      async createReview() {
        try {
          editable.bookId = AppState.activeBook.bookId
            await reviewsService.createReview(editable.value)
          } catch (error) {
            Pop.error(error,'[createReview]')
          }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
