<template>
  <div class="card bg-transparent my-3 square position-relative">
    <div class="recommended" v-if="review.recommend">
      <img src="../../src/assets/img/bookMark.png" alt="" width="40" />
    </div>
    <div
      class="d-flex align-items-center justify-content-between px-5 pt-3 pb-2"
    >
      <div class="d-flex align-items-center">
        <div role="accountImg" class="">
          <img
            :src="review.creator.picture"
            alt=""
            class="profileImg elevation-5"
          />
        </div>
        <div role="name ">
          <p class="ms-3 mb-0 fs-5 text-dark">
            {{ review.creator.name.split("@")[0] }}
          </p>
         
        </div>
      </div>

      <div role="createdAt " class="d-flex align-items-center">
        <button
          @click="followByUserId()"
          v-if="user.isAuthenticated && review.creator.id != account.id"
          class="btn p-0 me-3"
        >
          <img
            src="../../src/assets/img/follow.png"
            alt="follow icon"
            width="40"
            title="Follow This User"
          />
        </button>

        <button
          v-if="review.creator.id == account.id"
          @click="deleteReview()"
          class="btn ms-3"
          title="Delete Review"
        >
          <img src="../../src\assets/img/delete.png" alt="delete Icon" width="40" />
        </button>
      </div>
    </div>

    <div class="px-4 text-dark">
      <div v-if="review.recommend" class="mt-2 mb-3 text-center">
        <b class="fs-5"> Recommended: </b>
      </div>
      <div class="div p-3 px-4" v-else></div>

      <!-- <div>
        <p class="fs-5">{{ review.body }}</p>
      </div> -->
    </div>

    <div class="d-flex flex-column justify-content-center align-items-center">
      <router-link :to="{name: 'Book', params:{id: review.book.id }}"> 

  <img :src="review.book.largeImg" alt="" width="200" height="300" class="elevation-4 rounded">
</router-link>
<p>

  {{review.book.authors}}
</p>
      <!-- <BookCard :book="review.book" /> -->
    </div>

    <div class="text-muted text-center">
      <p>
        {{ review.createdAt }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { Review } from "../models/Review.js";
import { reviewsService } from "../services/ReviewsService.js";
import { followsService } from "../services/FollowsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import BookCard from "./BookCard.vue";

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
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async deleteReview() {
        try {
       //   console.log(props.review.book);
          if (await Pop.confirm()) {
            let reviewId = props.review.id;
            await reviewsService.deleteReview(reviewId);
          }
        } catch (error) {
          Pop.error(error, "[removeReview]");
        }
      },
      async followByUserId() {
        try {
          let id = {
            followingUserId: props.review.creator.id,
          };
          await followsService.followByUserId(id);
        } catch (error) {
          Pop.error(error, "[followingUserId]");
        }
      },
    };
  },
  components: { BookCard },
};
</script>

<style lang="scss" scoped>
.accountImg {
  overflow: hidden;
  border-radius: 50%;
}

.accountImg img {
  transition: transform 0.5s ease;
}

.accountImg:hover img {
  transform: scale(0.5);
  border-radius: 50%;
}
.profileImg {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}
.recommended {
  position: absolute;
  top: -10px;
  left: 10px;
}

.btn {
  transition: all 0.25s ease;
}
.btn:hover {
  transform: scale(1.1);
  transition: all 0.25s ease;
}
</style>
