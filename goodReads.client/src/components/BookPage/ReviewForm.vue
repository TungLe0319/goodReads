<template>
  <div class="modal-body" v-if="book">
    <div class="row">
      <div class="col-md-6 d-flex justify-content-center">
        <img :src="book.img" alt="" class="img-fluid elevation-3 rounded" />
      </div>
      <div class="col-md-6">
        <form @submit.prevent="createReview()">
          <div class="form-check">
            <input
              v-model="editable.recommend"
              class="form-check-input"
              type="checkbox"
              value="recommend"
              id="recommend"
            />
            <label class="form-check-label" for="recommend"> Recommend </label>
          </div>
          <div class="mb-3">
            <textarea
              type="email"
              class="form-control"
              v-model="editable.body"
              columns="7"
              rows="10"
              aria-describedby="emailHelpId"
              placeholder="Please Leave A Review For this Book"
            ></textarea>
          </div>

          <button class="btn btn-outline-dark" type="submit" data-bs-dismiss="modal">
            Leave A Review
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { Modal } from "bootstrap";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { reviewsService } from "../../services/ReviewsService.js";
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    let editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      book: computed(() => AppState.activeBook),
      async createReview() {
        try {
          editable.value.bookId = AppState.activeBook?.id;
          await reviewsService.createReview(editable.value);
          editable.value = {}
        
        } catch (error) {
          Pop.error(error, "[createReview]");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
