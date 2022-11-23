<template>
  <div class="card bg-transparent my-3 square ">
    <div
      class="d-flex align-items-center justify-content-between px-5 pt-3 pb-2"
    >
      <div class="d-flex align-items-center">
        <div role="accountImg">
          <img
            :src="review.creator.picture"
            alt=""
            class="img-fluid rounded-circle elevation-5"
            width="80"
          />
        </div>
        <div role="name">
          <p class="ms-3 fs-5 text-decoration-underline">
            {{ review.creator.name.split("@")[0] }}
          </p>
        </div>
      </div>

      <div role="createdAt " class="d-flex align-items-center">
        <button class="btn p-0 me-3 ">
          <img
            src="src\assets\img\follow.png"
            alt="follow icon"
            width="40"
            title="Follow This User"
          />
        </button>
        <p class="text-dark lighten-60">
          {{ new Date(review.createdAt).toLocaleString() }}
        </p>
        <button @click="deleteReview()" class="btn ms-3" title="Delete Review">
          <img src="src\assets\img\delete.png" alt="delete Icon" width="40" />
        </button>
      </div>
    </div>

    <div class="px-4">
      <div v-if="review.recommend">
        <b class="fs-5"> Recommend </b>
      </div>

      <div>
        <p class="fs-5">{{ review.body }}</p>
      </div>
    </div>

    <div class="bg-light darken-10">
      <div class="form-floating m-4">
        <input
          type="text"
          class="form-control border-0"
          name="reviewComment"
          id="reviewComment"
          placeholder=""
        />
        <label for="reviewComment">comment</label>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { Review } from "../../models/Review.js";
import { reviewsService } from "../../services/ReviewsService.js";
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {
    review: { type: Review, required: true },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,

      async deleteReview() {
        try {
          if (await Pop.confirm()) {
            let reviewId = props.review.id;
            await reviewsService.deleteReview(reviewId);
          }
        } catch (error) {
          Pop.error(error, "[removeReview]");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.btn{
  transition: all 0.25s ease;

}
.btn:hover {
  transform: scale(1.1);
  transition: all 0.25s ease;


  box-shadow: -4px 4px  rgb(255, 145, 0);

}

</style>
